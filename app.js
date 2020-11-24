
var time = 5
var scoreCounter = 0
var interval
var chkStatus
var ispalaying = true


var insBox = document.getElementById("ins-box")
var gameBox = document.getElementById("game-box")
var gameOverBox = document.getElementById("game-over")
var result = document.getElementById("result")
var word = document.getElementById("word")
var inp = document.getElementById("inp")
var score = document.getElementById("score")
var timer = document.getElementById("timer")
var finalScore = document.getElementById("final-score")


var list =["Developer", "Focus" ,"Teacher" , "Student","interpretur", "word", "brother", "Sister", "Mother", "Father", "Subject",
 "Computer", "Science", "Math", "Social", "distance", "avoid", "television", "mouse", "tomato", "budget", "wood", "shape", "knife", "preety", "processing", "university","internet"]


function start(){
    result.innerHTML = "&nbsp; "
    time = 5
    timer.innerHTML = time
    score.innerHTML= 0
    scoreCounter=0
    inp.value = ""
    insBox.classList.add("hide")
    gameBox.classList.remove("hide")
    gameOverBox.classList.add("hide")
    
    getWord()
    interval = setInterval(counter, 1000)
    chkStatus = setInterval(status, 50)  
}

function counter(){

    if(time > 0){
        time--

    }else if(time == 0){
        ispalaying = false
    }
    timer.innerHTML = time 
    match()
}

function getWord(){

    var index = Math.floor(Math.random()*list.length)
    var currentWord = list[index]
    currentWord = currentWord.toLowerCase()
    word.innerHTML = currentWord
        // console.log(inp.value)
    // match()
}

function status(){ 
    if(!ispalaying && time === 0){
        result.innerHTML = "&nbsp; "
        finalScore.innerHTML = scoreCounter
        gameBox.classList.add("hide")
        gameOverBox.classList.remove("hide")
        clearInterval(interval)
        clearInterval(chkStatus)
        ispalaying = true
    }
}

function match(){
    var userInput = inp.value
    userInput = userInput.toLowerCase()
    if(userInput== word.innerHTML){
        console.log(word.innerHTML)
        console.log(inp.value)
        result.innerHTML = "correct!!!"
        time = 5
        scoreCounter++
        inp.value = ""

        getWord()

    }else{
        result.innerHTML = "&nbsp;"


    }
    score.innerHTML = scoreCounter
    timer.innerHTML= time

}
