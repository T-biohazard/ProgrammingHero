const actor={
    name: 'tahsin',
    age: 23,
    phone:'0176332331'
}

// use poperty name as the poperty valued
const {phone,age}=actor

console.log(phone)
console.log(age)



// for of used for array or string not in object

//optional chaining--->  first?.sec


const players=[1,2,4];
const select = players.find(player=>player>1);
const select1 = players.filter(player=>player>1);

console.log(select);
console.log(select1);