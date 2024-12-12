// Select the letter element
const letter = document.getElementById("letter");

// Variables to track dragging state
let isDragging = false;
let offsetX, offsetY;

// Add event listeners
letter.addEventListener("mousedown", (e) => {
    isDragging = true;

    // Calculate the offset between the mouse position and the top-left corner of the letter
    offsetX = e.clientX - letter.offsetLeft;
    offsetY = e.clientY - letter.offsetTop;

    // Add a class to indicate dragging (optional for styling)
    letter.className = 'dragging'

});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        // Calculate the new position of the letter
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Update the letter's position
        letter.style.left = `${x}px`;
        letter.style.top = `${y}px`;

        
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;

    // Remove the dragging class
    letter.classList.remove("dragging");

    // Reset box shadow
    letter.style.boxShadow = `5px 5px 10px rgba(0, 0, 0, 0.8)`
});
