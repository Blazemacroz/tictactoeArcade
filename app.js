const ticSpaceOne = document.getElementById("spot1");
const ticSpaceTwo = document.getElementById("spot2")
const ticSpaceThree = document.getElementById("spot3")
const ticSpaceFour = document.getElementById("spot4")
const ticSpaceFive = document.getElementById("spot5")
const ticSpaceSix = document.getElementById("spot6")
const ticSpaceSeven = document.getElementById("spot7")
const ticSpaceEight = document.getElementById("spot8")
const ticSpaceNine = document.getElementById("spot9")
const ticImgX = document.querySelector('img')
let state = 1

ticSpaceOne.addEventListener('click', function ticfunc1() {
        if (state === 1) {
            ticSpaceOne.innerText = "X";
            // ticSpaceOne.disabled = true;
            state = 0
            ticSpaceOne.removeEventListener('click', ticfunc1);
        } else {
            ticSpaceOne.innerText = "O";
            // ticSpaceOne.disabled = true;
            state = 1
            ticSpaceOne.removeEventListener('click', ticfunc1); 
        }
    }
)
ticSpaceTwo.addEventListener('click', function ticfunc2() {
    if (state === 1) {
        ticSpaceTwo.innerText = "X";
        // ticSpaceTwo.disabled = true;
        state = 0
        ticSpaceTwo.removeEventListener('click', ticfunc2);
    } else {
        ticSpaceTwo.innerText = "O";
        // ticSpaceTwo.disabled = true;
        state = 1
        ticSpaceTwo.removeEventListener('click', ticfunc2);
        }
    }
)
ticSpaceThree.addEventListener('click', function ticfunc3() {
    if (state === 1) {
        ticSpaceThree.innerText = "X";
        ticSpaceThree.disabled = true;
        state = 0;
        ticSpaceThree.removeEventListener('click', ticfunc3);
    } else {
        ticSpaceThree.innerText = "O";
        ticSpaceThree.disabled = true;
        state = 1;
        ticSpaceThree.removeEventListener('click', ticfunc3);
        }
    }
)
ticSpaceFour.addEventListener('click',  function ticfunc4() {
    if (state === 1) {
        document.getElementById("spot4").innerText = "X";
        document.getElementById("spot4").disabled = true;
        state = 0;
        ticSpaceFour.removeEventListener('click', ticfunc4);
    } else {
        document.getElementById("spot4").innerText = "O";
        document.getElementById("spot4").disabled = true;
        state = 1;
        ticSpaceFour.removeEventListener('click', ticfunc4);
        }
    }
)
ticSpaceFive.addEventListener('click',  function ticfunc5() {
    if (state === 1) {
        document.getElementById("spot5").innerText = "X";
        document.getElementById("spot5").disabled = true;
        state = 0
    } else {
        document.getElementById("spot5").innerText = "O";
        document.getElementById("spot5").disabled = true;
        state = 1
        }
    }
)
ticSpaceSix.addEventListener('click',  function ticfunc6() {
    if (state === 1) {
        document.getElementById("spot6").innerText = "X";
        document.getElementById("spot6").disabled = true;
        document.getElementById("spot6").removeEventListener;
        state = 0
    } else {
        document.getElementById("spot6").innerText = "O";
        document.getElementById("spot6").disabled = true;
        document.getElementById("spot6").removeEventListener;
        state = 1
        }
    }
)
ticSpaceSeven.addEventListener('click',  function ticfunc7() {
    if (state === 1) {
        document.getElementById("spot7").innerText = "X";
        document.getElementById("spot7").disabled = true;
        document.getElementById("spot7").removeEventListener;
        state = 0
    } else {
        document.getElementById("spot7").innerText = "O";
        document.getElementById("spot7").disabled = true;
        document.getElementById("spot7").removeEventListener;
        state = 1
        }
    }
)
ticSpaceEight.addEventListener('click', function ticfunc8() {
    if (state === 1) {
        document.getElementById("spot8").innerText = "X";
        document.getElementById("spot8").disabled = true;
        document.getElementById("spot8").removeEventListener;
        state = 0
    } else {
        document.getElementById("spot8").innerText = "O";
        document.getElementById("spot8").disabled = true;
        document.getElementById("spot8").removeEventListener;
        state = 1
        }
    }
)
ticSpaceNine.addEventListener('click',  function ticfunc9() {
    if (state === 1) {
        document.getElementById("spot9").innerText = "X";
        document.getElementById("spot9").disabled = true;
        document.getElementById("spot9").removeEventListener;
        state = 0
    } else {
        document.getElementById("spot9").innerText = "O";
        document.getElementById("spot9").disabled = true;
        document.getElementById("spot9").removeEventListener;
        state = 1
        }
    }
)