let boxes = document.querySelectorAll(".box")
let resetbutton = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg")


let count = 0
let turnO = true; //playerX,playerOlet 
let winningpatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetgame = () => {
    turnO = true;
    count = 0
    enabled()
    msgcontainer.classList.add("hide")
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            box.style.color = "red"
            turnO = false;
        }

        else {
            box.innerText = "X";
            box.style.color = "blue"
            turnO = true;
        }

        box.disabled = true;
        count++;

        checkwinner()

    });
});

const disabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const showwinner = (winner) => {
    msg.innerText = `"Congrats!! winner is ${winner}"`;
    msgcontainer.classList.remove("hide")
    disabled()

};

const drawn = () => {
    msg.innerText = `"Game Drawn"`
    msgcontainer.classList.remove("hide")
    disabled()
}

const checkwinner = () => {
    for (let pattern of winningpatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showwinner(pos1value);
                return true
            }

        }
    }

    if (count == 9) {
        drawn();
    }


};

newgamebtn.addEventListener("click", resetgame)
resetbutton.addEventListener("click", resetgame)