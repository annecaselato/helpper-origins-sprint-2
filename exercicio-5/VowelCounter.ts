class VowelCounter {
    static vowels: string = 'aeiou';

    static countVowels(word: string): number {
        let wordArray: string[] = word.toLowerCase().split("");
        return wordArray.filter(letter => this.vowels.includes(letter)).length;
    }
}

//This Function get a prompted word from a form, clear the form field, and shows the answer on the screen
function formResult() {
const givenWord: string = (<HTMLInputElement>document.getElementById("fword")).value;
(<HTMLFormElement>document.getElementById("form")).reset();
document.getElementById("answer")!.innerHTML = VowelCounter.countVowels(givenWord).toString();
}