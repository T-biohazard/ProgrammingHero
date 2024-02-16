const prod=[
    {name:'shampoo',price:300,quantity:3},
    {name:'shampaksjdoo',price:3500,quantity:34},
    {name:'shampoajsdho',price:3060,quantity:37},
]

function cardtottal(x){
    let sum=0;
    for(const product of prod){
        sum+=prod.price;
    }
    return sum;
}

const s=cardtottal(prod);
console.log(s);