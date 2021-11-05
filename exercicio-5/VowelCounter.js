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
var promptedWord = document.getElementById("fword").value;
document.getElementById("answer").innerHTML = VowelCounter.countVowels(promptedWord).toString();
//console.log(VowelCounter.countVowels('tEste'));
