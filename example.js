// ==UserScript==
// @name        new world
// @namespace   http://hayageek.com
// @include     *
// @version     4
// ==/UserScript==

var input = document.createElement("input");
window.showAlert = () => {
    alert("still monday");
}
window.myword = 'wooordjj'
input.type = "button";
input.value = "Violet monday Button";
input.addEventListener('click', showAlert)
document.body.appendChild(input);
