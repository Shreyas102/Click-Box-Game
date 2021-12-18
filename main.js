const MAX_TIME = 10000
const boxes=[]
let i=0
let oldi = 0
let score = 0
let totalTime = 0
let gameStarted = false;
boxes.push(document.getElementById("box1"))
boxes.push(document.getElementById("box2"))
boxes.push(document.getElementById("box3"))
boxes.push(document.getElementById("box4"))


document.getElementById('game-container').onclick = e=>{
    const {target} = e;
    const index = boxes.indexOf(target);
    if(index === oldi) ++score;
    else --score;

    document.getElementById('score').textContent = score
};

document.getElementById('start').onclick = ()=>{
    gameStarted = true
    play(1000)
}

setInterval(() => {
    if(gameStarted){
        if(totalTime >= MAX_TIME){
            alert("Game over, your score is: "+score)
            totalTime = 0
            gameStarted = false
            document.getElementById('time').textContent = 10
            score=0
            document.getElementById('score').textContent = score
            return
        }
        totalTime += 1000;
        document.getElementById('time').textContent = (MAX_TIME - totalTime)/1000
    }
}, 1000);

function play(time){
    setTimeout(()=>{
        boxes[oldi].style.backgroundColor="white"
        if(!gameStarted) return
        boxes[i].style.backgroundColor="black"
        oldi = i;
        i=Math.round(Math.random()*3.5)
        if(i>boxes.length-1){
            i=0
        }
        
        play(Math.round(Math.random()*600))
    }, time)
}