
const letsdiscuss1 =async ()=>{
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const posts =await res.json();
    const datas =posts;
    //console.log(datas);
   displayDiscuss1(datas);
}


letsdiscuss1();


const displayDiscuss1= datas =>{
    //1 getID
    const dataContainer =document.getElementById('latest');
    datas.forEach(data => {
        console.log(data);
// 2 create div
        const dataCard =document.createElement('div');
         dataCard.classList=`lg:flex justify-around  `;
        
        //3 inner HTML
         dataCard.innerHTML = `  
         <div class="card card-compact w-96 bg-base-100 shadow-xl rounded-3xl">
         <figure><img class="p-8" src="${data.cover_image}"
                 alt="Shoes" /></figure>
         <div class="card-body">
        
         <h2>${data.author?.posted_date != null ? data.author.posted_date : "No Publish Date"}</h2>

             <h2 class="card-title">${data.title}</h2>
             <p>${data.description} </p>
             <div class="flex gap-4">
                 <div>
                     <img class="rounded-full w-8" src="${data.profile_image}" alt="">
                 </div>
                 <div>
                     <h1 class="font-bold">${data.author.name}</h1>
                     <p>${data.author?.designation != null ? data.author.designation : "Unknown"}</p>
                 </div>

             </div>
         </div>
     </div>
        
`;
//4 append child
dataContainer.appendChild(dataCard);
    });
}
