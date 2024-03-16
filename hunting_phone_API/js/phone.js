
//Load Data Using Phone Hunter API
const loadPhone = async() =>{

    const res=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data =await res.json();
    const phones =data.data;
    console.log(phones);
}


const displayphone= phones =>{
phones.forEach(phones =>{
    console.log(phones)
})
}

//displat it

const displayPhones = phones => {

    const phoneContainer2 = document.getElementById('phoneContainer');
   
    //clear phn container
   phoneContainer2.textContent='';
   
    phones.forEach=phone=>{
        console.log(phone);
//2 create div
        const phoneCard =document.createElement('div');
        phoneCard.classList =`card w-96 bg-base-100 shadow-xl`;
 //3 inner html
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
        `;
//4 apped child
phoneContainer2.appendChild(phoneCard);
    }
}



loadPhone();


//search 

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span>GPS:</span>${phone.others?.GPS || 'No GPS available'}</p>
        <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
    `

    // show the modal
    show_details_modal.showModal();
}


const handleSearch = () =>{
    const searchField =document.getElementById('search-field');
    const searchText =searchField.value;
    loadPhone(searchText);
}