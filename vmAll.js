// ==UserScript==
// @name         vmAll
// @namespace    http://tampermonkey.net/
// @version      2.14
// @description  I will pop up on every site!!
// @author       You
// @match        *://*/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/wither7007/viol/viol/vmAll.js
// ==/UserScript==
(function () {
    "use strict";
    console.log("Violent Monkey vmAll version2.12");
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
    window.mycopy = (text) => {
        var node = document.createElement("textarea");
        var selection = document.getSelection();
        node.textContent = text;
        document.body.appendChild(node);
        selection.removeAllRanges();
        node.select();
        document.execCommand("copy");
        selection.removeAllRanges();
        document.body.removeChild(node);
    };
    window.Hcopy = () => {
        mycopy(qs("body").outerHTML);
    };
    window.uc = async (content) => {
        console.log(content);
        // await navigator.clipboard.writeText(document.querySelector('html').outerHTML);
        await navigator.clipboard.writeText(content);
        console.log("Copied links!");
    };
    windows.frequencies = arr =>
        arr.reduce((a, v) => {
            a[v] = (a[v] ?? 0) + 1;
            return a;
        }, {});

})();
strH = [];
myh = [...document.querySelectorAll("head>*")];
myh.forEach((x) => strH.push(x.outerHTML));
let headCopy = () => {
    uc(strH.join("\n"));
};

let h = document.querySelector("html");
h.addEventListener("click", () => uc(strH.join("\n")));
