"use strict";
var VowelCounter = /** @class */ (function () {
    function VowelCounter() {
    }
    VowelCounter.countVowels = function (word) {
        var _this = this;
        var wordArray = word.toLowerCase().split("");
        return wordArray.filter(function (letter) { return _this.vowels.includes(letter); }).length;
    };
    VowelCounter.vowels = 'aeiou';
    return VowelCounter;
}());
//This Function get a prompted word from a form, clear the form field, and shows the answer on the screen
function formResult() {
    var givenWord = document.getElementById("fword").value;
    document.getElementById("form").reset();
    document.getElementById("answer").innerHTML = VowelCounter.countVowels(givenWord).toString();
}
