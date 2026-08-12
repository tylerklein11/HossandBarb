const form = document.querySelector(".contact-form");

if (form) {
    form.setAttribute("data-formspree", "");

    form.addEventListener("formspree:success", function () {
        form.reset();

        let message = document.querySelector(".form-success");

        if (!message) {
            message = document.createElement("div");
            message.className = "form-success";
            form.appendChild(message);
        }

        message.innerHTML = `
            <strong>MESSAGE RECEIVED — BARB'S ON IT.</strong>
            <span>We'll holler back when we get a minute.</span>
        `;
    });
}
/* ==========================================
   SUPPLY LIST SIGNUP
========================================== */

const supplyForm = document.querySelector(".supply-form");

if (supplyForm) {

    supplyForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const button = supplyForm.querySelector(".supply-button");
        const success = supplyForm.querySelector(".supply-success");

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

            if (response.ok) {

                supplyForm.reset();

                button.textContent = "YOU'RE ON THE LIST";

                success.textContent =
                    "WELCOME ABOARD. BARB'S GOT YOUR EMAIL.";

            } else {

                throw new Error("Signup failed");

            }

        } catch (error) {

            button.disabled = false;
            button.textContent = "TRY 'ER AGAIN";

            success.textContent =
                "WELL HELL. SOMETHING BROKE. TRY AGAIN.";

        }

    });

}
