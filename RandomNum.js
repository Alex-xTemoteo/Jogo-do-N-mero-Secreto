export default class RandomNum{
    constructor(min, max){
        this.min = min;
        this.max = max;
        this.numRandom = parseInt(Math.random() * ((this.max + 1)- this.min) + min);
        this.elementosSort = [this.numRandom];
    };
    getNumRandom(){
        return this.numRandom;
    };
    getNumRandomNew(){
        do{
            this.numRandom = parseInt(Math.random() * ((this.max + 1)- this.min) + this.min);
        }while(this.elementosSort.includes(this.numRandom) && this.elementosSort.length < this.max);
        this.setElementosSort(this.numRandom);
        return this.numRandom;
    };
    setElementosSort(num){
        this.elementosSort.push(num); 
    };
    getElementosSort(){
        console.log(this.elementosSort)
        if(this.elementosSort.length != 0){
            return this.elementosSort;
        };
    };
};
