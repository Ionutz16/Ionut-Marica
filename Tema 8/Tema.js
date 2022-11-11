const a = 10;
if (a%2 === 0){
    console.log("Even number.")
}
else{
    console.log("Odd number.")
};


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNumbers = numbers.filter(ele => ele % 2 == 0)
// if (numbers %2 === 0){
//     console.log("Even Number.")
// }
// else {
//     console.log("Odd Number.")
// };
                                    
console.log(evenNumbers);
