let inputValue = document.querySelector("#calcInput");

// Function to append numbers and operators
document.querySelectorAll(".box").forEach(button => {
    button.addEventListener("click", () => {
        let buttonText = button.textContent;

        if (buttonText === "AC") {
            // Clear input
            inputValue.value = "";
        } else if (buttonText === "DEL") {
            // Remove last character
            inputValue.value = inputValue.value.slice(0, -1);
        } else if (buttonText === "=") {
            try {
                inputValue.value = eval(inputValue.value); // Evaluate the expression
            } catch {
                inputValue.value = "Error"; // Handle invalid expressions
            }
        } else {
            // Append clicked button value
            inputValue.value += buttonText;
        }
    });
});


document.addEventListener("keydown", (event) => {
    let key = event.key;
    
    if (key.match(/[0-9+\-*/.]/)) {
        inputValue.value += key;
    } else if (key === "Enter") {
        try {
            inputValue.value = eval(inputValue.value);
        } catch {
            inputValue.value = "Error";
        }
    } else if (key === "Backspace") {
        inputValue.value = inputValue.value.slice(0, -1);
    } else if (key === "Escape") {
        inputValue.value = "";
    }
});
