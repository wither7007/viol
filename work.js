// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-02-05
// @description  try to take over the world!
// @author       You
// @match        https://onlineservices.dps.mn.gov/EServices/_/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mn.gov
// @grant        none
// ==/UserScript==

function seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

(function () {
    'use strict';
    console.log('dmv');

})();