function retry(){
      location.assign("file:///C:/Users/Kaleab/Desktop/MathWebsite/V4/index.html");
  }   
  function fail(){
    document.getElementById("sigh").currentTime = 0;
    document.getElementById("sigh").play();
  }
  document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            retry();
        }
  });