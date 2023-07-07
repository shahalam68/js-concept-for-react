// 1. array destructuring

const numbers = [ 42,65];
// const x = numbers[0];
// const y = numbers[1];

const [x,y] = [numbers]

function boxify (num1,num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90,34]
const [first, second] = boxify(90,34)


// console.log(boxify(90,34));
const student = {
    name: 'Sakib khan',
    age: 32,
    movies:['king khan', "dhakar mastan"]
}


const [firstMovie, secondMovie] = student.movies


// object destructuring

const { name, age}= {name:'alu', age: 14};
const {name,age} = { id:12, name:'alu', salary:3200,age: 40}


const employee ={
    ide:'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        hight: 66,
        weight: 67,
        address: 'kimarkhalui',
        drink:"water"
    }
}
const {machine,ide} = employee;
const{weight, address} = employee.specification;

