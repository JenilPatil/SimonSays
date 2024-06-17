//let btn=document.querySelector("button")
// btn.addEventListener("click", function(){
//     let h3=document.querySelector("h3");
//     let randomcolour = getRandomColour();
//     h3.innerText= randomcolour; 
//     console.log("color Updated")
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolour; 
// })
// function getRandomColour(){
//     let red= Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color
// }
let gameSeq = [];
let userSeq = [];
let HighestScore = 0;

let btns = ["orange","cyan","brown","green"];
let started = false;
let level = 0;
let h2=document.querySelector("h2");
 document.addEventListener("keypress", function(){
    if (started == false){
    console.log("Game is started");
    started = true;

     levelup();
    }});
    
    function btnflash(btn) {
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 250);
    }
    function userflash(btn) {
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        }, 250);
    }
    function levelup() {
        userSeq = [];
        level++;
        
        h2.innerText = `LEVEL ${level}`;
        let ranIndx = Math.floor(Math.random() * 3);
        let randColor = btns[ranIndx];
        let randBtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        console.log(gameSeq)
        btnflash(randBtn);
        //console.log(ranIndx);
        //console.log(randColor);
        //console.log(randBtn);
    }
    function checkans(idx){
        if(userSeq[idx] === gameSeq[idx]){
            if(userSeq.length === gameSeq.length){
               setTimeout(levelup,500);
               Highscore();
            }
        }
        else{
            h2.innerHTML = `GameOver! Your Score Is <b>${level - 1}</b> <br> Press Any Key To Start`;
            document.querySelector("body").style.backgroundColor= "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            },150)
            reset();
        }
    }
    function btnPress(){
        let btn = this;
        userflash(btn);
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkans(userSeq.length - 1);
    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
    function reset(){
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
        }
    function Highscore(){
        if(level > HighestScore)
    {
        HighestScore = level;
        document.getElementById('highestscore').innerText = HighestScore;
    }
    }