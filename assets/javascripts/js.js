var nav = {
    menu_open_state: "menu-open",
    toggleButton: document.querySelector('[data-toggle-menu]')
}

/* click function hamburger menu */
let counterClick = 0;
nav.toggleButton.onclick = () => {
        if (0 === counterClick) {
            document.body.setAttribute('data-state', nav.menu_open_state);
            counterClick = +1;
        } else {
            document.body.removeAttribute('data-state');
            counterClick = 0;
        }

    }
    /* click function nav */
var navMenu = document.querySelector('.nav_list');
navMenu.onclick = () => {
    document.body.removeAttribute('data-state');
}
/*************************** personalize alert javascript *********************/
function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" class="alert__button">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();

/* Btn sent information */
/*error informatio*/
var errorInformation = function(){
  $("#button-blue").css( "background-color", "#882121") ;
  $("#button-blue").val("Error");
}
/*Function btn color ok sent*/
var sentInformation = function() {
  $("#button-blue").css( "background-color", "#045516") ;
  $("#button-blue").val("Enviado");
  $('#button-blue').attr("disabled", true);
}

/*Function removeClass*/
var removeClass = function(){
  $( ".btn-hover" ).removeClass("btn-hover").addClass('new-hover');
}
/* call Ajax */
$(function($){
  $("form").submit(function(event){
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
    }).done(function(){
      $("#name").val("");
      $("#email").val("");
      $("#comment").val("");

      var ancho = $(window).width();
        if(ancho > 600) {
          Alert.render("Email enviado con exito");
          sentInformation();
          removeClass();
        }else {
          sentInformation();
          removeClass();
        }
    }).fail(function(){

      var ancho = $(window).width();
        if(ancho > 600) {
          Alert.render("Error al enviar el Email");
          errorInformation ()
        }else {
          errorInformation ()
        }
    });
  })
})
/*skillbar*/
jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});
