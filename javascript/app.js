var $ = require("jquery");
require("particles.js/particles.js");
require("particles.js/demo/js/lib/stats.js");
require("particles.js/demo/js/app.js");

window.particlesJS;
window.Stats;

var CustomAlert = require("./alertStyle"); //duda
var Alert = new CustomAlert();

var form = require("./sentMessage.js");
$(document).ready(form($, Alert));


/****************************************************
=================== particlesjs =====================
****************************************************/


/****************************************************
============= click function hamburger menu =========
****************************************************/
/* Menu */
var nav = {
    menu_open_state: "menu-open",
    toggleButton: document.querySelector('[data-toggle-menu]')
}

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

/****************************************************
======================== skillbar ===================
****************************************************/
$(document).ready(function() {
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});