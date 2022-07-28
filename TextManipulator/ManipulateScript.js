var z, inputText, changedText, sortArray, sortArrayFinal, y, x, boxText, boxTextNew, oldText, newText, checkCase, caseCounter, caseCounterArr, breaking, breaking2, arrowTxt, input, input2, encodeArr, textboxEncode, encodeArrResult, allChar, allCharCode, wrongCode;
allChar = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "<", ">", "-", "=", "_", "+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "`", "\"", "'", "|", "?", "/", "\\", ":", ";", "~"];

allCharCode = ["¨", "à", "æ", "÷", "½", "¼", "¾", "¿", "∞", "¶", "Δ", "Ω", "Ɵ", "Ơ", "Ʀ", "Ʊ", "Ƶ", "Ƹ", "Ʒ", "ƻ", "Ƽ", "Ƿ", "Ǿ", "Ȟ", "Ƞ", "Ȩ", "Ȳ", "ȴ", "ȹ", "ȸ", "ȼ", "î", "Ʉ", "Ɏ", "Ɍ", "Ƚ", "ǭ", "ą", "Ǧ", "Ǣ", "Ƕ", "œ", "ǹ", "ǻ", "ǆ", "ſ", "ƍ", "ǂ", "ǁ", "ǝ", "ȓ", "Ȕ", "…", "ʱ", "ȡ", "Ⱦ", "ɀ", "˅", "Ψ", "Ɉ", "˽", "˿", "˺", "˻", "˼", "˹", "˥", "ˣ", "ˢ", "˘", "ˀ", "ˁ", "Ξ", "ή", "ϓ", "ϕ", "Ϣ", "Ϥ", "Ϸ", "ϼ", "ϗ", "ϑ", "ϐ", "ό", "ύ", "Ѩ", "Ѫ", "Ѯ", "Ѿ", "Ҿ", "†", "ș", "‼", "―", "‡"];
//allCharCode = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩"];

encodeArrResult = [];
caseCounter = 1;
caseCounterArr = [1];
wrongCode = false;

function reverseSent(sentence) {
  var result = " ";
  var splitStr = sentence.split(" ");

  for (var i = splitStr.length - 1; i >= 0; i--) {
    result += splitStr[i] + " ";
    var words = result;
  }
  return words;
}
function changeBackward() {
  document.getElementById('result1').textContent = reverseSent(document.getElementById('check1').value);
}
function changeBottomUp(sentenceLength) {

  x = sentenceLength - 1;
  sortArray = [];
  sortArrayFinal = [];
  document.getElementById('result2').innerHTML = "";
  inputText = document.getElementById('check2').value;
  changedText = inputText.split(" ");

  for (z = 0; z < changedText.length; z++) {
    //console.log(i,x);
    if (z === x || (z === (changedText.length - (changedText.length % (sentenceLength)) + (changedText.length % (sentenceLength) - 1)))) {
      sortArray.push(changedText[z]);
      sortArrayFinal.push(sortArray.join(' '));
      x += (sentenceLength);
      sortArray = [];
    } else {
      sortArray.push(changedText[z]);
    }
  }
  sortArrayFinal.reverse();

  for (y = 0; y < sortArrayFinal.length; y++) {
    document.getElementById('result2').innerHTML += sortArrayFinal[y] + "<br>";
  }

}

function clearText(n) {
  document.getElementById('check' + n).value = "";
  document.getElementById('result' + n).innerHTML = "";
}

function copyInput(n) {
  document.getElementById("check" + n).select();
  document.execCommand("copy");
  alert('Text Copied!');
}
function copyOutput(n) {
  var text = document.getElementById("result" + n).textContent;
  document.getElementById('myInput').value = text;
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert('Text Copied!');
}

function decodeManipulate() {
  if (document.getElementById('CaseCheck').checked === true) {
    checkCase = "g";
  } else {
    checkCase = "gi";
  }
  boxText = document.getElementById('check3').value;
  for (var i = 1; i <= caseCounterArr.length; i++) {
    if (required('oldVal' + i) === false || required('newVal' + i) === false) {
      alert('Make sure you filled in all input fields');
      document.getElementById('result3').innerHTML = "";
      break;
    } else {
      boxTextNew = boxText.replace(new RegExp(document.getElementById('oldVal' + i).value, checkCase), document.getElementById('newVal' + i).value);
      document.getElementById('result3').innerHTML = boxTextNew;
      boxText = boxTextNew;
    }
  }
}
function addReplacer() {
  caseCounter++;
  breaking = document.createElement("br");
  breaking2 = document.createElement("br");
  arrowTxt = document.createElement("span");
  document.getElementById("addedRep").appendChild(breaking);
  document.getElementById("addedRep").appendChild(breaking2);

  input = document.createElement('input');
  input.style.fontSize = "30px";
  input.style.width = "130px";
  input.type = "text";
  input.placeholder = "A";
  input.id = 'oldVal' + caseCounter;
  input.setAttribute("maxlength", "8");
  document.getElementById('addedRep').appendChild(input);

  arrowTxt.innerHTML = " ==> ";
  document.getElementById('addedRep').appendChild(arrowTxt);

  input2 = document.createElement('input')
  input2.style.fontSize = "30px";
  input2.style.width = "130px";
  input2.type = "text";
  input2.placeholder = "B";
  input2.id = 'newVal' + caseCounter;
  input2.setAttribute("maxlength", "8");
  document.getElementById('addedRep').appendChild(input2);

  caseCounterArr.push(caseCounter);
}
function subtractReplacer() {
  if (caseCounterArr.length != 1) {
    caseCounter--;
    document.getElementById("addedRep").removeChild(document.getElementById("addedRep").lastElementChild);
    document.getElementById("addedRep").removeChild(document.getElementById("addedRep").lastElementChild);
    document.getElementById("addedRep").removeChild(document.getElementById("addedRep").lastElementChild);
    document.getElementById("addedRep").removeChild(document.getElementById("addedRep").lastElementChild);
    document.getElementById("addedRep").removeChild(document.getElementById("addedRep").lastElementChild);
    caseCounterArr.pop();
  }
}

function encoderPreset() {
  encodeArrResult = [];
  textboxEncode = document.getElementById("check4").value;
  encodeArr = textboxEncode.split("");
  for (var i = 0; i < encodeArr.length; i++) {
    for (var x = 0; x < allChar.length; x++) {
      if (encodeArr[i] === allChar[x]) {
        encodeArrResult.push(allCharCode[x]);
      } else if (encodeArr[i] === allCharCode[x]) {
        alert("You need to decode that!");
        wrongCode = true;
        break;
      }
    }
    if (wrongCode === true) {
      break;
    }
  }
  if (wrongCode === false) {
    document.getElementById("result4").innerHTML = encodeArrResult.join("");
  } else {
    document.getElementById("result4").innerHTML = "";
  }
  wrongCode = false;
}
function decoderPreset() {
  encodeArrResult = [];
  textboxEncode = document.getElementById("check4").value;
  encodeArr = textboxEncode.split("");
  for (var i = 0; i < encodeArr.length; i++) {
    for (var x = 0; x < allChar.length; x++) {
      if (encodeArr[i] === allCharCode[x]) {
        encodeArrResult.push(allChar[x]);
      } else if (encodeArr[i] === allChar[x]) {
        alert("You need to encode that!");
        wrongCode = true;
        break;
      }
    }
    if (wrongCode === true) {
      break;
    }
  }
  if (wrongCode === false) {
    document.getElementById("result4").innerHTML = encodeArrResult.join("");
  } else {
    document.getElementById("result4").innerHTML = "";
  }
  wrongCode = false;
}
function required(inputtx) {
  if (document.getElementById(inputtx).value.length == 0) {
    return false;
  }
  return true;
} 