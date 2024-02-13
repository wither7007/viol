// ==UserScript==
// @name        new world
// @namespace   http://hayageek.com
// @include     *
// @version     5
// ==/UserScript==

var input = document.createElement("input");
window.showAlert = () => {
    alert("monday night");
}
window.myword = 'monday night'

b = document.createElement('button')
b.innerHTML = 'myButton'
b.style.cssText = "color: blue; font-size: 3rem; padding: 10px;text-align: center";
document.body.append(b)
b.addEventListener('click', showAlert)
document.body.appendChild(b);
