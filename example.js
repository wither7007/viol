// ==UserScript==
// @name        example.js
// @namespace   http://hayageek.com
// @include     *
// @version     2.1
// ==/UserScript==
window.myword = ' night'
window.showAlert = () => {
    alert("sat night");
}
b = document.createElement('button')
b.innerHTML = 'now sat'
b.style.cssText = "z-index: 3;position: fixed; top: 0; left: 0; width: 300px; border: 3px solid #73AD21; color: blue; background-color: #f8f9fa;font-size: 1rem; padding: 10px;text-align: center";
document.body.prepend(b)
b.addEventListener('click', showAlert)
