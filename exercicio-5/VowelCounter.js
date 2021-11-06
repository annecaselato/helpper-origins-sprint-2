"use strict";
var VowelCounter = /** @class */ (function () {
    function VowelCounter() {
    }
    VowelCounter.countVowels = function (word) {
        var _this = this;
        var wordArray = word.toLowerCase().split("");
        var wordVowels = wordArray.filter(function (letter) { return _this.vowels.includes(letter); });
        return wordVowels.length;
    };
    VowelCounter.vowels = 'aeiou';
    return VowelCounter;
}());
//This Function get a prompted word from a form, clear the form field, and shows the answer on the screen
function formResult() {
    var givenWord = document.querySelector("#input-word").value;
    var answer = VowelCounter.countVowels(givenWord);
    document.querySelector("#form").reset();
    document.querySelector("#answer").innerHTML = answer.toString();
}
