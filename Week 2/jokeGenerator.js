const jokeButton = document.querySelector("#joke-btn");
const revealButton = document.querySelector("#reveal-btn")
const setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");
const counter = document.querySelector("#counter");
const copyButton = document.querySelector("#copy-btn")
let jokeCount = 0;

copyButton.style.display = 'none';

jokeButton.addEventListener('click', async () => {
    jokeButton.textContent = 'Loading...';
    
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();

    jokeButton.textContent = 'Generate Joke';
    
    setup.textContent = (data.setup);
    punchline.textContent = (data.punchline);

    jokeCount++;
    counter.textContent = ("Jokes Generated: " + jokeCount);

    copyButton.style.display = 'block';
    revealButton.style.display = 'block'; 
    punchline.style.display = 'none';

});

copyButton.addEventListener('click', function() {
   copyButton.textContent = 'Copied!';
   
    navigator.clipboard.writeText(setup.textContent + "\n" + punchline.textContent);
    
    setTimeout(() => {
        copyButton.textContent = 'Copy Joke';
    }, 1500);
});

revealButton.addEventListener('click', function() {
    punchline.style.display = 'block';
    revealButton.style.display = 'none';
});

