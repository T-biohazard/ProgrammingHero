console.log("welcome to DOM"); 
//4-6 Styling Dom Properties, Add And Remove Css Class Using JS
const sections =document.querySelectorAll('section');
for(const sectionz of sections){
    sectionz.style.border='2px solid blue';
    sectionz.style.marginBottom='5px';
    sectionz.style.paddingLeft='12px';
    sectionz.style.textAlign='center';

}

const li2=document.createElement('li2');
li2.innerText='eitw add kore fellam';