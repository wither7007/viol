const button = document.querySelector("button");

// The content of the stylesheet
const styleSheetContent = `
    .demo{
        background:red;
    }
`;

// Attaching the change to a click event in a button 
button.addEventListener("click", () => {
    appendStyleSheet("demo", styleSheetContent);
});

// Appends CSS content to the head of the site
function appendStyleSheet(id, content) {
    if (!document.querySelector("#" + id)) {
        var head = document.head || document.getElementsByTagName("head")[0];
        console.log(head);
        head.appendChild(createStyleElement(id, content));
    }
}
mycon = `
body {
    background-color: #f00;
}
`
// Creates the style element
function createStyleElement(id, content) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.id = id;

    if (style.styleSheet) {
        style.styleSheet.cssText = content;
    } else {
        style.appendChild(document.createTextNode(content));
    }
    return style;
}
const injectCSS = css => {
    let el = document.createElement('style');
    el.type = 'text/css';
    el.innerText = css;
    document.head.appendChild(el);
    return el;
};

injectCSS('body { background-color: #fff }');
injectCSS('img { width: 20px; height: 20px; }')