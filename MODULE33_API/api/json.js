const xy ={
    owner :'Alia',
    adress:{
        city:'Dhaka',
        loaction:'demra'
    },
    products : ['laptop','desktop','mobile'],
    isOpen:true,
    isNew:false
};

console.log(xy);

//json
const xyJSON = JSON.stringify(xy);
console.log(xyJSON);



// owner: 'Alia',
// adress: { city: 'Dhaka', loaction: 'demra' },
// products: [ 'laptop', 'desktop', 'mobile' ], 
// isOpen: true,
// isNew: false
// }

// json-->

// {"owner":"Alia","adress":{"city":"Dhaka","loaction":"demra"},"products":["laptop","desktop","mobile"],"isOpen":true,"isNew":false}