counterNumber = document.getElementById("counterNumber");
decreaseButton = document.getElementById("decreaseButton");
resetButton = document.getElementById("resetButton");
increaseButton = document.getElementById("increaseButton");
let count=0;

decreaseButton.onclick = function(){
    count -= 1;
    counterNumber.textContent = count
}

resetButton.onclick = function(){
    count = 0;
    counterNumber.textContent = count
}

increaseButton.onclick = function(){
    count += 1;
    counterNumber.textContent = count
}