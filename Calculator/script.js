// Select the display element and store it in the 'display' variable
const display = document.querySelector("#display");
// Select all the button elements and store them in the 'buttons' variable
const buttons = document.querySelectorAll("button");

// Loop through each button element
buttons.forEach((item) => {
    // Set up a click event handler for the current button
    item.onclick = () => {
        // Check the ID of the clicked button to determine the action

        // If the "Clear" button is clicked, clear the display
        if (item.id == "clear") {
            display.innerText = "";
        }
        // If the "Backspace" button is clicked, simulate a backspace action
        else if (item.id == "backspace") {
            // Get the current display text
            let string = display.innerText.toString();
            // If there's text, remove the last character
            if (string.length > 0) {
                display.innerText = string.substr(0, string.length - 1);
            }
        }
        // If the display is not empty and the "Equal" button is clicked, evaluate the expression
        else if (display.innerText != "" && item.id == "equal") {
            // Evaluate the mathematical expression using 'eval' and update the display with the result
            display.innerText = eval(display.innerText);
        }
        // If the display is empty and the "Equal" button is clicked, briefly display "null" and then clear the display
        else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "null";
            // Set a timeout to clear the display after 1 second
            setTimeout(() => (display.innerText = ""), 1000);
        }
        // For other buttons, add their ID to the current display text
        else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark=!isDark
}   