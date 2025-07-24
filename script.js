const coin = document.querySelector('.coin');
const face = document.querySelector('.face');
const flipBtn = document.querySelector('.flip-btn');

function flipResult() {
    return Math.random() >= 0.5 ? 'heads' : 'tails';
}

function flipCoin() {
    const newFace = flipResult();

    console.log("Hi");
    coin.src = `resources/${newFace}.svg`;

    
    face.textContent = newFace;
}

coin.addEventListener('click', flipCoin);
flipBtn.addEventListener('click', flipCoin);