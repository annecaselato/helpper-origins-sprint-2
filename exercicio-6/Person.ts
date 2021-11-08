interface IPerson {
    id: number;
    name: string;
    bio: string;
}

class FunctionalPeopleList {
    peopleList: Array<IPerson>;
    givenId: number;

    constructor(list: Array<IPerson>) {
        this.peopleList = peopleList;
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

    getBio(): string {
        return this.peopleList.find(obj => obj.id === this.givenId)!.bio;
    }
}

let peopleList = new PeopleList ([
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]);

//Função que retorna a bio do id passado
function getBioByFunctional(list: Array<Person>, givenId: number): string {
    let bio: string = '';
    let index: number = list.findIndex(obj => obj.id === givenId);
    if (index !== -1) {
        bio = list.find(obj => obj.id === givenId)!.bio;
    }
    return bio;
}

//Função que retorna o name do id passado
function getNameByFunctional(list: Array<Person>, givenId: number): string {
    let name: string = '';
    let index: number = list.findIndex(obj => obj.id === givenId);
    if (index !== -1) {
        name = list.find(obj => obj.id === givenId)!.name;
    }
    return name;
}

//Função que apaga o item do id passado
function deleteItemByFunctional(list: Array<Person>, givenId: number): Array<Person> {
    let outputList: Array<Person> = list.filter(obj => obj.id !== givenId);
    return outputList;
}

//Função que permite alterar o name ou a bio do id passado
function updateItemByFunctional(list: Array<Person>, givenId: number, newName?: string, newBio?: string): Array<Person> {
    let index: number = list.findIndex(obj => obj.id === givenId);
    let outputList: Array<Person> = list;
    if (index !== -1) {
        if (newName) {
            outputList[index].name = newName;
        }
        if (newBio) {
            outputList[index].bio = newBio;
        }
    }
    return outputList;
}