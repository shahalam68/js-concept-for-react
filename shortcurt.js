
// 'almas', 5, true,{},[]
// '', 0, false,null, undefined

const myVar = 5;
if(myVar){
    // myVar = myVar*100;
}
else{
    myVar = 0;
}
let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}

const mooney = 800;
let food;
if(mooney> 100){
    food = 'biryani';
}
else{
    food = 'chabiskut'
}

// ternary
let food1 = mooney > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (mooney > 100 && myVar > 100) ? 'cock': 'water';
// console.log(drink);

//
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);
const input = '560';
const inputNum = +input;
console.log(inputNum);
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();

//  use && if the left side is true then rite side will be execute
isActive && showUser();


// use && if the left side is false then rite side will be execute
isActive || hideUser();

// toggol