// ==UserScript==
// @name        new world
// @namespace   http://hayageek.com
// @include     *
// @version     6
// ==/UserScript==
window.myword = 'monday night'
window.showAlert = () => {
    alert("monday night");
}
b = document.createElement('button')
b.innerHTML = 'myButton'
b.style.cssText = "color: blue; background-color: #f8f9fa;font-size: 1rem; padding: 10px;text-align: center";
document.body.append(b)
b.addEventListener('click', showAlert)
document.body.appendChild(b);
