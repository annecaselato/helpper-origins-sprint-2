//This class receives a list, check if it's numeric, and returns its max, min, and avarage values
class ImperativeList {
    static inspectList(inputList: any[]): number[] {
        //Check if the list is numeric and convert numeric strings to numbers
        for (let index = 0; index < inputList.length; index++) {
            if (isNaN(+inputList[index])) {
                inputList.splice(index, 1);
            }
            inputList[index] = +inputList[index];
        }

        let maxValue: number = inputList[0];
        let minValue: number = inputList[0];
        let sum: number = 0;
    
        //Finds the max and min values, and sum all values
        for (let index = 0; index < inputList.length; index++) {
            sum += inputList[index];
            if (inputList[index] < minValue) {
                minValue = inputList[index];
            }
            if (inputList[index] > maxValue) {
                maxValue = inputList[index];
            }  
        }
    
        //Calculates the avarage value
        let avgValue: number = parseFloat((sum/inputList.length).toFixed(2));
    
        return [maxValue, minValue, avgValue];
    }
}