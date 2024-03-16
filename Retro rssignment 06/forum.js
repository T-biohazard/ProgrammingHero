

const letsdiscuss =async ()=>{
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');
    const posts =await res.json();
    const datas =posts.posts;
   // console.log(datas);
   displayDiscuss(datas);
}




const displayDiscuss= datas =>{
    //1 getID
    const dataContainer =document.getElementById('discuss');
    datas.forEach(data => {
        console.log(data);
// 2 create div
        const dataCard =document.createElement('div');
         dataCard.classList=`bg-blue-100 border border-blue-600 border-1 rounded-3xl mb-4`;
        
        //3 inner HTML
         dataCard.innerHTML = `  

        
         <div class="flex p-12 gap-4">


         <!-- left side -->
         <div class="relative">
             <img class="w-16 rounded-full " src="${data.image}" alt="">

             <div class="absolute top-0 right-0 w-4 h-4 ${data.isActive ? 'bg-green-500' : 'bg-red-500'} rounded-full"></div>

         </div>

         <!-- right side -->

         <div class="">

             <div class="flex gap-8 ">
                 <div>
                     <p>${data.category}</p>
                 </div>
                 <div>
                     <p>Author : ${data.author.name}</p>
                 </div>
             </div>

             <h2 class=" mt-1 font-bold text-xl">${data.title}</h2>
             <p class="mb-6 mt-4">${data.description}
             </p>

             <div class="border-b border-dotted border-black"></div>

             <div class="flex justify-between">
                 <div class="flex gap-7 pt-2 pb-2">
                     <div class="flex gap-3 justify-start ">
                         <img class="h-6 w-6" src="B9A6-Retro-Forum/images/icons8-message-50.png"
                             alt="">
                         <div>${data.comment_count}</div>
                     </div>

                     <div>
                         <div class="flex gap-3">
                             <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                 <path
                                     d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                             </svg>
                             <div>${data.view_count}</div>
                         </div>
                     </div>

                     <div class="flex gap-3 h-6 w-6">
                         <img src="B9A6-Retro-Forum/images/icons8-time-50.png" alt="">
                         <h3>${data.posted_time}</h3>
                     </div>
                 </div>

                 <div>
                     <button class=" hover:select-all"><img
                             src="B9A6-Retro-Forum/images/icons8-mail-48.png" alt=""></button>
                 </div>
             </div>

         </div>

     </div>
`;
//4 append child
dataContainer.appendChild(dataCard);
    });
}







letsdiscuss();