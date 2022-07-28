var x = 1;
var score=0;
var numval1;
var numval2;
var correctanz;
var usersanz;
var r = 0;
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var othernum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var helpUsed = 3;
var checked = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var muted = true;

var info = window.name.split("/");
var name = info[0];
var level = info[1];
// TIMER
var timeLeft = 49;
var timerId = setInterval(countdown, 1000);
var completeWrng = false;
function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        completeWrng = true;
        checkAnswer();
        timerId = setInterval(countdown, 1000);
        newTransition()
      } else {
        document.getElementById('numTimer').innerHTML = timeLeft;
        timeLeft--;
      }
}
function shuffle(array){
 var currentIndex = array.length, temporaryValue, randomIndex;
 while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
 }
 return array;
}
shuffle(num);
shuffle(othernum);
function newQuestion(){
    if(level == "0-2"){
        numval1 = document.getElementById("num1").innerHTML = num[r];
        numval2 = document.getElementById("num2").innerHTML = othernum[r];   
    }else{
        numval1 = document.getElementById("num1").innerHTML = parseInt(level);
        numval2 = document.getElementById("num2").innerHTML = num[r];   
    }
    r++;
    document.getElementById("beads").style.display = "none";
    document.getElementById("check").style.marginTop = "0px";
    document.getElementById("check").style.marginLeft = "570px";
    document.getElementById("check").style.height = "100px";
    document.getElementById("check").style.width = "180px";
    document.getElementById("check").style.float = "none";
    document.getElementById("check").style.padding = "30px 45px";
    document.getElementById("wrap").style.margin = "100px 0px 0px 250px";
    document.getElementById("help").disabled = false;
    for(var i = 0; i < checked.length; i++){
        if(checked[i] == true){
            checked[i] = false;
            document.getElementById("sq"+i).style.backgroundColor = "gray";
            document.getElementById("sq"+i).style.color = "gray";
        }
    }
    transitionStart();
    transition();
    // TIMER
    timeLeft = 50;
    countdown();
    correctanz = numval1 + numval2;
}
function checkAnswer(){
 usersanz = document.getElementById("answer");
 usersanz.focus();
 if((usersanz.value == "") && (completeWrng == false)){
    alert("Put something");
 }else{
     if(usersanz.value == correctanz && (usersanz.value !== "")){
        document.getElementById("ding").currentTime = 0.2;
        document.getElementById("ding").play();
        document.getElementById("answer").style.backgroundColor = "green";
        setTimeout(function(){ document.getElementById("answer").style.backgroundColor = "gray"; }, 1000);
        newTransition()
        document.getElementById("answer").value = "";
        score++;
     }else if(usersanz.value !== correctanz || (completeWrng == true)){
        document.getElementById("ank").currentTime = 2;
        document.getElementById("ank").play();
        document.getElementById("answer").style.backgroundColor = "red";
        setTimeout(function(){ document.getElementById("answer").style.backgroundColor = "gray"; }, 1000);
        newTransition()
        document.getElementById("answer").value = "";
        completeWrng = false;
     } 
     if(x == 10){
        if(score == 10){
            window.name = info[0] + "/" + info[1];
            window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/passresult.html";  
        }else if(score == 9){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result9.html"); 
        }else if(score == 8){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result8.html"); 
        }else if(score == 7){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result7.html"); 
        }else if(score == 6){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result6.html"); 
        }else if(score == 5){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result5.html"); 
        }else if(score == 4){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result4.html"); 
        }else if(score == 3){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result3.html"); 
        }else if(score == 2){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result2.html"); 
        }else if(score == 1){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/result1.html"); 
        }else if(score == 0){
            location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/failresult.html"); 
        }
     }else{
        setTimeout(function(){ newQuestion(); x++;}, 10);
     }
 }
}
document.addEventListener('keydown', function(event) {
if(event.keyCode == 13) {
    checkAnswer();
}
});
function helpBtn(){
    if(helpUsed != 0 || (correctanz >= 10)){
        if(helpUsed > 0){
            helpUsed--;  
        }
        document.getElementById("hintsLeft").innerHTML = helpUsed;   
        document.getElementById("beads").style.display = "block";
        document.getElementById("check").style.marginTop = "-40px";
        document.getElementById("check").style.marginLeft = "898px";
        document.getElementById("check").style.height = "60px";
        document.getElementById("check").style.width = "165px";
        document.getElementById("check").style.float = "left";
        document.getElementById("check").style.padding = "0px 0px 0px 0px";
        document.getElementById("wrap").style.margin = "40px 0px 0px 250px";
        document.getElementById("help").disabled = true;
    }else{
        alert("No more hints!");
    }
}
function muteBtn(){
    if(muted == true){
        document.getElementById('ding').muted = true;
        document.getElementById('ank').muted = true; 
        document.getElementById('mute').style.backgroundColor = "darkred";
        muted = false;
    }else{
        document.getElementById('ding').muted = false;
        document.getElementById('ank').muted = false;
        document.getElementById('mute').style.backgroundColor = "lightgray";
        muted = true;
    }
}
function dslctChk(n){
    if (checked[n] == false) {
        document.getElementById("sq"+n).style.backgroundColor = "#181818";
        document.getElementById("sq"+n).style.color = "white";
        checked[n] = true;
    }else{
        checked[n] = false;
        document.getElementById("sq"+n).style.backgroundColor = "gray";
        document.getElementById("sq"+n).style.color = "gray";
    }   
}
function selected(id){
  if(id == "sq0"){
      dslctChk(0);
  }else if(id == "sq1"){
      dslctChk(1);
  }else if(id == "sq2"){
      dslctChk(2);
  }else if(id == "sq3"){
      dslctChk(3);
  }else if(id == "sq4"){
      dslctChk(4);
  }else if(id == "sq5"){
      dslctChk(5);
  }else if(id == "sq6"){
      dslctChk(6);
  }else if(id == "sq7"){
      dslctChk(7);
  }else if(id == "sq8"){
      dslctChk(8);
  }else if(id == "sq9"){
      dslctChk(9);
  }else if(id == "sq10"){
      dslctChk(10);
  }else if(id == "sq11"){
      dslctChk(11);
  }else if(id == "sq12"){
      dslctChk(12);
  }else if(id == "sq13"){
      dslctChk(13);
  }else if(id == "sq14"){
      dslctChk(14);
  }else if(id == "sq15"){
      dslctChk(15);
  }else if(id == "sq16"){
      dslctChk(16);
  }else if(id == "sq17"){
      dslctChk(17);
  }
}

function transitionStart(){
    document.getElementById("timer").style.width = "30px";
    document.getElementById("timer").style.backgroundColor = "black";
    // TIMER
    document.getElementById("timer").style.transition = "height 50s";
    document.getElementById("timer").style.float = "left";
}
function transition(){
    document.getElementById("timer").style.height = "200px";
    document.getElementById("timer").style.transitionTimingFunction = "linear";
}
function newTransition(){
	document.getElementById("timer").style.transition = "none";
    document.getElementById("timer").style.height = "0px";
}