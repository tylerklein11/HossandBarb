document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const button = contactForm.querySelector("button[type='submit']");

            if (!button) return;

            const originalText = button.textContent;

            button.disabled = true;
            button.textContent = "SENDING...";

            try {

                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Contact form failed");
                }

                contactForm.reset();

                button.textContent = "MESSAGE RECEIVED";

                let message = contactForm.querySelector(".form-success");

                if (!message) {

                    message = document.createElement("div");
                    message.className = "form-success";
                    contactForm.appendChild(message);

                }

                message.innerHTML =
                    "<strong>MESSAGE RECEIVED — BARB'S ON IT.</strong>" +
                    "<span>We'll holler back when we get a minute.</span>";

                setTimeout(function () {

                    button.disabled = false;
                    button.textContent = originalText;

                }, 4000);

            } catch (error) {

                button.disabled = false;
                button.textContent = "TRY AGAIN";

            }

        });

    }


    /* ==========================================
       SUPPLY LIST
    ========================================== */

    const supplyForm = document.querySelector(".supply-form");

    if (supplyForm) {

        supplyForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const button = supplyForm.querySelector(".supply-button");
            const success = supplyForm.querySelector(".supply-success");

            if (!button) return;

            button.disabled = true;
            button.textContent = "HOLD YER HORSES...";

            try {

                const response = await fetch(supplyForm.action, {
                    method: "POST",
                    body: new FormData(supplyForm),
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Signup failed");
                }

                supplyForm.reset();

                button.textContent = "YOU'RE ON THE LIST";

                if (success) {
                    success.textContent =
                        "WELCOME ABOARD. BARB'S GOT YOUR EMAIL.";
                }

            } catch (error) {

                button.disabled = false;
                button.textContent = "TRY 'ER AGAIN";

                if (success) {
                    success.textContent =
                        "WELL HELL. SOMETHING BROKE. TRY AGAIN.";
                }

            }

        });

    }


    /* ==========================================
       CLANKER EASTER EGG
    ========================================== */

    const clankerLink =
        document.getElementById("clanker-link");

    const clankerPopup =
        document.getElementById("clanker-popup");

    const clankerClose =
        document.getElementById("clanker-close");

    let clankerClicks = 0;
    let clankerTimer = null;


    if (clankerLink && clankerPopup) {

        clankerLink.addEventListener("click", function () {

            clankerClicks++;

            console.log("Clanker clicks:", clankerClicks);

            if (clankerTimer) {
                clearTimeout(clankerTimer);
            }

            clankerTimer = setTimeout(function () {
                clankerClicks = 0;
            }, 8000);


            if (clankerClicks >= 5) {

                clankerPopup.classList.add("show");

                clankerPopup.setAttribute(
                    "aria-hidden",
                    "false"
                );

                clankerClicks = 0;

            }

        });

    }


    if (clankerClose && clankerPopup) {

        clankerClose.addEventListener("click", function () {

            clankerPopup.classList.remove("show");

            clankerPopup.setAttribute(
                "aria-hidden",
                "true"
            );

        });

    }


    if (clankerPopup) {

        clankerPopup.addEventListener("click", function (event) {

            if (event.target === clankerPopup) {

                clankerPopup.classList.remove("show");

                clankerPopup.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        });

    }

});
