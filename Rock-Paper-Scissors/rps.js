// Variables
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let choice = document.getElementById("choice");
let erock = document.getElementById("enemyrock");
let epaper = document.getElementById("enemypaper");
let escissors = document.getElementById("enemyscissors");
let enemy = document.getElementById("rand");
let enemychoice = document.getElementById("enemychoice");
let outcome = document.getElementById("outcome");
let playbtn = document.getElementById("play-btn");
let playagain = document.getElementById("play-again");
let leftarrowbtn = document.getElementById("btn1");
let rightarrowbtn = document.getElementById("btn2");

// EventListeners 
document.getElementById("btn1").addEventListener("click", leftarrow);
document.getElementById("btn2").addEventListener("click", rightarrow);
document.getElementById("play-btn").addEventListener("click", play);
document.getElementById("play-again").addEventListener("click", playagainbtn)

//Event Functions
function leftarrow() {
    if (scissors.classList.contains("hidden") && paper.classList.contains("hidden")) {
        rock.classList.add("hidden");
        scissors.classList.remove("hidden");
    } else if (rock.classList.contains("hidden") && scissors.classList.contains("hidden")) {
        paper.classList.add("hidden");
        rock.classList.remove("hidden");
    } else {
        rock.classList.add("hidden");
        paper.classList.remove("hidden");
        scissors.classList.add("hidden");
    }
}

function rightarrow() {
    if (paper.classList.contains("hidden") && scissors.classList.contains("hidden")) {
        rock.classList.add("hidden");
        paper.classList.remove("hidden");
    } else if (rock.classList.contains("hidden") && paper.classList.contains("hidden")) {
        scissors.classList.add("hidden");
        rock.classList.remove("hidden");
    } else {
        rock.classList.add("hidden");
        paper.classList.add("hidden");
        scissors.classList.remove("hidden");
    }
}

function play() {
    let randNum = Math.random(); 
    
    if (randNum < (1/3)) {
        enemy.classList.add("hidden");
        erock.classList.remove("hidden");
    } else if (randNum < (2/3)) {
        enemy.classList.add("hidden");
        epaper.classList.remove("hidden");
    } else {
        enemy.classList.add("hidden");
        escissors.classList.remove("hidden");
    }
    
    if (paper.classList.contains("hidden") && scissors.classList.contains("hidden") && epaper.classList.contains("hidden") && escissors.classList.contains("hidden")) {
        outcome.innerHTML = "Draw. Try Again!"
    } else if (rock.classList.contains("hidden") && scissors.classList.contains("hidden") && erock.classList.contains("hidden") && escissors.classList.contains("hidden")) {
        outcome.innerHTML = "Draw. Try Again!"
    } else if (rock.classList.contains("hidden") && paper.classList.contains("hidden") && erock.classList.contains("hidden") && epaper.classList.contains("hidden")) {
        outcome.innerHTML = "Draw. Try Again!"
    }

    if (paper.classList.contains("hidden") && scissors.classList.contains("hidden") && erock.classList.contains("hidden") && escissors.classList.contains("hidden")) {
        outcome.innerHTML = "ZAAYYYUUUMN!? You suck at this! :)"
    } else if (paper.classList.contains("hidden") && scissors.classList.contains("hidden") && erock.classList.contains("hidden") && epaper.classList.contains("hidden")) {
        outcome.innerHTML = "DARN IT!! You got me! :("
    } else if (rock.classList.contains("hidden") && scissors.classList.contains("hidden") && erock.classList.contains("hidden") && epaper.classList.contains("hidden")) {
        outcome.innerHTML = "ZAAYYYUUUMN!? You suck at this! :)"
    } else if (rock.classList.contains("hidden") && scissors.classList.contains("hidden") && epaper.classList.contains("hidden") && escissors.classList.contains("hidden")) {
        outcome.innerHTML = "DARN IT!! You got me! :("
    } else if (rock.classList.contains("hidden") && paper.classList.contains("hidden") && epaper.classList.contains("hidden") && escissors.classList.contains("hidden")) {
        outcome.innerHTML = "ZAAYYYUUUMN!? You suck at this! :)"
    } else if (rock.classList.contains("hidden") && paper.classList.contains("hidden") && erock.classList.contains("hidden") && escissors.classList.contains("hidden")) {
        outcome.innerHTML = "DARN IT!! You got me! :("
    }

    leftarrowbtn.classList.add("invisible");
    rightarrowbtn.classList.add("invisible");

    playbtn.classList.add("hidden");
    playagain.classList.remove("hidden");
}

function playagainbtn() {
    rock.classList.remove("hidden");
    paper.classList.add("hidden");
    scissors.classList.add("hidden");
    erock.classList.add("hidden");
    epaper.classList.add("hidden");
    escissors.classList.add("hidden");
    enemy.classList.remove("hidden");
    playagain.classList.add("hidden");
    playbtn.classList.remove("hidden");
    leftarrowbtn.classList.remove("invisible");
    rightarrowbtn.classList.remove("invisible");
    outcome.innerHTML = ""
}