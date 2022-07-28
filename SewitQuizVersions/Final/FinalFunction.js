function pressed(){
    document.getElementById("responder").textContent = document.getElementById("box").value;
}
var x = 0;
function keyboardPress(letter){
document.getElementById("responder").innerHTML = document.getElementById("responder").innerHTML + letter;
document.getElementById("box").value = document.getElementById("box").value + letter;   
}