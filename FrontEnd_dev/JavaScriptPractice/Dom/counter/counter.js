var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");
var result = document.getElementById("counter");



function increment(){
    result.style.color = "green"
    previous_value = document.getElementById("counter").textContent
    result.textContent = parseInt(previous_value) + 1
}

function zero(){
    result.style.color = "blue"
    result.textContent = 0
}

function decrement(){
    result.style.color = "red"
    previous_value = document.getElementById("counter").textContent
    val = parseInt(previous_value) - 1
    result.textContent = val
}