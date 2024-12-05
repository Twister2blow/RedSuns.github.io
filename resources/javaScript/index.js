
                                                                    // STAR STUFF //
const numStars = 150; // Adjust number of stars here
const starContainer = document.getElementById('starContainer');

function createStar() {
    const star = document.createElement('div');
    star.className = 'stars';

    // Randomize size and color
    const size = Math.random() * 3 + 1;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = randomColor;

    // Randomize position
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    // Set animation duration and delay
    const fadeDuration = Math.random() * 3 + 2; // 4 to 8 seconds
    star.style.animation = `fadeOut ${fadeDuration}s linear infinite`;

    // Remove star after it fades out
    setTimeout(function(){
        starContainer.removeChild(star)
        createStar()
    }, fadeDuration * 1000)

    starContainer.appendChild(star);
}

// Create initial stars
for (let i = 0; i < numStars; i++) {
    createStar();
}