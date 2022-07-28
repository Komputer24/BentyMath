  var slctedOp = false;
  var slctedLvl = false;;
  var slctOp = [false, false, false, false];
  var slctLvl = [false, false, false, false, false, false, false, false, false, false];
  var checkOp = 2;
  var boxname;
  function pressed(id){
        document.getElementById(id).style.backgroundColor = "darkgreen";
        document.getElementById(id).style.transform = "translateY(4px)";
        document.getElementById(id).style.boxShadow = "0 3px #666";
        document.getElementById(id).style.color = "white"; 
  }
  function unpressed(id){
        document.getElementById(id).style.backgroundColor = "lightgray";
        document.getElementById(id).style.transform = "translateY(0px)";
        document.getElementById(id).style.boxShadow = "0 6px #999";
        document.getElementById(id).style.color = "black";   
  }
  function opChoose(num){
        // Checks if one is selected
        slctedOp = true;
        // Checks which lvl is selected
        for(var i = 0; i < slctOp.length; i++){
            //unpressed(`op${i}`);
            slctOp[i] = false;
        }
        slctOp[num] = true;
        pressed(`op${num}`);
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
     
  function startQuiz(){
      boxname = document.getElementById("name");
      if(slctedLvl == true && !(boxname.value == "") && slctedOp == true){
        if(slctOp[0] == true){
            if(slctLvl[0] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl0.html");
            }else if(slctLvl[1] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl1.html");
            }else if(slctLvl[2] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl2.html");
            }else if(slctLvl[3] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl3.html");
            }else if(slctLvl[4] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl4.html");
            }else if(slctLvl[5] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl5.html");
            }else if(slctLvl[6] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl6.html");
            }else if(slctLvl[7] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl7.html");
            }else if(slctLvl[8] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl8.html");
            }else if(slctLvl[9] == true){
                location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/html/mathquizlvl9.html");
            }
        }
      }
      else{
         alert("Fill your Name and choose which type of problems you want!");
      }
  }
 document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        startQuiz();
    }
 });
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
 function hoverO(id,num){
    if(slctOp[num] == false){
     document.getElementById(id).style.backgroundColor = 'green';
     document.getElementById(id).style.color = 'white'; 
    }
 }
 function outO(id,num){
    if(slctOp[num] == false){
     document.getElementById(id).style.backgroundColor = 'lightgray';
     document.getElementById(id).style.color = 'black';  
    }
 }