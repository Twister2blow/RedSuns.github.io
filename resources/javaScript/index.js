const numStars = 150; // Adjust number of stars here
const starContainer = document.getElementById('starContainer');

for (let i = 0; i < 150; i++) { // Generate 150 stars
    const star = document.createElement('div');
    star.className = 'stars'; // Match the corrected CSS class
    star.style.width = `${Math.random() * 3 + 1}px`; // 1-4px size
    star.style.height = star.style.width; // Circular stars
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.animationDelay = `${Math.random() * 2}s`; // Random twinkle delay

    starContainer.appendChild(star);
}



 // Adjust stars on window resize
 window.addEventListener('resize', () => {
    document.querySelectorAll('.star').forEach(star => star.remove());
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('stars');

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;

        star.style.animationDelay = `${Math.random() * 2}s`;

        starContainer.appendChild(star);
    }
});