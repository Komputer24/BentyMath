  var level;
  var name;
  var resultLvl;  
  var slctedLvl = false;
  var slctLvl = [false, false, false, false, false, false];

  var info = window.name.split("/");
  var name = info[0];
  var level = info[1];
  var amount = info[2];
  var correct = info[3];
  var tenOrNot = info[4];
  var operation = info[5];

  function pressed(id){
        document.getElementById(id).style.transform = "translateY(4px)";
        document.getElementById(id).style.boxShadow = "0 3px #666";
        document.getElementById(id).style.color = "white"; 
  }
  function unpressed(id){
  	if(id == "lvl0"){
          document.getElementById(id).style.backgroundColor = "darkgreen";
  	}else if(id == "lvl1"){
          document.getElementById(id).style.backgroundColor = "#bbbb22";
  	}else if(id == "lvl2"){
          document.getElementById(id).style.backgroundColor = "darkred";
  	}else if(id == "lvl3"){
          document.getElementById(id).style.backgroundColor = "darkblue";
  	}else if(id == "lvl4"){
          document.getElementById(id).style.backgroundColor = "indigo";
  	}else if(id == "lvl5"){
          document.getElementById(id).style.backgroundColor = "#654321";
  	}
        document.getElementById(id).style.transform = "translateY(0px)";
        document.getElementById(id).style.boxShadow = "0 6px #999";
        document.getElementById(id).style.color = "black";   
  }

  function lvlChoose(num){
        // Checks if one is selected
        slctedLvl = true;
        // Checks which lvl is selected
        for(var i = 0; i < slctLvl.length; i++){
            unpressed(`lvl${i}`);
            slctLvl[i] = false;
        }
        slctLvl[num] = true;
        pressed(`lvl${num}`);
  }
  function randomStart(){
      if(slctedLvl == true){
            if(slctLvl[0] == true){
                level = "0-2";
                window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                window.location.href = "../html/mathquizlvl.html";
            }else if(slctLvl[1] == true){
                level = "3-5";
                window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                window.location.href = "../html/mathquizlvl.html";
            }else if(slctLvl[2] == true){
                level = "6-8";
                window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                window.location.href = "../html/mathquizlvl.html";
            }else if(slctLvl[3] == true){
                level = "9-10";
                window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                window.location.href = "../html/mathquizlvl.html";
            }
            else if(slctLvl[4] == true){
                level = "doubles";
                window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                window.location.href = "../html/mathquizlvl.html";
            }else if(slctLvl[5] == true){
                level = "tens";
                window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                window.location.href = "../html/mathquizlvl.html";
            }
        }
      else{
         alert("Select a range");
      }
  }
 document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        randomStart();
    }
 });
/*
 function hover(id,num){
    if(slctLvl[num] == false){
     document.getElementById(id).style.backgroundColor = 'green';
     document.getElementById(id).style.color = 'white'; 
    }
 }
 function out(id,num){
    if(slctLvl[num] == false){
     document.getElementById(id).style.backgroundColor = 'lightgray';
     document.getElementById(id).style.color = 'black';  
    }
 }
 */
function hover(id,num){
    if(slctLvl[num] == false){
    	if(id == "lvl0"){
          document.getElementById(id).style.backgroundColor = "green";
          document.getElementById(id).style.color = 'black'; 
  	}else if(id == "lvl1"){
          document.getElementById(id).style.backgroundColor = "yellow";
       	  document.getElementById(id).style.color = 'black'; 
  	}else if(id == "lvl2"){
          document.getElementById(id).style.backgroundColor = "red";
          document.getElementById(id).style.color = 'black'; 
  	}else if(id == "lvl3"){
          document.getElementById(id).style.backgroundColor = "blue";
          document.getElementById(id).style.color = 'black'; 
  	}else if(id == "lvl4"){
          document.getElementById(id).style.backgroundColor = "purple";
          document.getElementById(id).style.color = 'black'; 
  	}else if(id == "lvl5"){
          document.getElementById(id).style.backgroundColor = "brown";
          document.getElementById(id).style.color = 'black'; 
  	}
    }
 }
 function out(id,num){
    if(slctLvl[num] == false){
    	if(id == "lvl0"){
          document.getElementById(id).style.backgroundColor = "darkgreen";
          document.getElementById(id).style.color = 'black'; 
        }else if(id == "lvl1"){
              document.getElementById(id).style.backgroundColor = "#bbbb22";
              document.getElementById(id).style.color = 'black'; 
        }else if(id == "lvl2"){
              document.getElementById(id).style.backgroundColor = "darkred";
              document.getElementById(id).style.color = 'black'; 
        }else if(id == "lvl3"){
              document.getElementById(id).style.backgroundColor = "darkblue";
              document.getElementById(id).style.color = 'black'; 
        }else if(id == "lvl4"){
              document.getElementById(id).style.backgroundColor = "indigo";
              document.getElementById(id).style.color = 'black'; 
        }else if(id == "lvl5"){
              document.getElementById(id).style.backgroundColor = "#654321";
              document.getElementById(id).style.color = 'black'; 
        }
        
    }
 }