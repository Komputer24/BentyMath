  var info = window.name.split("/");
  var name = info[0];
  var lvl = info[1];
  var amount = info[2];
  var tenOrNot = info[4];
  if(tenOrNot == 1){
      amount = 15;
  }else{
      amount = 35;
  }
  function retry(){
      location.assign("https://bentymathupdated.klebcode.repl.co/index.html");
  }   
  function fail(){
    document.getElementById("sigh").currentTime = 0;
    document.getElementById("sigh").play();
    document.getElementById("lvl").innerHTML = "Result: ";
    document.getElementById("amount").innerHTML = amount;
    document.getElementById("correct").innerHTML = correct;
  }
  document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            retry();
        }
  })