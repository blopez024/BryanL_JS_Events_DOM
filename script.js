// When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with an id of "onload"
    let onLoadElement = document.getElementById("onload");

    // Add some HTML within the element we grabbed
    onLoadElement.innerHTML = "<h1>I loaded cause the DOM was fully loaded</h1>"
})

// Get the element that will show our key code
let directionElement = document.getElementById("direction");

// Can be changed with key press or key up depending on what you might need
document.addEventListener("keydown", function (e) {
    // When a key is pressed, the element with the id of direction will show the message
    directionElement.innerText = `The key you pressed is ${e.code}`;
})

// Get the element that with an id of "clickMe"
clickMeElement = document.getElementById("clickMe");

// When the button is click, this will be fired
document.addEventListener("click", function () {
    // Add some HTML with the element we grabbed
    clickMeElement.innerText = "You clicked me!"
})