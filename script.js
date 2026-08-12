const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("form-message");

        message.textContent =
            "Thanks! Your message was received by the highly sophisticated Hoss & Barb demonstration system.";

        form.reset();

    });

}
