// Original inline SVG drawings. Conceptual examples, never personal assessments,
// scientific models, outcome charts or representations of actual client records.
const e=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const strokes={
  conversation:'<path d="M7 9h26v19H19l-8 7v-7H7zM24 17h17v19h-6l-6 6v-6h-5M13 16h14M13 22h9"/>',
  relationship:'<circle cx="15" cy="13" r="5"/><circle cx="33" cy="13" r="5"/><path d="M5 35v-6a10 10 0 0 1 18-6M43 35v-6a10 10 0 0 0-18-6M24 37s-10-6-10-12a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 6-10 12-10 12z"/>',
  career:'<path d="M6 17h36v22H6zM16 17v-7h16v7M6 25c12 6 24 6 36 0M21 25h6v7h-6z"/>',
  money:'<circle cx="20" cy="23" r="15"/><path d="M20 13v20M26 17c-9-5-15 5-6 6s3 11-6 6M34 8a15 15 0 0 1 4 30"/>',
  wellbeing:'<path d="M24 40V23M24 29C9 29 6 15 8 9c14 0 19 9 16 20zM24 24c-1-11 6-17 17-16 1 11-5 19-17 16M24 35l-9-4"/>',
  reflection:'<circle cx="24" cy="16" r="6"/><path d="M12 40v-5a12 12 0 0 1 24 0M5 19a19 19 0 0 1 36-6M41 5v8h-8M43 29a19 19 0 0 1-36 6M7 43v-8h8"/>',
  chakra:'<circle cx="24" cy="8" r="5"/><path d="M14 36l-7 6h34l-7-6M19 15l-5 10-9 4M29 15l5 10 9 4M19 15l-1 20h12l-1-20"/><circle cx="24" cy="20" r="1.4"/><circle cx="24" cy="26" r="1.4"/><circle cx="24" cy="32" r="1.4"/>',
  chart:'<path d="M7 7h34v34H7zM7 24 24 7l17 17-17 17zM7 7l34 34M41 7 7 41"/>',
  clock:'<circle cx="24" cy="24" r="16"/><path d="M24 13v12l8 5M24 3v3M45 24h-3M24 45v-3M3 24h3"/>',
  house:'<path d="m5 23 19-17 19 17M10 20v22h28V20M20 42V28h8v14M15 14V7h7"/>',
  education:'<path d="m3 16 21-10 21 10-21 10zM10 21v13c9 6 19 6 28 0V21M44 17v17"/>',
  question:'<circle cx="24" cy="24" r="18"/><path d="M17 18c0-9 17-9 14 1-2 5-7 4-7 10M24 35h.01"/>',
  calendar:'<path d="M8 10h32v32H8zM8 19h32M16 5v10M32 5v10M15 26h4M27 26h4M15 34h4M27 34h4"/>',
  pin:'<path d="M38 18c0 11-14 25-14 25S10 29 10 18a14 14 0 0 1 28 0z"/><circle cx="24" cy="18" r="5"/>',
  grid:'<path d="M6 6h36v36H6zM18 6v36M30 6v36M6 18h36M6 30h36"/><circle cx="24" cy="24" r="3"/>',
  name:'<path d="M5 11h38v27H5zM9 33l7-17 7 17M11 27h10M28 23h10M28 30h7"/>',
  signature:'<path d="M5 32c12-27 16-21 9-7s-5 16 3 3 13-15 7-3-4 11 3 6c6-4 9 6 16-3M6 42h36"/>',
  phone:'<path d="M15 5h18v38H15zM15 11h18M15 36h18M23 39h2"/>',
  business:'<path d="M5 42h38M10 42V15h18v27M28 23h11v19M14 22h3M21 22h3M14 29h3M21 29h3M18 42v-6h6M10 15l9-8 9 8"/>',
  compass:'<circle cx="24" cy="24" r="17"/><path d="m31 17-4 10-10 4 4-10zM24 3v5M24 40v5M3 24h5M40 24h5"/>',
  desk:'<path d="M5 24h38M9 24v18M39 24v18M16 7h18v12H16zM25 19v5M8 10v10h5M5 14h6"/>',
  path:'<path d="M8 40h13c15 0 15-13 1-13S7 12 21 12h19M34 6l6 6-6 6"/><circle cx="8" cy="40" r="3"/>',
  practice:'<path d="M13 12a16 16 0 0 1 28 11M41 14v9h-9M35 36A16 16 0 0 1 7 25M7 34v-9h9M18 24l4 4 8-8"/>',
  listen:'<path d="M15 15a10 10 0 0 1 20 0c0 7-8 9-8 15 0 8-11 8-11 0M21 18c-1-5 7-7 8-2 1 4-5 6-5 10M9 10a18 18 0 0 0-1 20"/>',
  choice:'<path d="M24 41V26M24 26 9 12M24 26l15-14M9 21v-9h9M30 12h9v9"/>',
  confirm:'<path d="M12 8h24v35H12zM18 5h12v7H18zM18 25l4 4 9-9M18 35h12"/>',
  person:'<circle cx="24" cy="12" r="7"/><path d="M10 42v-7a14 14 0 0 1 28 0v7M17 36v6M31 36v6"/>',
};
export function icon(name,extra='') {
  return `<svg class="line-icon ${extra}" data-motion viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${strokes[name]||strokes.question}</svg>`;
}
const mappings={
  brainology:{scenes:['relationship','career','reflection'],topics:['reflection','wellbeing','listen','chakra','conversation','practice'],method:['question','reflection','practice'],facts:['reflection','practice','conversation']},
  astrology:{scenes:['career','relationship','choice'],topics:['career','relationship','house','education','chart','clock'],method:['chart','clock','person'],facts:['career','chart','conversation']},
  numerology:{scenes:['name','business','grid'],topics:['grid','name','signature','phone','business','chart'],method:['question','grid','choice'],facts:['name','business','conversation']},
  vastulogy:{scenes:['house','desk','compass'],topics:['house','business','compass','desk'],method:['compass','desk','choice'],facts:['house','compass','desk']},
  'hand-holding':{scenes:['reflection','path','practice'],topics:['reflection','chart','grid','house'],method:['person','reflection','conversation'],facts:['calendar','relationship','conversation']},
};
export const pageIcon=(p,type,index)=>icon(mappings[p.slug][type][index]);

// Small editorial scenes, not a repeated icon-on-a-card treatment. The shapes
// illustrate the actual starting point: person, identity, place or decision.
export function scenarioArt(p,index) {
  const type=mappings[p.slug].scenes[index];
  const background=`<ellipse class="wash" cx="110" cy="52" rx="76" ry="39"/><path class="scene-ground" d="M18 92h185"/>`;
  const scenes={
    relationship:`<g transform="translate(43 13) scale(1.45)">${strokes.relationship}</g><path class="accent" d="M136 42h34v20h-11l-8 8v-8h-15zM144 50h17"/>`,
    career:`<g transform="translate(29 18) scale(1.35)">${strokes.career}</g><path class="accent" d="M118 80V51l25-26M135 25h8v8M118 51l27 25M137 76h8v-8M154 22h39M154 32h25"/>`,
    reflection:`<path d="M62 76c-42-31-5-73 32-46 36 27 73-13 46-29M74 20c-17 23-8 52 14 62"/><g transform="translate(109 32) scale(1.2)">${strokes.person}</g><path class="accent" d="m137 24 3-23-23 3"/>`,
    choice:`<path d="M35 83h51V53l38-32M114 21h10v10M86 53l45 27M121 80h10V70"/><circle cx="35" cy="83" r="5"/><circle class="accent" cx="170" cy="29" r="13"/><path class="accent" d="m163 29 5 5 9-10M158 66h34M158 76h20"/>`,
    name:`<rect x="32" y="17" width="114" height="66" rx="5"/><path d="M42 64l14-33 14 33M47 53h19M80 40h51M80 52h38M80 64h44"/><path class="accent" d="m164 62 27-37 8 6-27 37-12 6zM186 30l8 6"/>`,
    business:`<path d="M43 88V25h50v63M93 44h41v44M54 37h11M75 37h8M54 51h11M75 51h8M59 88V69h20M106 56h15M106 70h15"/><path class="accent" d="M153 32h37v37h-37zM159 39h24M159 46h16M159 53h20M162 80h31"/>`,
    grid:`<g transform="translate(35 12) scale(1.65)">${strokes.grid}</g><path class="accent" d="M132 35h54M132 47h32M132 59h43M132 80c9-26 14-30 10-9s2 12 12 2 8 12 35 3"/>`,
    house:`<path d="m32 46 56-35 58 35M45 40v49h85V40M77 89V60h23v29M56 48h12v13H56M112 48h12v13h-12"/><path class="accent" d="M159 88V27m-9 15 9-15 9 15M159 24h.01M175 70h20M175 79h13"/>`,
    desk:`<path d="M29 57h116M43 57v32M131 57v32M71 18h52v28H71zM96 46v11M41 27v24h15M33 32h15M164 47v42M151 62h29v27M169 47h18v15"/><path class="accent" d="M144 20h37M151 15v10M160 15v10M171 15v10"/>`,
    compass:`<path d="M29 32 78 13l48 19-49 21zM29 32v50l48 18 49-18V32M77 53v47"/><circle class="accent" cx="166" cy="48" r="28"/><path class="accent" d="m179 35-8 19-18 7 7-19zM166 14v6M166 76v6M132 48h6M194 48h6"/>`,
    path:`<path d="M29 80h56c37 0 37-30 4-30S63 17 93 17h65M148 7l10 10-10 10"/><circle cx="29" cy="80" r="5"/><circle class="accent" cx="84" cy="50" r="5"/><circle class="accent" cx="158" cy="17" r="5"/><path class="accent" d="M159 53h37M159 65h23M159 77h30"/>`,
    practice:`<g transform="translate(27 11) scale(1.7)">${strokes.practice}</g><path class="accent" d="M132 31h62M132 49h44M132 67h52M135 26v10M135 44v10M135 62v10"/>`,
  };
  return `<div class="scenario-art" data-motion><svg viewBox="0 0 220 108" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${background}<g class="scene-ink">${scenes[type]}</g></svg></div>`;
}
function wrapper(p,svg,legend,note) {
  return `<figure class="consultation-art visual-explainer" data-motion><div class="visual-label"><span class="visual-kicker">${e(p.short||p.name)} / at a glance</span><span aria-hidden="true">✧</span></div>${svg}<div class="visual-key" role="group" aria-label="Explore the illustration">${legend.map(([a,b],i)=>`<button type="button" data-visual-step="${i}" aria-pressed="false" aria-label="Highlight ${e(a)}: ${e(b)}" disabled><strong>${e(a)}</strong><span>${e(b)}</span></button>`).join('')}</div><p class="visual-hint" hidden>Tap a label to explore the illustration.</p><figcaption>${e(note)}</figcaption></figure>`;
}
function svg(title,content) {
  return `<svg class="explanation-drawing" viewBox="0 0 420 300" role="img" aria-labelledby="service-art-title"><title id="service-art-title">${e(title)}</title><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${content}</g></svg>`;
}
const at=(x,y,name,scale=1)=>`<g transform="translate(${x} ${y}) scale(${scale})">${strokes[name]}</g>`;
export function serviceVisual(p) {
  if(p.slug==='brainology')return wrapper(p,svg('Reflection: a recurring situation, your thoughts and beliefs, and a different response to practise. Not a scientific or causal model.',`
    <ellipse class="wash" cx="210" cy="141" rx="103" ry="97"/>
    <path class="accent draw-line" pathLength="1" d="M108 73c-64 24-47 133 18 112 61-20 11-119-41-51-30 40 8 123 80 119 59-4 98-41 166-25"/>
    <path class="accent" d="m318 218 13 10-14 8"/>
    <circle cx="211" cy="103" r="24"/><path d="M164 202v-20a47 47 0 0 1 94 0v20M180 199h64M179 165v37M243 165v37"/>
    <path d="M177 61c-12-31 33-46 48-25 27-19 53 13 37 35h-25l-11 12-1-12h-29"/>
    <path class="accent" d="M194 51h45M204 60h25"/>
    <g data-visual-focus="0"><circle class="paper" cx="76" cy="99" r="21"/>${at(62,85,'reflection',.58)}</g><g data-visual-focus="1"><circle class="paper" cx="303" cy="119" r="21"/>${at(289,105,'question',.58)}</g><g data-visual-focus="2"><circle class="paper" cx="339" cy="235" r="21"/>${at(325,221,'practice',.58)}</g>
    <g class="diagram-label"><text x="76" y="144">Notice</text><text x="309" y="164">Understand</text><text x="325" y="280">Practise</text></g>`),[['Situation','What keeps returning'],['Reflection','Thoughts & beliefs'],['Practice','A different response']], 'A framework for reflection, not a scientific explanation of life events.');
  if(p.slug==='astrology')return wrapper(p,svg('Illustrative birth chart: date, time and place inform the chart; your question gives the consultation its focus. No actual planetary positions are represented.',`
    <circle class="wash" cx="215" cy="142" r="105"/>
    <circle class="accent" cx="215" cy="142" r="92"/><circle class="orbit-guide" cx="215" cy="142" r="106"/>
    <g data-visual-focus="1"><path class="draw-line" pathLength="1" d="M154 81h122v122H154zM154 142l61-61 61 61-61 61zM154 81l122 122M276 81 154 203"/>
    <circle class="paper" cx="215" cy="142" r="25"/>
    ${at(198,125,'question',.7)}</g>
    <path class="accent" d="M78 69h50l27 26M79 142h62M79 216h49l29-29"/>
    <g data-visual-focus="0">${at(31,40,'calendar',.8)}${at(31,117,'clock',.8)}${at(31,191,'pin',.8)}</g>
    <g class="diagram-label left"><text x="28" y="101">Date</text><text x="28" y="176">Time</text><text x="28" y="249">Place</text></g>
    <g data-visual-focus="2"><path class="accent" d="M309 142h68m-8-7 8 7-8 7"/></g>
    <g class="diagram-label"><text x="356" y="117">Your</text><text x="356" y="137">choices</text></g>
    <g class="diagram-label"><text x="215" y="271">Relevant chart themes</text></g>`),[['Birth details','Inform the chart'],['Your question','Gives it focus'],['Your choices','Remain yours']], 'An illustrative chart, not a prediction or a personal reading.');
  if(p.slug==='numerology')return wrapper(p,svg('Traditional Lo Shu grid beside an example identity card and signature. These illustrate consultation inputs, not an individual reading or recommendation.',`
    <rect class="wash" x="25" y="27" width="186" height="214" rx="90"/>
    <g data-visual-focus="0"><path d="M38 67h144v144H38zM86 67v144M134 67v144M38 115h144M38 163h144"/></g>
    <g class="grid-numbers"><text x="62" y="98">4</text><text x="110" y="98">9</text><text x="158" y="98">2</text><text x="62" y="146">3</text><text x="110" y="146">5</text><text x="158" y="146">7</text><text x="62" y="194">8</text><text x="110" y="194">1</text><text x="158" y="194">6</text></g>
    <path class="accent draw-line" pathLength="1" d="M194 139h38m-8-7 8 7-8 7"/>
    <g data-visual-focus="1"><rect class="paper" x="247" y="48" width="142" height="88" rx="5"/>
    <g class="diagram-label left"><text x="264" y="75">Name &amp; spelling</text></g>
    <path d="M265 112l10-23 10 23M269 104h12M297 93h72M297 104h55M297 115h62"/></g>
    <g data-visual-focus="2"><path class="accent" d="M258 187c19-47 31-50 19-13s-3 22 10-2 22-35 11-8 1 24 13 15c13-8 19 19 55-3M251 209h137"/></g>
    <g class="diagram-label"><text x="110" y="245">Lo Shu grid</text><text x="318" y="245">Signature &amp; identity</text></g>`),[['Birth date','Personal numbers'],['Name','Current or proposed'],['Identity','Personal or business']], 'The grid shows the traditional arrangement, not your personal calculation.');
  if(p.slug==='vastulogy')return wrapper(p,svg('An illustrative room layout with entrance, seating, circulation and a north compass. It demonstrates what can be discussed, not an ideal layout or a Vastu prescription.',`
    <path class="wash" d="m41 87 198-52 98 60v143l-201 47-95-60z"/>
    <path class="accent" d="m40 218 97 60 203-47M40 218v-6M137 278v-7M340 231v-8"/>
    <g data-visual-focus="1"><path d="M57 66h246v161H57zM161 66v161M57 139h104M238 66v73h65M161 174h29v53M161 174a29 29 0 0 0 29 29"/>
    <path d="M70 84h75v39H70zM76 90h25v12H76M108 90h25v12h-25M69 180h53v28H69zM79 174h35M93 174v-9M187 90h33v33h-33M189 151h20v9h-20M222 166h50v31h-50M228 159v-8h38v8"/></g>
    <g data-visual-focus="2"><path class="accent draw-line" pathLength="1" d="M181 237v-28l32-54 30-16"/></g>
    <g data-visual-focus="0"><circle class="paper" cx="351" cy="60" r="29"/><path class="accent" d="m351 40-8 26 8-7 8 7zM351 28v3"/></g>
    <g class="diagram-label"><text x="351" y="25">N</text><text x="108" y="55">Rooms</text><text x="245" y="219">Seating</text><text x="208" y="292">Entrance</text></g>`),[['Direction','Orientation & entrance'],['Arrangement','Rooms & seating'],['Daily use','People & routines']], 'An example plan, not an ideal arrangement or a prescription for your space.');
  return wrapper(p,svg('Six-month personal guidance connecting psychic guidance, Astrology, Numerology and Vastu where relevant to the individual or couple. Not a fixed monthly schedule.',`
    <circle class="wash" cx="210" cy="139" r="104"/>
    <g data-visual-focus="2"><path class="accent draw-line" pathLength="1" d="M101 62 182 115M319 62 239 115M101 227 182 163M319 227 239 163"/></g>
    <g data-visual-focus="0"><circle class="paper" cx="210" cy="139" r="55"/>
    ${at(187,107,'person',.95)}
    <g class="diagram-label"><text x="210" y="173">You</text></g></g>
    <g data-visual-focus="1">
    <circle class="paper" cx="89" cy="54" r="28"/><circle class="paper" cx="331" cy="54" r="28"/>
    <circle class="paper" cx="89" cy="227" r="28"/><circle class="paper" cx="331" cy="227" r="28"/>
    ${at(70,35,'reflection',.8)}${at(312,35,'chart',.8)}${at(70,208,'grid',.8)}${at(312,208,'house',.8)}</g>
    <g class="diagram-label"><text x="89" y="101">Psychic guidance</text><text x="331" y="101">Astrology</text><text x="89" y="277">Numerology</text><text x="331" y="277">Vastu</text></g>`),[['You','Individual or couple'],['4 perspectives','Brought together'],['6 months','Guidance to return to']], 'The practices come together where relevant, not as a fixed monthly sequence.');
}
export function programmeContinuum() {
  return `<div class="programme-continuum" aria-label="Six months of personal guidance across health, relationships, money and career"><div class="continuum-title"><span>Six months of personal guidance</span><span>With Narayani</span></div><div class="continuum-line" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="life-areas">${[['wellbeing','Health'],['relationship','Relationships'],['money','Money'],['career','Career']].map(([a,b])=>`<span>${icon(a)}${b}</span>`).join('')}</div></div>`;
}
