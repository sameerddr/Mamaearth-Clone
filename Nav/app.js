let subMenu = document.querySelector("#subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

const body = document.querySelector("body");
const baby_modal = document.querySelector(".display-none");
function babyData() {
  baby_modal.style.display = "flex";
  beauty.style.display = "none";
  hair.style.display = "none";
}

function babyDataRemove() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
}
const beauty = document.querySelector(".beauty-display-none");
function beautyData() {
  baby_modal.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  beauty.style.display = "flex";
}

const hair = document.querySelector(".hair-display-none");
function hairData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
  hair.style.display = "flex";
}

const face = document.querySelector(".face-display-none");
function faceData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  bodyData.style.display = "none";
  face.style.display = "flex";
}

const bodyData = document.querySelector(".body-display-none");
function bodyShowData() {
  baby_modal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "flex";
}

// main section javascript

const container = document.querySelector(".container");
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/31/products")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      data.bestsellers.map((item) => {
        // console.log(item.images[0]);
        productItem = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="img1">
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${
              (5 * parseInt(item.avg_rating_percent)) / 100
            }<span> | ${item.review_count} reviews<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="butn">Add to cart</button>
        </div>`;
        container.innerHTML += productItem;
      });
    })
    .catch((err) => err);
});

const allproducts = document.querySelector(".all-pro-sub");

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/21/products")
    .then((res) => res.json())
    .then((data) =>
      data.bestsellers.map((item) => {
        html = `<div class="c1">
            <div class="logo">Best seller</div>
            <img src=${item.images[0]} alt="mamaearth" class="img1">
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${
              (5 * parseInt(item.avg_rating_percent)) / 100
            }<span> | ${item.review_count} reviews<span></p>
            <p> Rs.${item.price}</p>
            <button id=${item.id} class="butn">Add to cart</button>
        </div>`;
        allproducts.innerHTML += html;
      })
    )
    .catch((err) => err);
  const butn = document.getElementsByClassName("butn");
  const sample = Array.from(butn);
  console.log(butn);
});










//================================================= LOG IN ========================================



const subMenuWrap = document.querySelector('.sub-menu-wrap');

const loginPopUp = document.querySelector('.login_popup');

const loginBtn = document.querySelector('.logbut');

const crossBtn = document.querySelector('#cross');

function login() {
    loginPopUp.remove();
}


