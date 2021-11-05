class VowelCounter {
    static vowels: string = 'aeiou';
    

    static countVowels(word: string): number {
        let wordArray: string[] = word.toLowerCase().split("");
        return wordArray.filter(letter => this.vowels.includes(letter)).length;
    }
}

const promptedWord: string = (<HTMLInputElement>document.getElementById("fword")).value;
document.getElementById("answer")!.innerHTML = VowelCounter.countVowels(promptedWord).toString();
//console.log(VowelCounter.countVowels('tEste'));