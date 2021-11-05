class VowelCounter {
    static vowels: string = 'aeiou';
    

    static countVowels(word: string): number {
        let wordArray: string[] = word.toLowerCase().split("");
        return wordArray.filter(letter => this.vowels.includes(letter)).length;
    }
}

console.log(VowelCounter.countVowels('Caselato'));