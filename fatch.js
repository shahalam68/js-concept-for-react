// JSON => stringify ,parse
const student = {
    name: 'Sakib khan',
    age: 32,
    movies:['king khan', "dhakar mastan"]
}

const studentJson = JSON.stringify(student);
// console.log(student);
// console.log(studentJson) 
const studentOBJ = JSON.parse(studentJson);
// console.log(studentOBJ);

// 2.fetch

fetch('url')
.then(res => res.json)
.then(data =>console.log(data));


// Keys, values
const keys = Object.keys(student);
const values = Object.values

// for 
const numbers = [23,25,65,78];
numbers.forEach(num => console.log(num));
numbers.map(num => num *2);

// for  of on array like object
// loop on an object using for in 



//  add or remove from an array 

const products = [
    {name: 'laptop', price:32000, brand: 'HP', color:'silver'},
    {name: 'phone', price:7000, brand: 'Mi', color:'black'},
    {name: 'watch', price:3000, brand: 'casio', color:'yellow'},
    {name: 'sunglass', price:300, brand: 'raibon', color:'black'},
    {name: 'camera', price:9000, brand: 'canon', color:'gray'},
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal'}

// copy products array and then add newProduct 
const newProducts = [...products, newProduct]
console.log(newProducts);

//  create new array without one specific item
//  remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== "phone");