interface IPerson {
    id: number;
    name: string;
    bio: string;
}

class FunctionalPeopleList {
    protected static readonly peopleList: Array<IPerson> = [
        {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
        {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
        {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
        {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
    ];

    protected static getIndex(itemId: number): number {
        return this.peopleList.findIndex(obj => obj.id === itemId);
    }
}

class FunctionalInfoGet extends FunctionalPeopleList {
    public static getInfo<T, K extends keyof T>(itemId: number, obj: T, key: K ): string {
        if (this.getIndex(itemId) !== -1)
            return this.peopleList[this.getIndex(itemId)][key];           
        else
            return "Invalid ID";
    }
}

class FunctionalItemDelete extends FunctionalPeopleList {
    public static deleteItem(itemId: number): Array<IPerson> {
        return this.peopleList.filter(obj => obj.id !== itemId);
    }
}

class FunctionalInfoUpdate extends FunctionalPeopleList {
    public static changeInfo(itemId: number, newName?: string, newBio?: string): Array<IPerson> {
        let outputList: Array<IPerson> = this.peopleList;
        if (this.getIndex(itemId) !== -1) {
            if (newName) {
                outputList[this.getIndex(itemId)].name = newName;
            }
            if (newBio) {
                outputList[this.getIndex(itemId)].bio = newBio;
            }
        }
        return outputList;
    }
}

//Implementação

//console.log(FunctionalInfoGet.getInfo(1, 'bio'))
//console.log(FunctionalItemDelete.deleteItem(1))
//console.log(FunctionalInfoUpdate.changeInfo(1,'bio','new biography'))