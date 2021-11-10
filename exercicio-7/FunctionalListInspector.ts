/**
 * FunctionalList
 * 
 * This class represents a list and contain methods to inspect this list using the Functional programming paradigm
 */
class FunctionalList {
    private list : any[];

    /**
     * class constructor
     * 
     * @param list - is an array of type any
     */
    constructor(list: any[]) {
        this.list = list;
    }

    /**
    * numericList
    * 
    * This method convert numeric strings to numbers and remove non-numeric values
    * 
    * @returns an numeric list
    */
    private numericList(): number[] {
        return this.list.map(Number).filter(Boolean);
    }

    /**
    * inspectList
    * 
    * This method finds the max, min and avarage values of the numeric list
    * 
    * @returns an array with the max, min and avarage numeric values
    */
    public inspectList(): number[] {
        let numericList: number[] = this.numericList();
        let maxValue: number = Math.max(...numericList);
        let minValue: number = Math.min(...numericList);
        let sum: number = numericList.reduce((a, b) => a + b, 0);
        let avgValue: number = sum/numericList.length;
    
        return [maxValue, minValue, avgValue];
    }
}

//Usage example
let functionalExample = new FunctionalList([1,2,"cat","3"]);
console.log(functionalExample.inspectList());