                                                    // Letter 1 // 

// Select the letter element
const letter = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const letter3 = document.getElementById("letter3");

// Variables to track dragging state
let isDragging = false;
let offsetX, offsetY;


let isDragging2 = false;
let offsetX2, offsetY2;

let isDragging3 = false;
let offsetX3, offsetY3;

// Add event listeners
letter.addEventListener("mousedown", (e) => {
    isDragging = true;

    // Calculate the offset between the mouse position and the top-left corner of the letter
    offsetX = e.clientX - letter.offsetLeft;
    offsetY = e.clientY - letter.offsetTop;

    // Add a class to indicate dragging (optional for styling)
    letter.classList.add('dragging')

});

letter2.addEventListener("mousedown", (e) => {
    isDragging2 = true;

    // Calculate the offset between the mouse position and the top-left corner of the letter
    offsetX2 = e.clientX - letter2.offsetLeft;
    offsetY2 = e.clientY - letter2.offsetTop;

    // Add a class to indicate dragging (optional for styling)
    letter2.classList.add('dragging')

});

letter3.addEventListener("mousedown", (e) => {
    isDragging3 = true;

    // Calculate the offset between the mouse position and the top-left corner of the letter
    offsetX3 = e.clientX - letter3.offsetLeft;
    offsetY3 = e.clientY - letter3.offsetTop;

    // Add a class to indicate dragging (optional for styling)
    letter3.classList.add('dragging')

});

// ADD MORE HERE // 
document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        // Calculate the new position of the letter
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Update the letter's position
        letter.style.left = `${x}px`;
        letter.style.top = `${y}px`;
    
    }
    
    if (isDragging2) {
        // Calculate the new position of the letter
        const x = e.clientX - offsetX2;
        const y = e.clientY - offsetY2;

        // Update the letter's position
        letter2.style.left = `${x}px`;
        letter2.style.top = `${y}px`;
    
    }
    
    if (isDragging3) {
        // Calculate the new position of the letter
        const x = e.clientX - offsetX3;
        const y = e.clientY - offsetY3;

        // Update the letter's position
        letter3.style.left = `${x}px`;
        letter3.style.top = `${y}px`;
    
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    isDragging2 = false;
    isDragging3 = false;
    
    // Remove the dragging class
    letter.classList.remove("dragging");
    letter2.classList.remove("dragging");   
    letter3.classList.remove("dragging");   
    
    // Reset box shadow
    letter.style.boxShadow = `5px 5px 10px rgba(0, 0, 0, 0.8)`;
    letter2.style.boxShadow = `5px 5px 10px rgba(0, 0, 0, 0.8)`;
    letter3.style.boxShadow = `5px 5px 10px rgba(0, 0, 0, 0.8)`;
});



                                                    // Letter 2 //
