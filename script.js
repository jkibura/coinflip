const coin = document.querySelector('.coin');
const face = document.querySelector('.face');
const flipBtn = document.querySelector('.flip-btn');

function flipResult() {
    return Math.random() >= 0.5 ? 'heads' : 'tails';
}

function animation() {

}

function flipCoin() {
    const newFace = flipResult();

    coin.classList.add('flip');

    setTimeout(()=> {
        coin.src = `resources/${newFace}.svg`;
        face.textContent = newFace;
        
        coin.classList.remove('flip');
    }, 1000);

    
}

coin.addEventListener('click', flipCoin);
flipBtn.addEventListener('click', flipCoin);