var $ = require("jquery");
/* error informatio*/
var errorInformation = function() {
        $("#button-blue").css("background-color", "#882121");
        $("#button-blue").val("Error");
    }
    /*Function btn color ok sent*/
var sentInformation = function() {
        $("#button-blue").css("background-color", "#045516");
        $("#button-blue").val("Enviado");
        $('#button-blue').attr("disabled", true);
    }
    /*Function removeClass*/
var removeClass = function() {
        $(".btn-hover").removeClass("btn-hover").addClass('new-hover');
    }
    /********** Call Ajax ************/
 function formularioEvents($, Alert) {
    $("form").submit(function(event) {
       $(this).find("button[type='submit']").prop('disabled',true);
        event.preventDefault();
        $.ajax({
            url: "https://formspree.io/nz3.manu@gmail.com",
            method: "POST",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#comment").val()
            },
            dataType: "json"
        }).done(function() {
            $("#name").val("");
            $("#email").val("");
            $("#comment").val("");

            var ancho = $(window).width();
            if (ancho > 600) {
                sentInformation();
                removeClass();
            } else {
                sentInformation();
                removeClass();
            }
        }).fail(function() {
            var ancho = $(window).width();
            if (ancho > 600) {
                Alert.render("Error al enviar el Mensaje");
                errorInformation()
            } else {
                errorInformation()
            }
        });
    })
}
module.exports = formularioEvents
