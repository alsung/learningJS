// cache query selectors in vars for better performance
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// This is something called a callback function. When 
// that line of javascript runs, we don't want the 
// addListAfterClick function to run because we are 
// just adding the event listener now to wait for click 
// or keypress. We want to let it know though that we 
// want this action to happen when a click happens. So 
// the function now automatically gets run (gets added 
// the ()) every time the click happens. So we are 
// passing a reference to the function without running it.

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);