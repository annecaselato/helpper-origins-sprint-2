interface IPerson {
    id: number;
    name: string;
    bio: string;
}

enum EnumFunctionalInfoOption {
    name = "name",
    bio = "bio"
}

//This class serve as a base class with the problem list and a method used by the subclasses
class FunctionalPeopleList {
    protected static readonly peopleList: Array<IPerson> = [
        {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
        {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
        {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
        {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
    ];

    //This method is used by the subclasses to access the list index with a given Id
    protected static getIndex(itemId: number): number {
        return this.peopleList.findIndex(obj => obj.id === itemId);
    }
}

//This subclass returns the name or bio of an item given its id
class FunctionalInfoGet extends FunctionalPeopleList {
    public static getInfo(itemId: number, option: EnumFunctionalInfoOption ): string {
        let index: number = this.getIndex(itemId);
        if (index !== -1)
            return this.peopleList[index][option];           
        else
            return "Invalid ID";
    }
}

//This subclass deletes an item given its id
class FunctionalItemDelete extends FunctionalPeopleList {
    public static deleteItem(itemId: number): Array<IPerson> {
        return this.peopleList.filter(obj => obj.id !== itemId);
    }
}

//This subclass changes the name or bio of an item given its id and new information
class FunctionalInfoUpdate extends FunctionalPeopleList {
    public static changeInfo(itemId: number, option: EnumFunctionalInfoOption, newInfo: string): Array<IPerson> {
        let outputList: Array<IPerson> = this.peopleList;
        let index: number = this.getIndex(itemId);
        if (index !== -1) {
            outputList[index][option] = newInfo;
        }
        return outputList;
    }
}

//Use examples
console.log(FunctionalInfoGet.getInfo(2,EnumFunctionalInfoOption.name));
console.log(FunctionalItemDelete.deleteItem(3));
console.log(FunctionalInfoUpdate.changeInfo(1,EnumFunctionalInfoOption.bio,"New biography"));