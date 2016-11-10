var $ = require("jquery");
var RenderHtml = require("./rendererHtml.js");
var ancho = $(window).width();
if (ancho > 600) {
require("particles.js/demo/js/lib/stats.js");
require("particles.js/particles.js");
require("particles.js/demo/js/app.js");
}

var CustomAlert = require("./alertStyle");
var Alert = new CustomAlert();
var form = require("./sentMessage.js");
$(document).ready(form($, Alert));


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
