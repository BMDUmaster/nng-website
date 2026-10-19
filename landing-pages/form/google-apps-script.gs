/**
 * NNG landing-page enquiry form: receives a submission, adds it to the "Enquiries" sheet and emails the team.
 *
 * Setup (once): open the Google Sheet > Extensions > Apps Script, paste this file, Save, run `setup` once and allow
 * access, then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone). Copy the /exec URL into
 * landing-pages/form/config.mjs.
 *
 * The address that receives the emails lives in the "Settings" tab (cell B1), so it can change without touching code.
 */

const SHEET = 'Enquiries';
const SETTINGS = 'Settings';
const DEFAULT_EMAIL = 'nngmarketing2027@gmail.com';
const HEADERS = ['Date and time (IST)', 'Page', 'Button', 'First name', 'Last name', 'Email', 'Country code', 'Mobile number',
  'Occupation', 'Reason for contact', 'Details', 'UTM source', 'UTM medium', 'UTM campaign', 'UTM content', 'UTM term',
  'Page URL', 'Referrer'];

function setup() {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName(SHEET) || book.insertSheet(SHEET);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#123A2B').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }
  const settings = book.getSheetByName(SETTINGS) || book.insertSheet(SETTINGS);
  if (!settings.getRange('B1').getValue()) {
    settings.getRange('A1:B1').setValues([['Send enquiry emails to (separate several with commas)', DEFAULT_EMAIL]]);
    settings.getRange('A1').setFontWeight('bold');
    settings.autoResizeColumn(1);
  }
  // Ask for the mail permission now, so the first real enquiry does not fail.
  MailApp.getRemainingDailyQuota();
}

function doGet() {
  return json({ ok: true, service: 'NNG enquiry form' });
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  } catch (err) {
    return json({ ok: false, error: 'Invalid request' });
  }
  // A hidden field people never see: if it is filled in, a bot sent this.
  if (data.website) return json({ ok: true });

  const v = (key, max) => clean(data[key], max || 200);
  const row = {
    page: v('page', 60), source: v('source', 60), first: v('firstName', 80), last: v('lastName', 80), email: v('email', 160),
    code: v('countryCode', 8), mobile: v('mobile', 20), occupation: v('occupation', 80), reason: v('reason', 60),
    details: v('details', 2000), utmSource: v('utm_source'), utmMedium: v('utm_medium'), utmCampaign: v('utm_campaign'),
    utmContent: v('utm_content'), utmTerm: v('utm_term'), url: v('url', 500), referrer: v('referrer', 500),
  };
  if (!row.first || !row.last || !row.occupation || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email) ||
      !/^\+\d{1,4}$/.test(row.code) || !/^\d{5,15}$/.test(row.mobile)) {
    return json({ ok: false, error: 'Missing or invalid details' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const book = SpreadsheetApp.getActive();
    let sheet = book.getSheetByName(SHEET);
    if (!sheet) { setup(); sheet = book.getSheetByName(SHEET); }
    const when = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MMM yyyy, hh:mm a');
    sheet.appendRow([when, row.page, row.source, row.first, row.last, row.email, row.code, row.mobile, row.occupation,
      row.reason, row.details, row.utmSource, row.utmMedium, row.utmCampaign, row.utmContent, row.utmTerm, row.url,
      row.referrer].map(safe));
  } finally {
    lock.releaseLock();
  }

  try {
    notify(row);
  } catch (err) {
    console.error('Email failed: ' + err);
  }
  return json({ ok: true });
}

function notify(row) {
  const settings = SpreadsheetApp.getActive().getSheetByName(SETTINGS);
  const to = (settings && String(settings.getRange('B1').getValue()).trim()) || DEFAULT_EMAIL;
  const lines = [
    ['Page', row.page], ['Button', row.source], ['Name', row.first + ' ' + row.last], ['Email', row.email],
    ['Mobile', row.code + ' ' + row.mobile], ['Occupation', row.occupation], ['Reason for contact', row.reason || '-'],
    ['Details', row.details || '-'], ['Ad source', [row.utmSource, row.utmMedium, row.utmCampaign].filter(String).join(' / ') || '-'],
    ['Page URL', row.url],
  ];
  const html = '<div style="font-family:Arial,sans-serif;font-size:14px;color:#1d2b24">' +
    '<h2 style="margin:0 0 12px;color:#123A2B">New enquiry: ' + esc(row.page) + '</h2>' +
    '<table cellpadding="6" style="border-collapse:collapse">' +
    lines.map(function (l) {
      return '<tr><td style="color:#6b6a62;vertical-align:top">' + esc(l[0]) + '</td><td><strong>' +
        esc(l[1]).replace(/\n/g, '<br>') + '</strong></td></tr>';
    }).join('') + '</table></div>';
  MailApp.sendEmail({
    to: to,
    replyTo: row.email,
    name: 'NNG enquiry form',
    subject: 'New enquiry (' + row.page + '): ' + row.first + ' ' + row.last,
    htmlBody: html,
    body: lines.map(function (l) { return l[0] + ': ' + l[1]; }).join('\n'),
  });
}

function clean(value, max) {
  return String(value == null ? '' : value).replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, ' ').trim().slice(0, max);
}
// A value that starts like a formula is stored as plain text.
function safe(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
