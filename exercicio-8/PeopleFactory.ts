abstract class Person {
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
    id: number = 1;
    name: string = "Ada Lovelace";
    bio: string = "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina";
    isAdaCreator: boolean = true;

    constructor(id: number, name: string, bio: string, isAdaCreator: boolean) {
        super(id,name,bio);
        this.isAdaCreator = isAdaCreator;
    }
}

class AlanTuring extends Person {
    id: number = 2;
    name: string = "Alan Turing";
    bio: string = "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia";
}

class NikolaTesla extends Person {
    id: number = 3;
    name: string = "Nikola Tesla";
    bio: string = "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.";
}

class NicolauCopernico extends Person {
    id: number = 4;
    name: string = "Nicolau Copérnico";
    bio: string = "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.";
}

class PersonFactory {       
    public static getPerson(input: Array<any>): Person {
        //if( person == null ) return null;
            return new AdaLovelace(input[1],input[2],input[3], true);
    }   
}

let person: Person = PersonFactory.getPerson([1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"]);
       console.log( person.getInformation());
