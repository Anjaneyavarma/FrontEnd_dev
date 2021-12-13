var heading = document.getElementById("heading-element");
var bulb = document.getElementById("bulbImage");
var off = document.getElementById("offSwitch");
var on = document.getElementById("onSwitch");
function heading_manipulation(){
    heading.textContent= "hello world!";
    heading.style.color = "blue";
}

function invisible(){
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    on.style.backgroundColor = "green"
    off.style.backgroundColor = "gray"
    document.getElementById("status").textContent = "Switched Off"
}

function visible(){
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    off.style.backgroundColor = "red"
    on.style.backgroundColor = "gray"
    document.getElementById("status").textContent = "Switched On"

}