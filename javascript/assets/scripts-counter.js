var currentNumber = 0;

update();

function increment() {
    currentNumber++;
    if (currentNumber >= 10) {
        document.getElementById("sum").disabled = true;
    }
    document.addEventListener('click', update);
}

function decrement() {
    currentNumber--;
    if (currentNumber <= -10) {
        document.getElementById("minus").disabled = true;
    }
    document.addEventListener('click', update);
}

function reset() {
    currentNumber = 0;
    document.getElementById("minus").disabled = false;
    document.getElementById("sum").disabled = false;
    document.addEventListener('click', update);
}

function update() {
    currentNumber < 0 ? document.getElementById("currentNumber").style.color = "red" : document.getElementById("currentNumber").style.color = "black";
    document.getElementById("currentNumber").innerHTML = currentNumber;
}