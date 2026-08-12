const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const button = form.querySelector("button[type='submit']");
        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "SENDING...";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                form.reset();

                button.textContent = "MESSAGE RECEIVED";

                const message = document.createElement("div");
                message.className = "form-success";
                message.innerHTML = `
                    <strong>MESSAGE RECEIVED — BARB'S ON IT.</strong>
                    <span>We'll holler back when we get a minute.</span>
                `;

                form.appendChild(message);

                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 4000);

            } else {
                throw new Error("Submission failed");
            }

        } catch (error) {
            button.textContent = "TRY AGAIN";
            button.disabled = false;
        }
    });
}
