// ==UserScript==
// @name        Hello World
// @namespace   http://hayageek.com
// @include     *
// @version     2
// ==/UserScript==

var input = document.createElement("input");
window.showAlert = () => {
    alert("monday message");
}
window.myword = 'wooordjj'
input.type = "button";
input.value = "Violet Monkey Button";
input.addEventListener('click', showAlert)
document.body.appendChild(input);
