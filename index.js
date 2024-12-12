                                                                    // STAR STUFF //
const numStars = 150; // Adjust number of stars here
const starContainer = document.getElementById('starContainer');

function createStar() {
    // Create the star
    const star = document.createElement('div');
    star.className = 'stars';

    // Randomize size and color
    const size = Math.random() * 4 + 1;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = randomColor;
    star.style.boxShadow = `0 0 60px 10px ${randomColor}`;
    
    // Randomize position
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    // Set animation duration and delay
    const fadeDuration = Math.random() * 5 + 3; // 4 to 8 seconds
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

                                                            // LETTER BOUNCING INTERACTIONS //
var letterList = []; // Contains how many times a letter has appeared
const phraseToCreate = "TheHitchHikersGuideToTheGalaxy";
const fontSize = 1; // Uses ViewportWidth (vw)
 

function createLetter(letter){
    // Create new letter
    const newLetter = document.createElement('div');
    newLetter.className = 'bouncingLetters';

    // Define text size and color
    newLetter.style.fontSize = `${fontSize}vw`;
    newLetter.style.color = 'white';

    // Define movement variables
    var deltaX = 0; // Represents speed in the X direction
    var deltaY = 0; // Represents speed in the Y direction
    var lastUpdatedTime = 0; // Represents delta time
    function updatePosition(){
        // Check position
        var newLetterPosX = (newLetter.style.left + newLetter.style.right)/2;
        var newLetterPosY = (newLetter.style.top + newLetter.style.bottom)/2;
        var windowH = window.innerHeight;
        var windowW = window.innerWidth;

        
        if (newLetterPosX <= 0 || ){
            deltaX = -deltaX
        } 
        
    }
    
    //window.requestAnimationFrame()
    
    newLetter.addEventListener("click", function(){
        
    })
}