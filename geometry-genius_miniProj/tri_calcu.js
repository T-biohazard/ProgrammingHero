

function calculate(){
    const triBaseInput1=document.getElementById('tri-base');
    const triBaseInput=triBaseInput1.value;
    
    const trihightInput1=document.getElementById('tri-hight');
    const trihightInput=trihightInput1.value;

    const area=trihightInput*triBaseInput;
    

    const displayArea1=document.getElementById('triArea');
    displayArea1.innerText=area;
}