//This class receives a word and returns its number of vowels
class VowelCounter {
    private static readonly vowels: string = 'aeiou';

    static countVowels(word: string): number {
        let wordArray: string[] = word.toLowerCase().split("");
        let wordVowels: string[] = wordArray.filter(letter => this.vowels.includes(letter));
        return wordVowels.length;
    }
}

//This Function gets a input word from a form, clears the form field, and shows the answer on the screen
function formResult() {
    const givenWord: string = (<HTMLInputElement>document.querySelector("#input-word")).value;
    const answer: number = VowelCounter.countVowels(givenWord);
    (<HTMLFormElement>document.querySelector("#form")).reset();
    document.querySelector("#answer")!.innerHTML = answer.toString();
}