// ==UserScript==
// @name         Phuoc
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  clean Phuoc
// @author       You
// @match        https://phuoc.ng/
// @exclude      *://*.google.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/wither7007/viol/viol/Basic.js
// ==/UserScript==
//
(function () {

document.querySelectorAll('.sticky').forEach(a=>a.remove())


})();
