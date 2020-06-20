// ==UserScript==
// @name         Z0r Autoplay
// @namespace    https://github.com/z0r-tools/z0r-autoplay/
// @version      0.1
// @description  automatically starts the ruffle player whenever embedded
// @author       gekkedev
// @match        *://z0r.de/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/z0r-tools/z0r-autoplay/master/z0r-autoplay.user.js
// @downloadURL  https://raw.githubusercontent.com/z0r-tools/z0r-autoplay/master/z0r-autoplay.user.js
// ==/UserScript==

(function() {
    'use strict';
    let interval = setInterval(() => {
        if (eval("window.RufflePlayer != null")) { //is Ruffle (being) loaded?
            let player = document.getElementById("player").shadow.getElementById("play_button");
            if (player.style.display == "block") { //is Ruffle fully loaded?
                document.getElementById("player").shadow.getElementById("play_button").click();
                clearInterval(interval)
            }
        }
    }, 50);
})();
