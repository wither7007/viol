// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
        //utitlity expand object
    alert('tamper')
        window.mycopy = (text) => {
            var node = document.createElement('textarea')
            var selection = document.getSelection()

            node.textContent = text
            document.body.appendChild(node)

            selection.removeAllRanges()
            node.select()
            document.execCommand('copy')

            selection.removeAllRanges()
            document.body.removeChild(node)
        }


        window.loo = (obj) => {
            console.log(JSON.stringify(obj, null, 2))
        }
        window.line = (x) => {
            let mystuff = []
            mystuff.push(x.parentElement == null ? 'none' : x.parentElement.tagName)
            mystuff.push(x.tagName)
            mystuff.push(x.className || 'no class')
            mystuff.push(x.id || 'no id')
            mystuff.push(x.outerHTML.replace(/\s{2,}/g, ' ').slice(0, 90))
            mystuff.push(x.textContent.replace(/\s{2,}/g, ' ').slice(0, 90))
            return mystuff
        }
        window.log = (l) => console.log(l)
        window.qa = (x) => {
            return [...document.querySelectorAll(x)]
        }
        window.af = (x) => {
            return Array.from(x)
        }
        window.qs = (x) => {
            return document.querySelector(x)
        }
        window.sp = (a) => {
            return a.replace(/\s{2,}/g, ' ').trim()
        }
        window.print = function print(val) {
            let el = document.createElement('p')
            el.innerText = val
            document.body.appendChild(el)
        }
        window.add = async (task) => {
            const jtask = await JSON.stringify(task)
            const res = await fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: jtask,
            })
            const data = await res.json()
            console.log(data)
        }

        window.print = (val) => {
            let el = document.createElement('p')
            el.innerText = val
            document.body.appendChild(el)
        }
        window.elements = [...document.querySelectorAll('*:not(head, body, html,meta,script)')]
        window.myhead = [...document.querySelectorAll('head>*')]
        window.he = []
        window.myhead.forEach(a => he.push(a.outerHTML.slice(0, 60)))
        mycopy(he.join('\n')

            window.sword = (x) => {
                window.elements = [...document.querySelectorAll('*:not(head, body, html,meta,script)')]
                var expression = `${x}`;
                var re = new RegExp(expression, 'gi');
                console.log(re)
                let word = window.elements.filter(aa => aa.textContent.match(re))
                return word
            }
        })();
