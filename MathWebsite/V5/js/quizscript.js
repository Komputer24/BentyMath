var x = 1;
var score=0;
var numval1;
var numval2;
var correctanz;
var usersanz;
var r = 0;
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4];
var divNum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 18, 16, 14, 12, 10];
var otherDivNum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 18, 16, 14, 12, 10, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 18, 16, 14, 12, 10, 2, 4, 6, 8, 10,];
var specialNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var othernum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5];
var tensnum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 50, 40, 30, 20, 10]
var helpUsed = 3;
var checked = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var muted = true;
// QUESTIONS
var amount = 15;
var correct = 0;
var tenOrNot = 1;
window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot;
var info = window.name.split("/");
var name = info[0];
var level = info[1];
var amount = info[2];
var correct = info[3];
var tenOrNot = info[4];
var operation = info[5];
var smallTime = false;
// TIMER 
if(smallTime == true){
   var timeLeft = 14;
}else{
   var timeLeft = 25;
}
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
shuffle(tensnum);
shuffle(specialNum);
shuffle(divNum);
shuffle(otherDivNum);
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function newQuestion(){
    
    
    if(operation == "addition"){
        /*if(level == "random"){
        numval1 = document.getElementById("num1").innerHTML = num[r];
        numval2 = document.getElementById("num2").innerHTML = othernum[r];   
        }*/
        if(level == "0-2"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(0, 2);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];
        }else if(level == "3-5"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(3, 5);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];  
        }else if(level == "6-8"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(6, 8);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];  
        }else if(level == "9-10"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(9, 10);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];  
        }else if(level == "doubles"){
            numval1 = document.getElementById("num1").innerHTML = num[r];
            numval2 = document.getElementById("num2").innerHTML = num[r];  
            smallTime = true;
        }else if(level == "tens"){
            numval1 = document.getElementById("num1").innerHTML = tensnum[r];
            numval2 = document.getElementById("num2").innerHTML = tensnum[r]; 
            smallTime = true;
        }else{
            numval1 = document.getElementById("num1").innerHTML = parseInt(level);
            numval2 = document.getElementById("num2").innerHTML = num[r];   
        }  
    }else if(operation == "subtraction"){
        if(level == "0-2"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(othernum[r], 23)+2;
            numval2 = document.getElementById("num2").innerHTML = randomIntFromInterval(0, 2);
        }else if(level == "3-5"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(othernum[r], 20)+5;
            numval2 = document.getElementById("num2").innerHTML = randomIntFromInterval(3, 5);  
        }else if(level == "6-8"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(othernum[r], 17)+8;
            numval2 = document.getElementById("num2").innerHTML = randomIntFromInterval(6, 8);  
        }else if(level == "9-10"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(othernum[r], 15)+10;
            numval2 = document.getElementById("num2").innerHTML = randomIntFromInterval(9, 10);  
        }else if(level == "doubles"){
            numval1 = document.getElementById("num1").innerHTML = num[r];
            numval2 = document.getElementById("num2").innerHTML = num[r];  
            smallTime = true;
        }else if(level == "tens"){
            numval1 = document.getElementById("num1").innerHTML = tensnum[r];
            numval2 = document.getElementById("num2").innerHTML = tensnum[r]; 
            smallTime = true;
        }else{
            numval1 = document.getElementById("num1").innerHTML = Math.floor(Math.random() * 9)+parseInt(level);
            numval2 = document.getElementById("num2").innerHTML = parseInt(level);
            if(numval1 < parseInt(level)){
                //specialNum[r] = parseInt(level);
                //specialNum[r] = Math.floor(Math.random() * (100 - parseInt(level) + 1)) + parseInt(level);
                numval1 = randomIntFromInterval(parseInt(level), 10)
            }
            //numval1 = document.getElementById("num1").innerHTML = specialNum[r];  
        }  
        
    }
    else if(operation == "division"){
        if(level == "0-2"){
            var ran1 = randomIntFromInterval(1, 2);
            numval1 = document.getElementById("num1").innerHTML = ran1*randomIntFromInterval(1, 10);
            numval2 = document.getElementById("num2").innerHTML = ran1;
        }else if(level == "3-5"){
            var ran2 = randomIntFromInterval(3, 5);
            numval1 = document.getElementById("num1").innerHTML = ran2*randomIntFromInterval(1, 10);
            numval2 = document.getElementById("num2").innerHTML = ran2;  
        }else if(level == "6-8"){
            var ran3 = randomIntFromInterval(6, 8);
            numval1 = document.getElementById("num1").innerHTML = ran3*randomIntFromInterval(1, 10);
            numval2 = document.getElementById("num2").innerHTML = ran3;    
        }else if(level == "9-10"){
            var ran4 = randomIntFromInterval(9, 10);
            numval1 = document.getElementById("num1").innerHTML = ran4*randomIntFromInterval(1, 10);
            numval2 = document.getElementById("num2").innerHTML = ran4;   
        }else if(level == "doubles"){
            numval1 = document.getElementById("num1").innerHTML = divNum[r];
            numval2 = document.getElementById("num2").innerHTML = divNum[r];  
            smallTime = true;
        }else if(level == "tens"){
            numval1 = document.getElementById("num1").innerHTML = tensnum[r];
            numval2 = document.getElementById("num2").innerHTML = tensnum[r]; 
            smallTime = true;
        }else{
            numval1 = document.getElementById("num1").innerHTML = parseInt(level)*randomIntFromInterval(1, 10);
            numval2 = document.getElementById("num2").innerHTML = parseInt(level);   
        }
    }
    else if(operation == "multiplication"){
        if(level == "0-2"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(0, 2);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];
        }else if(level == "3-5"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(3, 5);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];  
        }else if(level == "6-8"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(6, 8);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];  
        }else if(level == "9-10"){
            numval1 = document.getElementById("num1").innerHTML = randomIntFromInterval(9, 10);
            numval2 = document.getElementById("num2").innerHTML = othernum[r];  
        }else if(level == "doubles"){
            numval1 = document.getElementById("num1").innerHTML = num[r];
            numval2 = document.getElementById("num2").innerHTML = num[r];  
            smallTime = true;
        }else if(level == "tens"){
            numval1 = document.getElementById("num1").innerHTML = tensnum[r];
            numval2 = document.getElementById("num2").innerHTML = tensnum[r]; 
            smallTime = true;
        }else{
            numval1 = document.getElementById("num1").innerHTML = parseInt(level);
            numval2 = document.getElementById("num2").innerHTML = num[r];   
        }  
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
    if(smallTime == true){
        timeLeft = 15;
    }else{
        timeLeft = 25;
    }
    countdown();
    if(operation == "addition"){
        correctanz = numval1 + numval2;
    }else if(operation == "subtraction"){
        correctanz = numval1 - numval2;
        document.getElementById("sign").innerHTML = "-";
    }else if(operation == "division"){
        correctanz = numval1 / numval2;
        document.getElementById("sign").innerHTML = "/";
    }else if(operation == "multiplication"){
        correctanz = numval1 * numval2;
        document.getElementById("sign").innerHTML = "x";
    }
}
function checkAnswer(){
 document.getElementById("questionNum").innerHTML = "Question: " + (x+1);
 usersanz = document.getElementById("answer");
 usersanz.focus();
 if((usersanz.value == "") && (completeWrng == false)){
    alert("Put something");
 }else{
     if(usersanz.value == correctanz && (usersanz.value !== "")){
        document.getElementById("ding").currentTime = 0.2;
        document.getElementById("ding").play();
        document.getElementById("answer").style.backgroundColor = "green";
        setTimeout(function(){ document.getElementById("answer").style.backgroundColor = "pink"; }, 1000);
        newTransition()
        document.getElementById("answer").value = "";
        score++;
     }else if(usersanz.value !== correctanz || (completeWrng == true)){
        document.getElementById("ank").currentTime = 2;
        document.getElementById("ank").play();
        document.getElementById("answer").style.backgroundColor = "red";
        setTimeout(function(){ document.getElementById("answer").style.backgroundColor = "pink"; }, 1000);
        newTransition()
        document.getElementById("answer").value = "";
        completeWrng = false;
     }
     // QUESTIONS
     if(x >= 15){
        if((level == "0-2") || (level == "3-5") || (level == "6-8") || (level == "9-10")){
            if(x == 35){
                for(var i = 0; i <= 35; i++){
                    if(score == i){
                        info[3] = i;
                        info[4] = 0;
                        window.name = info[0] + "/" + info[1] + "/" + info[2] + "/" + info[3] + "/" + info[4] + "/" + info[5];
                        if(score == 35){
                           window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/passresult.html";
                        }else if(score == 0){
                           window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/failresult.html";
                        }else{
                           window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/userresult.html";
                        }
                    }
                }
            }
            else{
                setTimeout(function(){ newQuestion(); x++;}, 10);
            }
        }
        else if(level != ("0-2" || "3-5" || "6-8" || "9-10")){
            // QUESTIONS
            for(var i = 0; i <= 15; i++){
                    if(score == i){
                        info[3] = i;
                        info[4] = 1;
                        window.name = info[0] + "/" + info[1] + "/" + info[2] + "/" + info[3] + "/" + info[4] + "/" + info[5];
                        // QUESTIONS
                        if(score == 15){
                           window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/passresult.html";
                        }else if(score == 0){
                           window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/failresult.html";
                        }else{
                           window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/userresult.html";
                        }
                    }
                }
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
    if(smallTime == true){
        document.getElementById("timer").style.transition = "height 15s"; 
    }else{
        document.getElementById("timer").style.transition = "height 25s";
    }
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