

function nextbut() {


    //if(){}
    const homeSec = document.getElementById('foot');
    homeSec.classList.add('hidden');

    const homeSec1 = document.getElementById('phtravels');
    homeSec1.classList.add('hidden');

    const homeSec11 = document.getElementById('best-offer');
    homeSec11.classList.add('hidden');

    const homeSec111 = document.getElementById('header');
    homeSec111.classList.add('hidden');


    //show playgrounmd
    const plySec = document.getElementById('success');
    plySec.classList.remove('hidden');

}


function butbut() {

    const homeSec = document.getElementById('foot');
    homeSec.classList.remove('hidden');

    const homeSec1 = document.getElementById('phtravels');
    homeSec1.classList.remove('hidden');

    const homeSec11 = document.getElementById('best-offer');
    homeSec11.classList.remove('hidden');

    const homeSec111 = document.getElementById('header');
    homeSec111.classList.remove('hidden');


    //show playgrounmd
    const plySec = document.getElementById('success');
    plySec.classList.add('hidden');

}

