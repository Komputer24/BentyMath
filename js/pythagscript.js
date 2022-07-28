function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
function calculate(){
    if((document.getElementById("aSquared").value == "") || (document.getElementById("bSquared").value == "")){
       alert("You forgot a box")
    }else{
        document.getElementById("cSquared").value = (pythagorean(document.getElementById("aSquared").value, document.getElementById("bSquared").value)).toFixed(2);

        document.getElementById("a").innerHTML = document.getElementById("aSquared").value; 
        document.getElementById("b").innerHTML = document.getElementById("bSquared").value; 
        document.getElementById("c").innerHTML = document.getElementById("cSquared").value; 
    }
}
document.addEventListener('keydown', function(event) {
if(event.keyCode == 13) {
    calculate();
}
});