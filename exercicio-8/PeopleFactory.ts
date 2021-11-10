class Person {
    id: number;
    name: string;
    bio: string;
    
    constructor(id: number, name: string, bio: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    public getInformation(): Array<String> {
        return [this.name, this.bio];
    }
}

class AdaLovelace extends Person {
    public isAdaCreator(): string {
        return "This person is the creator of the Ada programming language";
    }
}

class AlanTuring extends Person {

}

class NikolaTesla extends Person {

}

class NicolauCopernico extends Person {

}

class PersonFactory {       
    public static getPerson(input: Array<any>): Person {
        switch(input[0]) {
            case 1:
                return new AdaLovelace(input[0],input[1],input[2]);
            case 2:
                return new AlanTuring(input[0],input[1],input[2]);
            case 3:
                return new NikolaTesla(input[0],input[1],input[2]);
            case 4:
                return new NicolauCopernico(input[0],input[1],input[2]);
            default:
                throw new Error('Invalid ID');
        }
    }
}


//Exemplo de uso
let person: Person = PersonFactory.getPerson([1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"]);

console.log(person.getInformation());
console.log(person.isAdaCreator());