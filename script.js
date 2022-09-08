let subMenu = document.querySelector("#subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// ----------------
var input = document.querySelector(".input");
const body = document.querySelector("body");
const baby_modal = document.querySelector(".display-none");

function babyData() {
  baby_modal.style.display = "flex";
  beauty.style.display = "none";
  hair.style.display = "none";
  // setTimeout(() => {
  //     baby_modal.style.display = 'none';
  // }, 10000);
}

function babyDataRemove() {
  baby_modal.style.display = "none";
}
const beauty = document.querySelector(".beauty-display-none");

function beautyData() {
  baby_modal.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  beauty.style.display = "flex";
  setTimeout(() => {
    beauty.style.display = "none";
  }, 10000);
}

const hair = document.querySelector(".hair-display-none");

function hairData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
  hair.style.display = "flex";
  setTimeout(() => {
    hair.style.display = "none";
  }, 10000);
}

const face = document.querySelector(".face-display-none");

function faceData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  bodyData.style.display = "none";
  face.style.display = "flex";
  setTimeout(() => {
    face.style.display = "none";
  }, 10000);
}

const bodyData = document.querySelector(".body-display-none");

function bodyShowData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "flex";
  setTimeout(() => {
    bodyData.style.display = "none";
  }, 10000);
}

// main section javascript

const container = document.querySelector(".container");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/18/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.bestsellers.map((item) => {
        // console.log(item.images[0]);
        html = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="img1">
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${item.avg_rating_percent}<span> | ${item.review_count}<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="butn" onclick="add_to_cart()" >Add to cart</button>
        </div>`;
        container.innerHTML += html;
      });
    });
});

// ----------------------gift section page

const data_fetch = document.querySelector(".data_fetch");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/2/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.bestsellers.map((item) => {
        // console.log(item.images[0]);
        html = `<div class="g1">
            <div class="gift_logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="p_img">
            <p>${item.name}</p>
            <p class="cont"><i class="fa-solid fa-star rate"></i>${item.avg_rating_percent}<span> | ${item.review_count}<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="gift_btn" onclick="add_to_cart()"  >Add to cart</button>
        </div>`;
        data_fetch.innerHTML += html;
      });
    });
});

// ----------------------------add to cart--------------------
// let cartbut = document.querySelector(".butn");
// cartbut.addEventListener("onclick", function add_to_cart(pimg, pname, price) {
// cartbut.addEventListener("onclick", function add_to_cart() {
// console.log("working");
// let cart = localStorage.getItem("cart");
// if (cart == null) {
//     // no cart yet
//     let product = [];
//     let pro = { productIMG: pimg, productName: pname, productprice: price };
//     product.push(pro);
//     localStorage.setItem("cart", JSON.stringify(product));
//     console.log("Product is added for the first time");
// } else {
//     // cart is alreday present
//     let pcart = JSON.parse(cart);
//     let oldpro = pcart.find((item)=>{
//         item.productIMG
//     })
// }
// }
// });

function add_to_cart(pimg, pname, price) {
  console.log("jwhdjkwfkfkwsggwbjs");
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    // no cart yet
    let product = [];
    let pro = { productIMG: pimg, productName: pname, productprice: price };
    product.push(pro);
    localStorage.setItem("cart", JSON.stringify(product));
    console.log("Product is added for the first time");
  }
}
