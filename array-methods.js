const products = [
    {name: 'laptop', price:32000, brand: 'HP', color:'silver'},
    {name: 'phone', price:7000, brand: 'Mi', color:'black'},
    {name: 'watch', price:3000, brand: 'casio', color:'yellow'},
    {name: 'sunglass', price:300, brand: 'raibon', color:'black'},
    {name: 'camera', price:9000, brand: 'canon', color:'gray'},
];


const brands = products.map(product => product.brand)
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);



products.forEach(product => console.log(product.color));


//  filter


const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(pd => pd.name.includes('n'))
console.log(specificName);


//  find
const special = products.find(p=>p.name.includes('n'));

console.log(special);