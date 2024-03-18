// ==UserScript==
// @name         Phuoc
// @namespace    http://tampermonkey.net/
// @version      2.5
// @description  clean Phuoc
// @author       You
// @match        https://*.phuoc.ng/*
// @exclude      *://*.google.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/wither7007/viol/phuoc.js
// ==/UserScript==
//
(function () {
console.log('phuoc 2.5')
document.querySelectorAll('.sticky').forEach(a=>a.remove())


})();
