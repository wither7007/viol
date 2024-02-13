// ==UserScript==
// @name        new world
// @namespace   http://hayageek.com
// @include     *
// @version     7
// ==/UserScript==
window.myword = 'monday night'
window.showAlert = () => {
    alert("monday night");
}
b = document.createElement('button')
b.innerHTML = 'myButton'
b.style.cssText = "position: fixed; top: 0; left: 0; width: 300px; border: 3px solid #73AD21; color: blue; background-color: #f8f9fa;font-size: 1rem; padding: 10px;text-align: center";
document.body.prepend(b)
b.addEventListener('click', showAlert)