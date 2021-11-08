interface IPerson {
    id: number;
    name: string;
    bio: string;
}

class FunctionalBaseClass {
    protected static readonly peopleList: Array<IPerson> = [
        {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
        {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
        {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
        {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
    ];

    /*itemId: number;

    constructor(itemId: number) {
        this.itemId = itemId;
    }*/

    public validateId(itemId: number): boolean {
        let index: number = FunctionalBaseClass.peopleList.findIndex(obj => obj.id === itemId);
        if (index !== -1) {
            return true;
        }
        else
            return false;
    }

}

console.log(FunctionalBaseClass.validateId(3));

/*class FunctionalIdValidator extends FunctionalPeopleList {
    givenId: number;

    constructor (peopleList: Array<IPerson>, givenId: number) {
        super();
        this.givenId = givenId;
    }

    public validateId(): boolean {
        let index: number = this.peopleList.findIndex(obj => obj.id === this.givenId);
        if (index !== -1) {
            return true;
        }
        else
            return false;
    }
}*/

/*class FunctionalInfoGetter extends FunctionalIdValidator {
    
    public getBio(givenId: number): string {
        return this.peopleList.find(obj => obj.id === this.givenId)!.bio;
    }
}

class FunctionalItemDeleter extends FunctionalPeopleList {

}

class FunctionalInfoChanger extends FunctionalIdValidator {

}*/

//Implementação

// console.log(GetName(2))
// console.log(GetBio(1))
// console.log(DeleteItem(2))
// console.log(ChangeItem(2,name,bio))