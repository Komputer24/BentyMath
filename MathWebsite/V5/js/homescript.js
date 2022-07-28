  var slctedOp = false;
  var slctedLvl = false;;
  var slctOp = [false, false, false, false];
  /* here */
  var slctLvl = [false, false, false, false, false, false, false, false, false, false, false, false];
  var checkOp = 2;
  var boxname;
  var username;
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
      username = document.getElementById("name").value;
      if(username == ""){
        alert("Fill your name!")
      }else{
        // Checks if one is selected
        slctedOp = true;
        // Checks which lvl is selected
        for(var i = 0; i < slctOp.length; i++){
            unpressed(`op${i}`);
            slctOp[i] = false;
        }
        slctOp[num] = true;
        pressed(`op${num}`);
      }
  }
  function lvlChoose(num){
      username = document.getElementById("name").value;
      if(username == ""){
        alert("Fill your name!")
      }else{
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
  }
  var level;
  var name;
  var amount = 15;
  var correct = 0;
  var tenOrNot;
  var operation;
  var resultLvl;
  function startQuiz(){
      boxname = document.getElementById("name");
      name = boxname.value;
      if(slctedLvl == true && !(boxname.value == "") && slctedOp == true){
        if(slctOp[0] == true){
            for(var n = 0; n <= 10; n++){
                if(slctLvl[n] == true){
                    level = n;
                    operation = "addition";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
                }else if(slctLvl[11] == true){
                    level = "random";
                    operation = "addition";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/randomIndex.html";
                }
            }
            /*
            if(slctLvl[0] == true){
                level = 0;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[1] == true){
                level = 1;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[2] == true){
                level = 2;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[3] == true){
                level = 3;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[4] == true){
                level = 4;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[5] == true){
                level = 5;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[6] == true){
                level = 6;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[7] == true){
                level = 7;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[8] == true){
                level = 8;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[9] == true){
                level = 9;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[10] == true){
                level = 10;
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
            }else if(slctLvl[11] == true){
                level = "random";
                window.name = name + "/" + level + "/" + amount + "/" + correct;
                window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/randomIndex.html";
            }
            */
        }
        else if(slctOp[1] == true){
            for(var n = 0; n <= 10; n++){
                if(slctLvl[n] == true){
                    level = n;
                    operation = "subtraction";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
                }else if(slctLvl[11] == true){
                    level = "random";
                    operation = "subtraction";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/randomIndex.html";
                }
            }
          }
          else if(slctOp[2] == true){
            for(var n = 0; n <= 10; n++){
                if(slctLvl[n] == true){
                    level = n;
                    operation = "division";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
                }else if(slctLvl[11] == true){
                    level = "random";
                    operation = "division";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/randomIndex.html";
                }
            }
          }
          else if(slctOp[3] == true){
            for(var n = 0; n <= 10; n++){
                if(slctLvl[n] == true){
                    level = n;
                    operation = "multiplication";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/mathquizlvl.html";
                }else if(slctLvl[11] == true){
                    level = "random";
                    operation = "multiplication";
                    window.name = name + "/" + level + "/" + amount + "/" + correct + "/" + tenOrNot + "/" + operation;
                    window.location.href = "file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/html/randomIndex.html";
                }
            }
          }
      }
      else{
         alert("Fill in your Name and choose which type of problems you want");
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