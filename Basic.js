// ==UserScript==
// @name         Basic
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  most basic functions!
// @author       You
// @match        *://*/*
// @exclude      *://*.google.com/*
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
strH = '';
myh = [...document.querySelectorAll("head>*")];
myh.forEach(x => strH += `${x.outerHTML} \n`);

myht = () => {
    window.hout = document.querySelector('html').outerHTML
    console.log('copy(hout)')
}

window.hrm = () => {
    document.querySelector('head').remove()
}

window.gfetch = async (yyy) => {
    let response = await fetch(yyy)
    window.wtext = await response.text()
    console.log(wtext)
}

window.help = () => {
    console.log('hrm-remove head\nmyht-copy html to hout\ninjectCSS\ngfetch')
}

window.injectCSS = css => {
    let el = document.createElement('style');
    el.type = 'text/css';
    el.innerText = css;
    document.head.appendChild(el);
    return el;
};
window.injectStript = script => {
    // create a script element
    let ourScript = document.createElement('script');
    jsd = 'https://cdn.jsdelivr.net/gh/wither7007/gfetch@main/gscript.js';
    // add the src, where we are loading the script from
    ourScript.src = jsd;
    // append the script to the doucment head (load the script into the DOM)
    document.head.appendChild(ourScript);
}
