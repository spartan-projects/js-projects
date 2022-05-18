// Single line comment. Constant called msgHelloOuter.
const msgHelloOuter = "Hello world from other js file";

/*
Multiline comments

Access to the DOM through the document object
Look for the element with id "second-output"
Add the string hold in msgHelloOuter constant.
 */
document.getElementById("second-output").innerText = msgHelloOuter;