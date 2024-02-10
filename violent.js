// ==UserScript==
// @name        localhost
// @namespace   Violentmonkey Scripts
// @match       http://localhost:3000/
// @grant       none
// @version     9.3
// @author      -
// @description 2/7/2024, 10:37:09 PM
// @downloadURL  https://raw.githubusercontent.com/wither7007/viol/viol/violent.js
// ==/UserScript==
console.log('a uc function works? 9th update')

async function uc(content) {
    console.log(content);
    // await navigator.clipboard.writeText(document.querySelector('html').outerHTML);
    await navigator.clipboard.writeText(content)
    console.log('Copied links!');
}
strH = []
myh = [...document.querySelectorAll('head>*')]
myh.forEach(x => strH.push(x.outerHTML))
uc(strH.join('\n'))
