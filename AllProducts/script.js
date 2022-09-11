// Write all the selectors here
let subMenu = document.querySelector("#subMenu");

// Fetch Data from Api
const getProductData = async (index) => {
    const response = await axios.get(`https://mmrth-nd-api.honasa-production.net/v1/categories/${index}/products`);
    console.log(index);
    return response.data;
}





function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}

// ----------------
var input = document.querySelector(".input");
const body = document.querySelector('body');
const baby_modal = document.querySelector('.display-none');
function babyData() {

    baby_modal.style.display = 'flex';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    // setTimeout(() => {
    //     baby_modal.style.display = 'none';
    // }, 10000);
}









function babyDataRemove() {
    baby_modal.style.display = 'none';
}
const beauty = document.querySelector('.beauty-display-none');
function beautyData() {
    baby_modal.style.display = 'none';
    hair.style.display = 'none';
    face.style.display = 'none';
    beauty.style.display = 'flex';
    setTimeout(() => {
        beauty.style.display = 'none';
    }, 10000);
}

const hair = document.querySelector('.hair-display-none');
function hairData() {
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    face.style.display = 'none';
    bodyData.style.display = 'none';
    hair.style.display = 'flex';
    setTimeout(() => {
        hair.style.display = 'none';
    }, 10000);
}

const face = document.querySelector('.face-display-none');
function faceData() {
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    bodyData.style.display = 'none';
    face.style.display = 'flex';
    setTimeout(() => {
        face.style.display = 'none';
    }, 10000);
}

const bodyData = document.querySelector('.body-display-none');
function bodyShowData() {
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    face.style.display = 'none';
    bodyData.style.display = 'flex';
    setTimeout(() => {
        bodyData.style.display = 'none';
    }, 10000);
}

// main section javascript

const container = document.querySelector(".container")
window.addEventListener("DOMContentLoaded", () => {
    fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/31/products")
        .then(res => res.json()).then(data => {
            // console.log(data)
            data.bestsellers.map((item) => {
                // console.log(item.images[0]);
                productItem = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="img1">
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${5 * parseInt(item.avg_rating_percent) / 100}<span> | ${item.review_count} reviews<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="butn">Add to cart</button>
        </div>`
                container.innerHTML += productItem
            })

        }).catch(err => err)
})

const productCont = document.querySelector('.all-pro-sub')

window.addEventListener('DOMContentLoaded', () => {
    fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/21/products")
        .then(res => res.json()).then(data =>
            data.bestsellers.map((item) => {
                html = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="img1">
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${5 * parseInt(item.avg_rating_percent) / 100}<span> | ${item.review_count} reviews<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="butn">Add to cart</button>
        </div>`
                productCont.innerHTML += html
            })).catch(err => err)
    // const addCartBtn = document.getElementsByClassName("butn")
    // addCartBtn.addEventListener("click", ()=>{
    //     alert("added to cart")
    // })
})
const fileterBtn = document.querySelector(".filters");
console.log(all);
/* prev code
all.addEventListener("click", ()=>{
    fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/21/products")
    .then(res=>res.json()).then(data=>{
        show(data.bestsellers)}).catch(err=>err)
}) 
*/

fileterBtn.addEventListener('click', async (e) => {
    let index = 17;
    console.log(e.target.id);
    switch (e.target.id) {
        case 'all': index = 33;
        break;
        case 'hair': index = 27;
        break;
        case 'face': index = 21;
        break;
        case 'body': index = 26;
        break;
        case 'baby': index = 13;
        break;
        default: index = index;
        break;
        
    }
    
    console.log(index);
    let data = await getProductData(index);
    console.log("data", data);
    createProdItemCard(data.bestsellers);
})


function createProdItemCard(data) {
    let prodItem;
    productCont.innerHTML = null
    // console.log("data", data);
    data.map((e) => {
        console.log("each", e.images[0]);
        prodItem = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${e.images[0]} alt="mamaearth" class="img1">
            <p>${e.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${5 * parseInt(e.avg_rating_percent) / 100}<span> | ${e.review_count} reviews</span></p>
            <p> Rs.${e.price}</p>
            <button id=${e.id} class="butn">Add to cart</button>
        </div>`
        productCont.innerHTML += prodItem

    })
}