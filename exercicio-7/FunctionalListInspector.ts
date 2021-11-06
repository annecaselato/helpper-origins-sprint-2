//This class receives a list, check if it's numeric, and returns its max, min, and avarage values
class FunctionalList {
    //Get list
    list : any[];

    constructor(list: any[]) {
        this.list = list;
    }

    //Check if it's numeric and convert numeric strings to numbers
    private numericList(): number[] {
        return this.list.map(Number).filter(Boolean);
    }

    //Get values
    public inspectList(): number[] {
        let numericList: number[] = this.numericList();
        let maxValue: number = Math.max(...numericList);
        let minValue: number = Math.min(...numericList);
        let sum: number = numericList.reduce((a, b) => a + b, 0);
        let avgValue: number = sum/numericList.length;
    
        return [maxValue, minValue, avgValue];
    }
}

let list = new FunctionalList([1,2,'3','cat']);
console.log(list.inspectList());