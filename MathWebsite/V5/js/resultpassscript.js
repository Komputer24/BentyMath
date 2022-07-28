  var info = window.name.split("/");
  var name = info[0];
  var level = info[1];
  var amount = info[2];
  var tenOrNot = info[4];
  var operation = info[5];
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  operation = capitalize(operation);
  if(tenOrNot == 1){
      amount = 15;
  }else{
      amount = 35;
  }
  function next(){
      location.assign("file:///C:/Users/kalea/OneDrive/Desktop/MathWebsite/V5/default.htm");
  } 
  function pass(){
    document.getElementById("cheer").currentTime = 1.5;
    document.getElementById("cheer").play();
    document.getElementById("takenBy").innerHTML = "Taken By: " + name;
    document.getElementById("lvl").innerHTML = operation + " Level: " + level;
    document.getElementById("amount").innerHTML = amount;
    document.getElementById("amount2").innerHTML = amount;
  }
  document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            print();
        }
  }) 