// ==UserScript==
// @name         Basic
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  most basic functions!
// @author       You
// @match        *://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/wither7007/viol/viol/Basic.js
// ==/UserScript==
(function () {
    "use strict";
    console.log("Violent Monkey basic version2.12");
    window.log = (l) => console.log(l);
    window.qa = (x) => {
        return [...document.querySelectorAll(x)];
    };
    window.af = (x) => {
        return Array.from(x);
    };
    window.qs = (x) => {
        return document.querySelector(x);
    };
    window.frequencies = arr =>
        arr.reduce((a, v) => {
            a[v] = (a[v] ?? 0) + 1;
            return a;
        }, {});

})();
strH = [];
myh = [...document.querySelectorAll("head>*")];
myh.forEach((x) => strH.push(x.outerHTML));