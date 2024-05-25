let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeScoreInt = 0
let guestScoreInt = 0

function add1Home(){
    homeScoreInt += 1
    homeScoreEl.textContent = homeScoreInt
}

function add2Home(){
    homeScoreInt += 2
    homeScoreEl.textContent = homeScoreInt

}
function add3Home(){
    homeScoreInt += 3
    homeScoreEl.textContent = homeScoreInt

}
function add1Guest(){
    guestScoreInt += 1
    awayScoreEl.textContent = guestScoreInt
}

function add2Guest(){
    guestScoreInt += 2
    awayScoreEl.textContent = guestScoreInt

}
function add3Guest(){
    guestScoreInt += 3
    awayScoreEl.textContent = guestScoreInt

}

