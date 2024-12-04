const numStars = 150; // Adjust number of stars here
const starContainer = document.getElementById('starContainer');

// Function used to make more stars
function createStar(){
    const star = document.createElement('div');
    const lifetime = Math.random() * 3 + 1
    const starSize = `${Math.random() * 4 + 2}px`
    const starColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`
    
    star.className = 'stars'; // Match the corrected CSS class
    star.style.width = starSize; // 1-4px size
    star.style.height = starSize; // Circular stars
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.animation = `fadeOut ${lifetime}s linear`
    star.style.background = starColor
    starContainer.appendChild(star);

    setTimeout(function(){
        starContainer.removeChild(star);
        createStar();
    }, lifetime * 1000)
}

// Generate the initial stars
for (let i = 0; i < numStars; i++){
    createStar();
}
