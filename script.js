const form =
    document.getElementById("contact-form");


if (form) {

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const message =
                document.getElementById(
                    "form-message"
                );


            message.textContent =
                "Message received by the Hoss & Barb highly sophisticated communications department.";


            form.reset();

        }
    );

}
