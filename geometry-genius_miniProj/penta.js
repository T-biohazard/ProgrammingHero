

function calculatepen(){
    const peri=getInput('pen-base');
    
    const dai=getInput('pen-hight');

    const areaa=peri*dai*0.5;

    setInnertext('penArea',areaa);


}


function getInput(input){
const inputId =document.getElementById(input);
const inputvaltxt=inputId.ariaValueMax;
const value=parseFloat(inputvaltxt);
return value;
}


function setInnertext(elementId,area){
    const elemen=document.getElementById(elementId);
    elemen.innerText=area;
}