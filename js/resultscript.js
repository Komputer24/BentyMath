  var info = window.name.split("/");
  var name = info[0];
  var lvl = info[1];
  var amount = info[2];
  var correct = info[3];
  var tenOrNot = info[4];
  var percent;
  if(tenOrNot == 1){
      amount = 15;
      percent = Math.floor((100/15) * correct);
  }else{
      amount = 35;
      percent = Math.floor((100/35) * correct);
  }
  function retry(){
      location.assign("https://beteselassie.com/BentyMath/index.html");
  }
  function fail(){
    document.getElementById("sigh").currentTime = 0;
    document.getElementById("sigh").play();
    document.getElementById("lvl").innerHTML = "Result: ";
    document.getElementById("amount").innerHTML = amount;
    document.getElementById("correct").innerHTML = correct;
    document.getElementById("score").innerHTML = percent + "%";
  }
  document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            retry();
        }
  }) 