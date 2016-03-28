var wordText = "";
var pTags = document.getElementsByTagName("p");
var arr = [].slice.call(pTags);
arr.forEach(function(item, idx, arr){
  wordText += item.innerText;
  console.log(wordText);
  return wordText;
})
function countWords () {
var noSpaces = wordText.split(" ").length/230;
  console.log(noSpaces);
  return noSpaces;
}

countWords();

var math =
var wPm = document.getElementsByClassName("reading-time");
console.log(wPm[0].innerText = "WPM = 5.326");
