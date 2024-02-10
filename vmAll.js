// ==UserScript==
// @name         Match Every Site
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  I will pop up on every site!!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log('Violent Monkey')
    window.log = (l) => console.log(l)
    window.qa = (x) => {
        return [...document.querySelectorAll(x)]
    }
    window.af = (x) => {
        return Array.from(x)
    }
    window.qs = (x) => {
        return document.querySelector(x)
    }
    window.mycopy = (text) => {
        var node = document.createElement('textarea')
        var selection = document.getSelection()

        node.textContent = text
        document.body.appendChild(node)

        selection.removeAllRanges()
        node.select()
        document.execCommand('copy')

        selection.removeAllRanges()
        document.body.removeChild(node)
    }
    window.Hcopy = () => {
        mycopy(qs('body').outerHTML)
    }
})();
