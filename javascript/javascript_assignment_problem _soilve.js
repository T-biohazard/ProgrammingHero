//1
// function calculateMoney(n){
//     if(n>=0){
//     const x= ( n* 120) - ( 500 + (8 * 50) )   
//     return x;
//     }
//     else{
//         console.log("Invalid Number")
//     }
// }


//2
const Arr="ayxy"; 
function  checkName(Array) {
if(typeof Array !== 'string'){
    return "Invalid ";
}

    const reverseArray = Array.split('').reverse().join('');
if(reverseArray[0]=='a' || reverseArray[0]=='y' || reverseArray[0]=='i' || reverseArray[0]=='e' || reverseArray[0]=='o' || reverseArray[0]=='u' || reverseArray[0]=='w' ){
   return "Good Name";
}
else{
    return "Bad Name";
}

   }
console.log(checkName(Arr));



// function deleteInvalids(name) {
   
//     const lastChar = name[name.length - 1];
//     const forbiddenChar = ['a' , 'y' , 'i' , 'e' , 'o' , 'u' , 'w'];

//     if(forbiddenChar.includes(lastChar.toLowerCase())){
//         return "Bad Name";
//     }
//     else{
//         return "Good Name ";
//     }
// }
// const name1=["1" , {num:2} , NaN ];
//  console.log(deleteInvalids(name1));

//3

// function deleteInvalids(Array1){
// if(!Array.isArray(Array1)){
// return "Error";
// }
// else{


//     const nullarr=[];
    
//     for (let i=0;i<Array1.length;i++){
//         if(typeof Array1[i]==='number' && !isNaN(Array1[i])){
//             nullarr.push(Array1[i]);
//         }
//     }
//     return nullarr;
//     }}
    
// const Array1=["1" , {num:2} , NaN ];
// console.log(deleteInvalids(Array1));


//4


// function password(obj){ 

//   if (!obj.hasOwnProperty('webname') || !obj.hasOwnProperty('username') || !obj.hasOwnProperty('birthYear') || typeof obj.birthYear !== 'number' || obj.birthYear.toString().length !== 4) {
//     return "Invalid";
//   }

//         const {  webname ,username, birthYear} = obj;
//         const alphaltr = webname.charAt(0).toUpperCase() + webname.slice(1);
//         const output = `${alphaltr}#${username}@${birthYear}`;
//         return output;
//       }
      
//       // Example usage:
//       const input = { username: "asdasd", birthYear: 1999, webname: "google" };
//       const output = password(input);
//       console.log(output); // Output: Google#kolimuddin@1999
      



//5


// function monthlySavings(array1, monthlyCost) {
//     if (!Array.isArray(array1) || typeof monthlyCost !== 'number') {
//         return "Invalid";
//     }
//     let sum = 0;
//     let totalTax = 0;
//     for (let i = 0; i < array1.length; i++) {
//         sum += array1[i];
//         if (array1[i] >= 3000) {
//             totalTax = totalTax + array1[i] * 0.2;
//         }
//     }

//     const savings = (sum - totalTax) - monthlyCost;
//     if (savings >= 0) {
//         return savings;
//     } else {
//         return "Earn More";
//     }
// }

// arr=[ 1000 , 2000 , 3000 ] ; Cost= 5400;

// console.log(monthlySavings(arr, Cost))
