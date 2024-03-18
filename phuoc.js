// ==UserScript==
// @name         Phuoc
// @namespace    http://tampermonkey.net/
// @version      2.4
// @description  clean Phuoc
// @author       You
// @match        *://phuoc.ng/*
// @exclude      *://*.google.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/wither7007/viol/phuoc.js
// ==/UserScript==
//
(function () {
console.log('phuoc 2.4')
document.querySelectorAll('.sticky').forEach(a=>a.remove())


})();
