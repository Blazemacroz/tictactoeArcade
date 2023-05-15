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
const tile1 = document.getElementById("ti1")
const tile2 = document.getElementById("ti2")
const tile3 = document.getElementById("ti3")
const tile4 = document.getElementById("ti4")
const tile5 = document.getElementById("ti5")
const tile6 = document.getElementById("ti6")
const tile7 = document.getElementById("ti7")
const tile8 = document.getElementById("ti8")
const tile9 = document.getElementById("ti9")
const board = document.getElementById("board")

for (let i = 0; i < board.length; i++) {
    Array.push(board[i])
}
console.log(board[i])

ticSpaceOne.addEventListener('click', function ticfunc1() {
        if (state === 1) {
            tile1.innerText = "X";
            // ticSpaceOne.disabled = true;
            state = 0
            ticSpaceOne.removeEventListener('click', ticfunc1);
        } else {
            tile1.innerText = "O";
            // ticSpaceOne.disabled = true;
            state = 1
            ticSpaceOne.removeEventListener('click', ticfunc1); 
        }
    }
)
ticSpaceTwo.addEventListener('click', function ticfunc2() {
    if (state === 1) {
        tile2.innerText = "X";
        // ticSpaceTwo.disabled = true;
        state = 0
        ticSpaceTwo.removeEventListener('click', ticfunc2);
    } else {
        tile2.innerText = "O";
        // ticSpaceTwo.disabled = true;
        state = 1
        ticSpaceTwo.removeEventListener('click', ticfunc2);
        }
    }
)
ticSpaceThree.addEventListener('click', function ticfunc3() {
    if (state === 1) {
        tile3.innerText = "X";
        // ticSpaceThree.disabled = true;
        state = 0;
        ticSpaceThree.removeEventListener('click', ticfunc3);
    } else {
        tile3.innerText = "O";
        // ticSpaceThree.disabled = true;
        state = 1;
        ticSpaceThree.removeEventListener('click', ticfunc3);
        }
    }
)
ticSpaceFour.addEventListener('click',  function ticfunc4() {
    if (state === 1) {
       tile4.innerText = "X";
    //    ticSpaceFour.disabled = true;
        state = 0;
        ticSpaceFour.removeEventListener('click', ticfunc4);
    } else {
        tile4.innerText = "O";
        // ticSpaceFour.disabled = true;
        state = 1;
        ticSpaceFour.removeEventListener('click', ticfunc4);
        }
    }
)
ticSpaceFive.addEventListener('click',  function ticfunc5() {
    if (state === 1) {
        tile5.innerText = "X";
        // ticSpaceFive.disabled = true;
        state = 0
        ticSpaceFive.removeEventListener('click', ticfunc5);
    } else {
        tile5.innerText = "O";
        // ticSpaceFive.disabled = true;
        state = 1
        ticSpaceFive.removeEventListener('click', ticfunc5);
        }
    }
)
ticSpaceSix.addEventListener('click',  function ticfunc6() {
    if (state === 1) {
        tile6.innerText = "X";
        // ticSpaceSix.disabled = true;
        state = 0
        ticSpaceSix.removeEventListener('click', ticfunc6);
    } else {
        tile6.innerText = "O";
        // ticSpaceSix.disabled = true;
        state = 1
        ticSpaceSix.removeEventListener('click', ticfunc6);
        }
    }
)
ticSpaceSeven.addEventListener('click',  function ticfunc7() {
    if (state === 1) {
       tile7.innerText = "X";
        // document.getElementById("spot7").disabled = true;
        state = 0
        ticSpaceSeven.removeEventListener('click', ticfunc7);
    } else {
        tile7.innerText = "O";
        // document.getElementById("spot7").disabled = true;
        state = 1
        ticSpaceSeven.removeEventListener('click', ticfunc7);
        }
    }
)
ticSpaceEight.addEventListener('click', function ticfunc8() {
    if (state === 1) {
        tile8.innerText = "X";
        // document.getElementById("spot8").disabled = true;
        state = 0
       ticSpaceEight.removeEventListener('click', ticfunc8);
    } else {
        tile8.innerText = "O";
        // document.getElementById("spot8").disabled = true;
        state = 1
        ticSpaceEight.removeEventListener('click', ticfunc8);
        }
    }
)
ticSpaceNine.addEventListener('click',  function ticfunc9() {
    if (state === 1) {
        tile9.innerText = "X";
        // document.getElementById("spot9").disabled = true;
        state = 0
        ticSpaceNine.removeEventListener('click', ticfunc9);
    } else {
       tile9.innerText = "O";
        // document.getElementById("spot9").disabled = true;
        state = 1
        ticSpaceNine.removeEventListener('click', ticfunc9);
        }
    }
)