/*6. Реализовать игру в крестики-нолики. 2 игрока по очереди выставляю крестики нолики в 
поле 3 на 3. После каждого необходимо проверять, что выиграл ли игрок, который ходил последним.
 Если все клетки заполнены и никто не выиграл, то выводить сообщение о ничье. 
 */

let ceil = document.getElementsByClassName("game-item"),
    reset = document.getElementById("reset-game"),
    message = document.getElementById("message"),
    player = "X",
    stepCount = 0,
    winCombinations = [  // перечисляем выйгрышные комбинации
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ],
    dataX = [], // создаем массив для первого игрока
    dataO = [];  // создаем массив для второго игрока

for (let i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", currentStep);
}

function currentStep() {
    let num = +this.getAttribute("data-ceil");
    if (!this.textContent) {
        this.innerText = player;
        player === "X"
            ? dataX.push(num) && this.classList.add("x")
            : dataO.push(num) && this.classList.add("o");
        if (
            (dataO.length > 2 || dataX.length > 2) &&
            (checkWin(dataO, num) || checkWin(dataX, num))
        ) {
            for (let i = 0; i < ceil.length; i++) {
                ceil[i].removeEventListener("click", currentStep);
            }
            return (message.innerText = "Победил игрок " + player);
        }
        changePlayer();
        stepCount++;
        stepCount === 9
            ? (message.innerText = "Ничья")
            : (message.innerText = "Ходит игрок " + player);
    }
}

function changePlayer() {
    player === "X" ? (player = "O") : (player = "X");
}

reset.addEventListener("click", function () {
    for (let i = 0; i < ceil.length; i++) {
        ceil[i].innerText = "";
    }
    dataO = [];
    dataX = [];
    player = "O";
    stepCount = 0;
    message.innerText = "Ходит игрок " + player;
    for (let i = 0; i < ceil.length; i++) {
        ceil[i].addEventListener("click", currentStep);
        ceil[i].classList.remove("x", "o");
    }
});

function checkWin(arr, number) {
    for (let w = 0, wLen = winCombinations.length; w < wLen; w++) {
        let someWinArr = winCombinations[w],
            count = 0;
        if (someWinArr.indexOf(number) !== -1) {
            for (let k = 0, kLen = someWinArr.length; k < kLen; k++) {
                if (arr.indexOf(someWinArr[k]) !== -1) {
                    count++;
                    if (count === 3) {
                        return true;
                    }
                }
            }
            count = 0;
        }
    }
}

/*or

let currentPlayer = 1; // 1 - крестик, 2 - нолик
let field = (new Array(9)).fill(0); // 1 - крестик, 2 - нолик

let div = document.querySelector(".game__field")

div.addEventListener("click", function(event){
    let cell = event.target;
    if(cell.classList.length != 0){
        return false;
    }
    let index = cell.dataset.n; // получение атрибута data-n
    if(currentPlayer == 1){
        cell.classList.add("cross");
        currentPlayer = 2;
        field[index] = 1;
        let result = checkField(1);
        if(result == true){
            alert('Победил крестик');
        }
    } else{
        cell.classList.add("circle");
        currentPlayer = 1;
        field[index] = 2;
        let result = checkField(2);
        if(result == true){
            alert('Победил нолик');
        }
    }

    let count = field.filter((item) => {
        return item == 0
    }).length;

    if(count == 0){
        alert("Ничья");
    }
});

function checkField(n){
    if(field[0]== n && field[1] == n && field[2] == n){
        return true;
    } 
    if(field[3]== n && field[4] == n && field[5] == n){
        return true;
    }
    if(field[6]== n && field[7] == n && field[8] == n){
        return true;
    }
    if(field[0]== n && field[3] == n && field[6] == n){
        return true;
    }
    if(field[1]== n && field[4] == n && field[7] == n){
        return true;
    }
    if(field[2]== n && field[5] == n && field[8] == n){
        return true;
    }
    if(field[0]== n && field[4] == n && field[8] == n){
        return true;
    }
    if(field[2]== n && field[4] == n && field[6] == n){
        return true;
    }
    return false;
}

*/