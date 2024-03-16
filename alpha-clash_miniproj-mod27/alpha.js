
//u can use get set func

function play(){
    
const homeSec =document.getElementById('hii');
homeSec.classList.add('hidden'); 


//show playgrounmd
const plySec =document.getElementById('play-ground');
plySec.classList.remove('hidden'); 
continuegame()
const alphabet =getalphabet();
}


function continuegame(){

}
function getalphabet(){
    const alphstrng='abcdefghijklmopxyz';
    const alp= alphstrng.split('');
    console.log(alp);
}