interface IPerson {
    id: number;
    name: string;
    bio: string;
}

enum EnumImperativeInfoOption {
    name = "name",
    bio = "bio"
}

class ImperativePeopleList {
    protected static readonly peopleList: Array<IPerson> = [
        {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
        {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
        {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
        {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
    ];

    //This method is used by the subclasses to access the list index with a given Id
    protected static getIndex(itemId: number): number {
        for (let index = 0; index < this.peopleList.length; index++) {
            if (this.peopleList[index].id === itemId)
                return index;
        }
        return -1;
    }
}

class ImperativeInfoGet extends ImperativePeopleList {
    public static getInfo(itemId: number, option: EnumImperativeInfoOption ): string {
        if (this.getIndex(itemId) !== -1)
            return this.peopleList[this.getIndex(itemId)][option];           
        else
            return "Invalid ID";
    }
}

class ImperativeItemDelete extends ImperativePeopleList {
    public static deleteItem(itemId: number): Array<IPerson> {
        if (this.getIndex(itemId) !== -1)
            this.peopleList.splice(this.getIndex(itemId), 1);
        return this.peopleList;
    }
}

class ImperativeInfoUpdate extends ImperativePeopleList {
    public static changeInfo(itemId: number, option: EnumImperativeInfoOption, newInfo: string): Array<IPerson> {
        if (this.getIndex(itemId) !== -1) {
            this.peopleList[this.getIndex(itemId)][option] = newInfo;
        }
        return this.peopleList;
    }
}