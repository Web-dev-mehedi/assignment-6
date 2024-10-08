
// 

const LoadCXategories = async()=>{

    const url ="https://openapi.programming-hero.com/api/peddy/categories"
    const res = await fetch(url);
    const data =await res.json();
    displayCategories(data.categories)
}

// load


// display cattegory btn

const displayCategories=(categories)=>{
    const callCategories = document.getElementById('categories')
   categories.map((btn)=>{
      const div = document.createElement('div')
      div.innerHTML =`
          <div class=" flex justify-center items-center border border-[#0E7A8126] px-5  sm:px-10 py-4 sm:py-3 gap-3 rounded-xl text-2xl font-bold text-center text-[#131313]">
              <img src=${btn.category_icon} class="w-10 "/> 
              <p>${btn.category}</p>
          </div>
        
      ` 
      div.classList="flex gap-3 justify-center items-center"
      callCategories.appendChild(div)
   })
  
}




LoadCXategories();