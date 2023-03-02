let character = document.querySelector('#character');
let block = document.querySelector('#block');
let btn = document.querySelector('#btn');
let startBtn = document.querySelector('#start-btn');
// let score = Number(document.querySelector('#score').innerHTML);


let jump = () => {
    if(character.classList != 'animation') {
    character.classList.add('animation');
    // score++;
    }
    setTimeout(()=> {
        character.classList.remove('animation');
    }, 500)
}

let checkDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert('You died')
    }
}, 50)

btn.onclick = () => {
    block.style.display = "block";
}

startBtn.onclick = () => {
    block.style.animation = "blockRun 1s infinite linear";

    let checkDead = setInterval(() => {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    
        if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
            block.style.animation = "none";
            block.style.display = "none";
            alert('You died')
        }
    }, 50)
}