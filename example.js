// ==UserScript==
// @name        example.js
// @namespace   http://hayageek.com
// @include     *
// @version     2.3
// ==/UserScript==
(function () {
    'use strict';
    window.newf = () => {
        alert('nnnn')
    }

    window.uc = async (content) => {
        console.log(content);
        // await navigator.clipboard.writeText(document.querySelector('html').outerHTML);
        await navigator.clipboard.writeText(content)
        console.log('Copied links!');
    }
})()
window.myword = ' evening'
window.showAlert = () => {
    alert("sat night");
}
strH = []
myh = [...document.querySelectorAll('head>*')]
myh.forEach(x => strH.push(x.outerHTML))
let headCopy = () => {
    uc(strH.join('\n'))
}
b = document.createElement('button')
b.innerHTML = 'now sunday'
b.style.cssText = "z-index: 3;position: fixed; top: 0; left: 0; width: 300px; border: 3px solid #73AD21; color: blue; background-color: #f8f9fa;font-size: 1rem; padding: 10px;text-align: center";
document.body.prepend(b)
strH = []
myh = [...document.querySelectorAll('head>*')]
myh.forEach(x => strH.push(x.outerHTML))
function not() { alert('not') }
b.addEventListener('click', () => uc(strH.join('\n')))
uc('something ne')
