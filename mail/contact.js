$(function () {
    $("#contact-plans input, #contact-plans textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            
            // Obtener los valores del formulario
            var name = $("input#name").val();
            var email = $("input#email").val();
            var membership = $("select").val(); 

            // Número de WhatsApp al que se enviará el mensaje (incluye código de país)
            var phoneNumber = "529932651089";  // Cambia este número por el que deseas

            // Construir el mensaje de WhatsApp
            var whatsappMessage = "Nombre: " + name + "%0A" +
                                  "Correo: " + email + "%0A" +
                                  "Membresía: " + membership + "%0A";
            // URL de WhatsApp con el número y el mensaje
            var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + whatsappMessage;

            // Redirigir al usuario a WhatsApp
            window.open(whatsappURL, '_blank');

            // Reiniciar el formulario
            $('#contactForm').trigger("reset");
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
