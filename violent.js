// ==UserScript==
// @name        localhost
// @namespace   Violentmonkey Scripts
// @match       http://localhost:3000/
// @grant       none
// @version     9.2
// @author      -
// @description 2/7/2024, 10:37:09 PM
// @downloadURL  https://raw.githubusercontent.com/wither7007/viol/viol/violent.js
// ==/UserScript==
console.log('a 9th update')
strH = []
myh = [...document.querySelectorAll('head>*')]
myh.forEach(x => strH.push(x.outerHTML))
