var score = 0;
document.getElementById("message").style.display = "none";
document.getElementById("number_correct").style.display = "none";
//////////////////////////////////////////////////////////
function firstQCheck(){
    if(document.getElementById('correct').checked === true){
        document.getElementById("rightsf").pause();
        document.getElementById("rightsf").currentTime = 0;
        document.getElementById("correctgif").style.display = "block";
        document.getElementById("ankankgif").style.display = "none";
        document.getElementById("rightsf").play();
        score++;
        document.getElementById("correct").onclick=null;
        if(document.getElementById('correct1').checked === true && document.getElementById('correct').checked === true){
            window.scrollTo({ top: 480, behavior: 'smooth' });
        }
    }else{
        document.getElementById("wrongsf").pause();
        document.getElementById("wrongsf").currentTime = 0;
        document.getElementById("ankankgif").style.display = "block";
        document.getElementById("correctgif").style.display = "none";
        document.getElementById("wrongsf").play();
        
        document.getElementById("correct").onclick= function(){
            document.getElementById("rightsf").pause();
            document.getElementById("rightsf").currentTime = 0;
            document.getElementById("correctgif").style.display = "block";
            document.getElementById("ankankgif").style.display = "none";
            document.getElementById("rightsf").play();
            if(score === 0){
                score++;
            }else{
                score;
            }
            document.getElementById("correct").onclick=null;
            if(document.getElementById('correct1').checked === true && document.getElementById('correct').checked === true){
            window.scrollTo({ top: 480, behavior: 'smooth' });
        }
        };
    }
}function secondQCheck(){
    if(document.getElementById('correct1').checked === true){
        document.getElementById("rightsf").pause();
        document.getElementById("rightsf").currentTime = 0;
        document.getElementById("correctgif1").style.display = "block";
        document.getElementById("ankankgif1").style.display = "none";
        document.getElementById("rightsf").play();
        score++;
        document.getElementById("correct1").onclick=null;
        if(document.getElementById('correct').checked === true && document.getElementById('correct1').checked === true){
            window.scrollTo({ top: 480, behavior: 'smooth' });
        }
    }else{
        document.getElementById("wrongsf").pause();
        document.getElementById("wrongsf").currentTime = 0;
        document.getElementById("ankankgif1").style.display = "block";
        document.getElementById("correctgif1").style.display = "none";
        document.getElementById("wrongsf").play();
        document.getElementById("correct1").onclick= function(){
            document.getElementById("rightsf").pause();
            document.getElementById("rightsf").currentTime = 0;
            document.getElementById("correctgif1").style.display = "block";
            document.getElementById("ankankgif1").style.display = "none";
            document.getElementById("rightsf").play();
            if(score === 1){
                score++;
            }else{
                score;
            }
            document.getElementById("correct").onclick=null;
            if(document.getElementById('correct').checked === true && document.getElementById('correct1').checked === true){
            window.scrollTo({ top: 480, behavior: 'smooth' });
        }
        };
    }
}function thirdQCheck(){
    if(document.getElementById('correct2').checked === true){
        document.getElementById("rightsf").pause();
        document.getElementById("rightsf").currentTime = 0;
        document.getElementById("correctgif2").style.display = "block";
        document.getElementById("ankankgif2").style.display = "none";
        document.getElementById("rightsf").play();
        score++;
        document.getElementById("correct2").onclick=null;
        if(document.getElementById('correct2').checked === true && document.getElementById('correct3').checked === true){
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        }
    }else{
        document.getElementById("wrongsf").pause();
        document.getElementById("wrongsf").currentTime = 0;
        document.getElementById("ankankgif2").style.display = "block";
        document.getElementById("correctgif2").style.display = "none";
        document.getElementById("wrongsf").play();
        document.getElementById("correct2").onclick= function(){
            document.getElementById("rightsf").pause();
            document.getElementById("rightsf").currentTime = 0;
            document.getElementById("correctgif2").style.display = "block";
            document.getElementById("ankankgif2").style.display = "none";
            document.getElementById("rightsf").play();
            if(score === 2){
                score++;
            }else{
                score;
            }
            document.getElementById("correct").onclick=null;
            if(document.getElementById('correct2').checked === true && document.getElementById('correct3').checked === true){
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        }
        };
    }
}function fourthQCheck(){
    if(document.getElementById('correct3').checked === true){
        document.getElementById("rightsf").pause();
        document.getElementById("rightsf").currentTime = 0;
        document.getElementById("correctgif3").style.display = "block";
        document.getElementById("ankankgif3").style.display = "none";
        document.getElementById("rightsf").play();
        score++;
        document.getElementById("correct3").onclick=null;
        if(document.getElementById('correct2').checked === true && document.getElementById('correct3').checked === true){
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        }    
    }else{
        document.getElementById("wrongsf").pause();
        document.getElementById("wrongsf").currentTime = 0;
        document.getElementById("ankankgif3").style.display = "block";
        document.getElementById("correctgif3").style.display = "none";
        document.getElementById("wrongsf").play();
        document.getElementById("correct3").onclick= function(){
            document.getElementById("rightsf").pause();
            document.getElementById("rightsf").currentTime = 0;
            document.getElementById("correctgif3").style.display = "block";
            document.getElementById("ankankgif3").style.display = "none";
            document.getElementById("rightsf").play();
            if(score === 3){
                score++;
            }else{
                score;
            }
            document.getElementById("correct").onclick=null;
            if(document.getElementById('correct2').checked === true && document.getElementById('correct3').checked === true){
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        }
        };
    }
}function fifthQCheck(){
    if(document.getElementById('correct4').checked === true){
        document.getElementById("rightsf").pause();
        document.getElementById("rightsf").currentTime = 0;
        document.getElementById("correctgif4").style.display = "block";
        document.getElementById("ankankgif4").style.display = "none";
        document.getElementById("rightsf").play();
        score++;
        document.getElementById("correct4").onclick=null;
    }else{
        document.getElementById("wrongsf").pause();
        document.getElementById("wrongsf").currentTime = 0;
        document.getElementById("ankankgif4").style.display = "block";
        document.getElementById("correctgif4").style.display = "none";
        document.getElementById("wrongsf").play();
        document.getElementById("correct4").onclick= function(){
            document.getElementById("rightsf").pause();
            document.getElementById("rightsf").currentTime = 0;
            document.getElementById("correctgif4").style.display = "block";
            document.getElementById("ankankgif4").style.display = "none";
            document.getElementById("rightsf").play();
            if(score === 4){
                score++;
            }else{
                score;
            }
            document.getElementById("correct").onclick=null;
        };
    }
}
///////////////////////////////////////////////////////////////////////


        var a1 ='<input type="radio" id="wronga" name="question1" value="Kaleab" onclick="firstQCheck()"> Kaleab<br>';
        var a2 = '<input type="radio" id="wrongc" name="question1" value="Ababa" onclick="firstQCheck()"> Ababa<br>';
        var a3 = '<input type="radio" id="wrongb" name="question1" value="Sewit" onclick="firstQCheck()"> Sewit<br>';
        var a4 = '<input type="radio" id="correct" name="question1" value="Abuka" onclick="firstQCheck()"> Abuka<br>';
        var a5 = '<input type="radio" id="wrongd" name="question1" value="Tatye" onclick="firstQCheck()"> Tatye<br>';

        var array = [a1, a2, a3, a4, a5];

        function shuffle(arra1) {
            var ctr = arra1.length, temp, index;

        // While there are elements in the array
            while (ctr > 0) {
        // Pick a random index
                index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
                ctr--;
        // And swap the last element with it
                temp = arra1[ctr];
                arra1[ctr] = arra1[index];
                arra1[index] = temp;
            }
            return arra1.join("");
        }
        document.getElementById("mixup").innerHTML = shuffle(array);
//document.getElementById("mixup").innerHTML = "hi";



///////////////////////////////////////////////////////////////////////
function check(){
    window.scrollTo({ top: 1000, behavior: 'smooth' });
    document.getElementById("number_correct").innerHTML = "You have a score of " + score + "/5";
    if(score === 0 || score === 1){
        document.getElementById("message").innerHTML = "You need to study more!";
        document.getElementById("aww").play();
    }else if(score === 2 || score === 3){
        document.getElementById("message").innerHTML = "You'll get it next time!";
        document.getElementById("meh").play();
    }else if(score === 4){
        document.getElementById("message").innerHTML = "Well Done!";
        document.getElementById("meh").play();
    }else{
        document.getElementById("message").innerHTML = "A Perfect Score!";
        document.getElementById("yay").play();
    }
    document.getElementById("retry").style.display = "block";
    document.getElementById("message").style.display = "block";
    document.getElementById("number_correct").style.display = "block";
    document.getElementById("button").style.marginLeft = "10px";
}
////////////////////////////////////////////////////////////////////
function retry(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(function(){ location.reload(); },500 );
}
