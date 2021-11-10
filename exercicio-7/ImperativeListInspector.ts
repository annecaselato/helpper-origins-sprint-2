/**
 * ImperativeList
 * 
 * This class represents a list and contain methods to inspect this list using the Imperative programming paradigm
 */
class ImperativeList {
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
        for (let index = 0; index < this.list.length; index++) {
            this.list[index] = +this.list[index];
            if (isNaN(this.list[index])) {
                this.list.splice(index, 1);
                index--;
            }
        }
        return this.list;
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
        let maxValue: number = numericList[0];
        let minValue: number = numericList[0];
        let sum: number = 0;
    
        //Finds the max and min values, and sum all values
        for (let index = 0; index < numericList.length; index++) {
            sum += numericList[index];
            if (numericList[index] < minValue) {
                minValue = numericList[index];
            }
            if (numericList[index] > maxValue) {
                maxValue = numericList[index];
            }  
        }
    
        //Calculates the avarage value
        let avgValue: number = parseFloat((sum/numericList.length).toFixed(2));
    
        return [maxValue, minValue, avgValue];
    }
}

//Usage example
let imperativeExample = new ImperativeList([1,2,"cat","3"]);
console.log(imperativeExample.inspectList());