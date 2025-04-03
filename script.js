// When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with an id of "onload"
    let onLoadElement = document.getElementById("onload");

    // Add some HTML within the element we grabbed
    onLoadElement.innerHTML = "<h1>I loaded cause the DOM was fully loaded</h1>"
})

//-------------------------------------------------------------------------------------

// Get the element that will show our key code
let directionElement = document.getElementById("direction");

// Can be changed with key press or key up depending on what you might need
document.addEventListener("keydown", function (e) {
    // When a key is pressed, the element with the id of direction will show the message
    directionElement.innerText = `The key you pressed is ${e.code}`;
})

//-------------------------------------------------------------------------------------

// Get the element  with an id of "clickMe"
clickMeElement = document.getElementById("clickMe");

// When the button is click, this will be fired
clickMeElement.addEventListener("click", function () {
    // Add some HTML with the element we grabbed
    clickMeElement.innerText = "You clicked me!"
})

//-------------------------------------------------------------------------------------

// Get the element with an id of "randomColorBtn" 
randomColorBtnElement = document.getElementById("randomColorBtn")

// Function that generates a random color for the background color
function changeBackgroundColor() {
    // Generate 3 random numbers from 0 - 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Set rgb to the random numbers
    const randomColor = `rgb(${r},${g},${b})`
    // Update background color to new random color
    document.body.style.backgroundColor = randomColor;
}
// When the button is click, this will be fired and background color will change
randomColorBtnElement.addEventListener("click", changeBackgroundColor);

//-------------------------------------------------------------------------------------

//  Function that adds and removes class targeted by query selector
function changeBtnStyle() {
    // Target element with class "coolButton"
    const btn = document.querySelector("#coolButton");
    // Toggle class "cool-btn" defined in styles.css
    btn.classList.toggle("cool-btn")
    // Toggle class "glow" defined in styles.css
    btn.classList.toggle("glow");
}