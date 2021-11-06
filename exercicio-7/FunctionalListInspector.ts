class FunctionalListInspector {
    static inspectList(inputList: any[]): number[] {
        //Valida se a lista é numérica e converte string de números
        let numberList: number[] = inputList.map(Number).filter(Boolean);
    
        //Encontra os valores máximo, mínimo e médio
        let maxValue: number = Math.max(...numberList);
        let minValue: number = Math.min(...numberList);
        let sum: number = numberList.reduce((a, b) => a + b, 0);
        let avgValue: number = sum/numberList.length;
    
        return [maxValue, minValue, avgValue];
    }
}

console.log(FunctionalListInspector.inspectList([1, 'a', '4', 2, 7]));