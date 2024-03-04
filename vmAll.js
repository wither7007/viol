// ==UserScript==
// @name         vmAll
// @namespace    http://tampermonkey.net/
// @version      2.15
// @description  I will pop up on every site!!
// @author       You
// @exclude      *://*.google.com/*
// @match        *://*/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/wither7007/viol/viol/vmAll.js
// ==/UserScript==
(function () {
    "use strict";
    console.log("Violent Monkey vmAll version2.12");
    window.log = (l) => console.log(l);
    window.frequencies = arr =>
        arr.reduce((a, v) => {
            a[v] = (a[v] ?? 0) + 1;
            return a;
        }, {});

})();

window.uc = async () => {
    let html = document.querySelector('html').outerHTML
    // console.log(content);
    // await navigator.clipboard.writeText(document.querySelector('html').outerHTML);
    await navigator.clipboard.writeText(html);
    console.log("Copied links!");
};
let h = document.querySelector("html");
h.addEventListener("dblclick", () => uc());
