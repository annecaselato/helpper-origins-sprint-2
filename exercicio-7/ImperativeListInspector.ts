//This class receives a list, check if it's numeric, and returns its max, min, and avarage values
class ImperativeList {
    private list : any[];

    constructor(list: any[]) {
        this.list = list;
    }

    //Check if it's numeric and convert numeric strings to numbers
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

    //Gets max, min and avarage values
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

let imperativeExample = new ImperativeList([1,2,"cat","3"]);
console.log(imperativeExample.inspectList());