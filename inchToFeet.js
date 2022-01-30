// let inches = 24;
// let feet = inches/12;
// console.log(feet);

// function finalFeet (num1){
//     var num = num1/12;
//     num= num.toFixed(3);
//     num = parseFloat(num);
//     return num;
// }
// var result=finalFeet(500);
// console.log(result);

function mileToKilometer (miles){
    var km = miles * 1.609;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('Marathon to kilometer', marathon);