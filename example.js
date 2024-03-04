// ==UserScript==
// @name        example.js
// @namespace   http://hayageek.com
// @version     2.8
// @match       https://jamessteffes.github.io/
// @include http://localhost:3000/test
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

strH = [];
myh = [...document.querySelectorAll("head>*")];
myh.forEach((x) => strH.push(x.outerHTML));
let headCopy = () => {
    uc(strH.join("\n"));
};

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
b.innerHTML = 'monday'
b.style.cssText = "z-index: 3;position: fixed; top: 0; left: 0; font-size:12px;width: 100px; border: 3px solid #73AD21; color: blue; background-color: #f8f9fa;font-size: 1rem; padding: 10px;text-align: center";
document.body.prepend(b)
strH = []
myh = [...document.querySelectorAll('head>*')]
myscripts = myh.filter(a => a.tagName == 'SCRIPT')
myh = myh.filter(a => a.tagName != 'SCRIPT').filter(c => c.tagName != 'STYLE')
myh.forEach(x => strH.push(x.outerHTML))
function not() { alert('not') }
b.addEventListener('click', () => uc(strH.join('\n')))
uc('something ne')
const style = document.createElement('style');
style.innerHTML = /* css */ `
  body {
    background-color: #c2c2c2 !important;
  }
`;
document.body.prepend(style)
