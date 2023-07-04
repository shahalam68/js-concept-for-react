//1.  how to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter'

//2.  condition>,<,===, !==, <=,>= and multiple conditions: &&,||
if(fatherName === 'Arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. array 
// index
// length,push

const numbers = [89,35,98,12];
numbers[0] = 56;

// 4. loop

for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function 

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
} 

// 6. object 

const student = {
    name: 'Sakib khan',
    age: 32,
    movies:['king khan', "dhakar mastan"]
}