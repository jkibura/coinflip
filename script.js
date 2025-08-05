const coin = document.querySelector('.coin');
const face = document.querySelector('.face');
const flipBtn = document.querySelector('.flip-btn');
const flipSound = document.getElementById('flipSound');

function flipResult() {
    return Math.random() >= 0.5 ? 'heads' : 'tails';
}



function flipCoin() {
    const newFace = flipResult();

    flipSound.pause();
    flipSound.currentTime = 0;
    flipSound.play();

    //.flip is a classname that is described in styles.css
    coin.classList.add('flip');

    setTimeout(()=> {
        coin.src = `resources/${newFace}.svg`;
        face.textContent = newFace;
        
        coin.classList.remove('flip');
    }, 1000);
    
    
    
}

coin.addEventListener('click', flipCoin);
flipBtn.addEventListener('click', flipCoin);