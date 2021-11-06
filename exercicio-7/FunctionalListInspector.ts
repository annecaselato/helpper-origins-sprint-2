//This class receives a list, check if it's numeric, and returns its max, min, and avarage values
class FunctionalListInspector {
    static inspectList(inputList: any[]): number[] {
        //Check if the list is numeric and convert numeric strings to numbers
        let numberList: number[] = inputList.map(Number).filter(Boolean);
    
        //Finds the max, min, and avarage values
        let maxValue: number = Math.max(...numberList);
        let minValue: number = Math.min(...numberList);
        let sum: number = numberList.reduce((a, b) => a + b, 0);
        let avgValue: number = sum/numberList.length;
    
        return [maxValue, minValue, avgValue];
    }
}