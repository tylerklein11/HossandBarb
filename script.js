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
