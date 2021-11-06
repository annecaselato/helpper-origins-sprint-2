class VowelCounter {
    static vowels: string = 'aeiou';

    static countVowels(word: string): number {
        let wordArray: string[] = word.toLowerCase().split("");
        let wordVowels: string[]  = wordArray.filter(letter => this.vowels.includes(letter));
        return wordVowels.length;
    }
}

//This Function get a input word from a form, clear the form field, and shows the answer on the screen
function formResult() {
    const givenWord: string = (<HTMLInputElement>document.querySelector("#input-word")).value;
    const answer: number = VowelCounter.countVowels(givenWord);
    (<HTMLFormElement>document.querySelector("#form")).reset();
    document.querySelector("#answer")!.innerHTML = answer.toString();
}