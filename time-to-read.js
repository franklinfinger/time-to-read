// var readTime function() {
//   "use strict";
//   var wordsPm = {
//     wpm: 230
// };
//
// function setWpm(wpm) {
//   wordsPm.wpm = wpm;
// }
//
// function getWpm() {
//   return wordsPm.wpm;
//

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


var wPm= document.getElementsByClassName("reading-time");
console.log(wPm[0].innerText = "WPM = 5.326");


// var bodyContent = document.getElementy('content');
// var bodyUl = document.createElement('ul');
// bodyContent.appendChild(bodyUl);
//
// redditObj.data.children.forEach(function(item,idx,arr) {
//   var appendToPage = document.createElement('li');
//   var scoreSpan = document.createElement('span');
//   scoreSpan.innerText = item.data.score
//   appendToPage.innerText = item.data.title;
//   appendToPage.appendChild(scoreSpan);
//   bodyUl.appendChild(appendToPage);
// });
