<?php

$viewsDir = 'c:/Users/Dell/Desktop/bmdu/NNG/resources/views';

$files = ['contact.blade.php', 'consultation.blade.php', 'home.blade.php', 'about.blade.php', 'services.blade.php', 'hand-holding-program.blade.php'];

$oldFormSnippet = '<div class="form-panel" id="callback"><h2>Request a call back</h2><p>This callback form is a preview and does not send enquiries yet. For a reply from the team, please use WhatsApp or email.</p><form noValidate=""><div class="field"><label for="_R_sqnpf9b_-name">Your name</label><input id="_R_sqnpf9b_-name" autoComplete="name" required="" name="name"/></div><div class="field-row"><div class="field"><label for="_R_sqnpf9b_-phone">Phone or WhatsApp</label><input id="_R_sqnpf9b_-phone" type="tel" inputMode="tel" autoComplete="tel" required="" name="phone"/></div><div class="field"><label for="_R_sqnpf9b_-email">Email</label><input id="_R_sqnpf9b_-email" type="email" inputMode="email" autoComplete="email" required="" name="email"/></div></div><div class="field-row"><div class="field"><label for="_R_sqnpf9b_-topic">Guidance with <small>(optional)</small></label><select id="_R_sqnpf9b_-topic" name="topic"><option value="" selected="">Choose one</option><optgroup label="Where to begin"><option value="a personal consultation">A personal consultation</option><option value="choosing the right service">I&#x27;m not sure where to begin</option></optgroup><optgroup label="An area of life"><option value="a consultation on my health">Health</option><option value="a consultation on a relationship">Relationship</option><option value="a consultation on my career">Career</option><option value="a consultation on money">Money</option></optgroup><optgroup label="A service"><option value="Mind Training">Mind Training</option><option value="Numerology">Numerology</option><option value="Vastu">Vastu</option><option value="Astrology">Astrology</option><option value="the Personalised Hand Holding Program">Personalised Hand Holding Program</option></optgroup></select></div><div class="field"><label for="_R_sqnpf9b_-region">Based in</label><select id="_R_sqnpf9b_-region" name="region"><option value="India" selected="">India</option><option value="outside India">Outside India</option></select></div></div><label class="consent"><input type="checkbox" name="consent"/><span>I agree to be contacted by phone, WhatsApp or email about this enquiry.</span></label><button type="submit" class="button">Request a call back</button><p class="form-note">Design preview: this form does not send or save your details.</p></form></div>';

$newFormSnippet = '<div class="form-panel" id="callback">
    <h2>Request a call back</h2>
    <p>Fill out your details below and our team will get in touch with you shortly.</p>
    
    <div id="enquiryAlert" style="display:none;padding:12px 16px;border-radius:10px;margin-bottom:16px;font-size:14px;font-weight:600;"></div>

    <form id="dynamicCallbackForm" action="/enquiry/store" method="POST">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="hidden" name="source_page" value="callback">

        <div class="field">
            <label for="enquiry_name">Your name <span style="color:#e53e3e;">*</span></label>
            <input id="enquiry_name" name="name" placeholder="Enter your full name" required/>
        </div>

        <div class="field-row">
            <div class="field">
                <label for="enquiry_phone">Phone or WhatsApp <span style="color:#e53e3e;">*</span></label>
                <input id="enquiry_phone" type="tel" name="phone" placeholder="e.g. 9205511101" required/>
            </div>
            <div class="field">
                <label for="enquiry_email">Email <small>(optional)</small></label>
                <input id="enquiry_email" type="email" name="email" placeholder="name@example.com"/>
            </div>
        </div>

        <div class="field-row">
            <div class="field">
                <label for="enquiry_topic">Guidance with <small>(optional)</small></label>
                <select id="enquiry_topic" name="guidance_with">
                    <option value="" selected="">Choose one</option>
                    <optgroup label="Where to begin">
                        <option value="A personal consultation">A personal consultation</option>
                        <option value="Choosing the right service">I\'m not sure where to begin</option>
                    </optgroup>
                    <optgroup label="An area of life">
                        <option value="Health">Health</option>
                        <option value="Relationship">Relationship</option>
                        <option value="Career">Career</option>
                        <option value="Money">Money</option>
                    </optgroup>
                    <optgroup label="A service">
                        <option value="Mind Training">Mind Training</option>
                        <option value="Numerology">Numerology</option>
                        <option value="Vastu">Vastu</option>
                        <option value="Astrology">Astrology</option>
                        <option value="Personalised Hand Holding Program">Personalised Hand Holding Program</option>
                    </optgroup>
                </select>
            </div>
            <div class="field">
                <label for="enquiry_region">Based in</label>
                <select id="enquiry_region" name="based_in">
                    <option value="India" selected="">India</option>
                    <option value="Outside India">Outside India</option>
                </select>
            </div>
        </div>

        <label class="consent">
            <input type="checkbox" name="agreed_terms" id="enquiry_terms" checked required/>
            <span>I agree to be contacted by phone, WhatsApp or email about this enquiry.</span>
        </label>

        <button type="submit" class="button" id="enquirySubmitBtn" style="cursor:pointer;transition:all 0.3s ease;">
            Request a call back
        </button>
        <p class="form-note">🔒 Your details are 100% confidential & saved to database.</p>
    </form>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dynamicCallbackForm");
    const alertBox = document.getElementById("enquiryAlert");
    const submitBtn = document.getElementById("enquirySubmitBtn");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("enquiry_name").value.trim();
            const phone = document.getElementById("enquiry_phone").value.trim();
            const terms = document.getElementById("enquiry_terms").checked;

            alertBox.style.display = "none";

            if (!name) {
                showAlert("Please enter your full name.", "error");
                return;
            }

            if (!phone || phone.length < 8) {
                showAlert("Please enter a valid phone number (at least 8 digits).", "error");
                return;
            }

            if (!terms) {
                showAlert("Please agree to be contacted to submit your request.", "error");
                return;
            }

            submitBtn.disabled = true;
            submitBtn.innerText = "Submitting request...";

            const formData = new FormData(form);

            fetch("/enquiry/store", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Request a call back";

                if (data.success) {
                    showAlert("✅ " + data.message, "success");
                    form.reset();
                } else {
                    showAlert("❌ " + (data.message || "Error submitting request. Please try again."), "error");
                }
            })
            .catch(err => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Request a call back";
                showAlert("❌ Network error. Please try again.", "error");
            });
        });
    }

    function showAlert(msg, type) {
        alertBox.innerText = msg;
        alertBox.style.display = "block";
        if (type === "success") {
            alertBox.style.background = "#d1fae5";
            alertBox.style.color = "#065f46";
            alertBox.style.border = "1px solid #a7f3d0";
        } else {
            alertBox.style.background = "#fee2e2";
            alertBox.style.color = "#991b1b";
            alertBox.style.border = "1px solid #fca5a5";
        }
    }
});
</script>';

foreach ($files as $file) {
    $filePath = $viewsDir . '/' . $file;
    if (file_exists($filePath)) {
        $content = file_get_contents($filePath);
        if (strpos($content, 'id="callback"') !== false) {
            $newContent = str_replace($oldFormSnippet, $newFormSnippet, $content);
            if ($newContent !== $content) {
                file_put_contents($filePath, $newContent);
                echo "Updated form in: " . $file . "\n";
            } else {
                echo "Pattern search missed in: " . $file . "\n";
            }
        }
    }
}
