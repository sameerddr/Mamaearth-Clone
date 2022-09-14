// ===Searcbar workble=================




function movieSearch(){
    let inputvalue = document.querySelector('.input').value;
  // console.log(inputvalue)
    fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/2/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let filterData = data.bestsellers.filter((item)=>{
          // console.log(item)
          if(item.name.toLowerCase().includes(inputvalue.toLowerCase()))
            return item
        })
        console.log(filterData)
        container.innerHTML="";
        filterData.map((item)=> {
          container.innerHTML+=`<div class="c1">
          <div class="logo">Best seller</div>
          <img src=${item.images[0]} alt="mamaearth" class="img1">
          <p>${item.name}</p>
          <p class="para"><i class="fa-solid fa-star rate"></i>${item.avg_rating_percent}<span> | ${item.review_count}<span></p>
          <p> Rs.${item.price}</p>
          <button id=${item.id} class="butn" onclick="add_to_cart(event)" >Add to cart</button>
      </div>`;
        })
  
        
    }).catch(err=>alert("item not found"))
    
  }