const myHeight = 173;
let idealWeight = 0;
let maxWeight = 0;
let minWeight = 0;

idealWeight = ((myHeight % 100) * 9) / 10;
maxWeight = myHeight % 100;
minWeight = ((myHeight % 100) * 8) / 10;

console.log("Cân nặng lý tưởng của bạn là " + idealWeight + ". Cân nặng tối đa của bạn là " + maxWeight + ". Cân nặng tối thiểu của bạn là " + minWeight + ".");