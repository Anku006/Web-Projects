let homeInitial = 0
let guestInitial = 0

let scoreEl = document.getElementById("home-score")

let guestEl = document.getElementById("guest-score")

function incrementByOneHome() {
    homeInitial = homeInitial + 1
    scoreEl.textContent = homeInitial
}

function incrementByTwoHome() {
    homeInitial = homeInitial + 2
    scoreEl.textContent = homeInitial
}

function incrementByThreeHome() {
    homeInitial = homeInitial + 3
    scoreEl.textContent = homeInitial
}

function incrementByOneGuest() {
   guestInitial = guestInitial + 1
   guestEl.textContent = guestInitial
}

function incrementByTwoGuest() {
   guestInitial = guestInitial + 2
   guestEl.textContent = guestInitial
}

function incrementByThreeGuest() {
    guestInitial = guestInitial + 3
   guestEl.textContent = guestInitial
}

function resetScore() {
    homeInitial = 0
    guestInitial = 0
    scoreEl.textContent = homeInitial
    guestEl.textContent = guestInitial
} 