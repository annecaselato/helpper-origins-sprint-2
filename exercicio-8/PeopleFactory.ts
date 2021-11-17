/**
 * Person
 * 
 * This class represents a person with an id, a name and a biography
 */
class Person {
    id: number;
    name: string;
    bio: string;
    
    /**
     * class constructor
     * 
     * @param id - person's id
     * @param name - person's name
     * @param bio - person's biography
     */
    constructor(id: number, name: string, bio: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    /**
    * getInformation
    * 
    * This method returns the person's information
    * 
    * @returns an array of strings with the person's name and bio
    */
    public getInformation(): Array<String> {
        return [this.name, this.bio];
    }
}

/**
 * AdaLovelace
 * 
 * This class represents the person Ada Lovelace
 */
class AdaLovelace extends Person {
    /**
    * isAdaCreator
    * 
    * This method answer who is the creator of the programming language Ada
    * 
    * @returns an string with the answer
    */
    public isAdaCreator(): string {
        return this.name + " is the creator of the Ada programming language.";
    }
}

/**
 * AlanTuring
 * 
 * This class represents the person Alan Turing
 */
class AlanTuring extends Person {

}

/**
 * NikolaTesla
 * 
 * This class represents the person Nikola Tesla
 */
class NikolaTesla extends Person {

}

/**
 * NicolauCopernico
 * 
 * This class represents the person Nicolau Copérnico
 */
class NicolauCopernico extends Person {

}

/**
 * PersonFactory
 * 
 * This class is a Factory that produces people
 */
class PersonFactory {      
    /**
     * getPerson
     * 
     * this method produces a different person based on input or an error if an invalid id is given
     * 
     * @param input - an array of type any that should receive the person's information
     * @returns a specific person based on the given id
     */ 
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

//Problem a) example
let person: Person = PersonFactory.getPerson([3, "Nikola Tesla", "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."]);

console.log(person.getInformation());

//Problem b) example
let person2 = new AdaLovelace(1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina");

console.log(person2.isAdaCreator());