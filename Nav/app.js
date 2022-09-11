const body = document.querySelector("body");
const babyModal = document.querySelector(".display-none");
const beauty = document.querySelector(".beauty-display-none");
const hair = document.querySelector(".hair-display-none");
const face = document.querySelector(".face-display-none");
const bodyData = document.querySelector(".body-display-none");

function babyData() {
  babyModal.style.display = "flex";
  beauty.style.display = "none";
  hair.style.display = "none";
}
function babyDataRemove() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
}
function beautyData() {
  babyModal.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  beauty.style.display = "flex";
}
function hairData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
  hair.style.display = "flex";
}
function faceData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  bodyData.style.display = "none";
  face.style.display = "flex";
}
function bodyShowData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "flex";
}

//===================== main section javascript =================

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
  // console.log(butn);
});

//================================================= LOG IN ========================================

const subMenuWrap = document.querySelector(".sub-menu-wrap");
const loginBtn = document.querySelector(".logbut");
const crossBtn = document.querySelector("#cross");
const header = document.querySelector("header");
const main = document.querySelector("main");
const loginWithOtpBtn = document.querySelector("#login_with_otp");
const loginPhoneMunberInput = document.querySelector("#login_input");
const signUpModal = document.querySelector(".signup_popup");
const loginModal = document.querySelector(".login_popup");
const signUpNumber = document.querySelector("#signup_phone_number");
const loginNumber = document.querySelector("#login_input");
const signUpBtn = document.querySelector("#signup_btn");
const signInModal = document.querySelector('.signin_popup');


function toggleMenu() {
  subMenuWrap.style.display = "block";
}

function toggleMenuRemove() {
  subMenuWrap.style.display = "none";
}

const loginPopUpMainContainer = document.querySelector(
  ".login_popup_main_container"
);

function login() {
  subMenuWrap.style.display = "none";
  main.classList.toggle("active");
  header.classList.toggle("active");
  loginPopUpMainContainer.style.display = "block";
}

function loginPopupRemove() {
  loginPopUpMainContainer.style.display = "none";
  main.classList.toggle("active");
  header.classList.toggle("active");
}

function loginWithOtp() {
  if (loginPhoneMunberInput.value.length > 1) {
    loginModal.remove();
    signUpModal.style.display = "block";
    signUpNumber.value = loginNumber.value;
    loginPopUpMainContainer.append(signUpModal);
  }
}

function backToLogin() {
  signUpModal.remove();
  loginPopUpMainContainer.append(loginModal);
}


const userData = [];
signUpBtn.addEventListener("click", (event) => {
  const fName = document.querySelector("#signup_first_name").value;
  const lName = document.querySelector("#signup_last_name").value;
  const eMail = document.querySelector("#signup_email_id").value;

  if (!eMail.endsWith("@gmail.com")) {
    alert("Invalid Email");
  }
else{

  const search = userData.find((x) => {
    return x.userEmail == eMail;
  });
  
  if (search == undefined) {
    let userDetails = {
      userFirstName: fName,
      userLastName: lName,
      userEmail: eMail,
    };
    userData.push(userDetails);
    localStorage.setItem('userData',JSON.stringify(userData))
    
  } else {
    alert("user already exist");
  }
  console.log(userData);
  signUpModal.remove();
  loginPopUpMainContainer.append(signInModal)
}

});

const signInCrossBtn = document.querySelector('#signin_cross');
signInCrossBtn.addEventListener('click', (event)=>{
  signInModal.remove();
  loginPopUpMainContainer.append(loginModal)
  loginPopUpMainContainer.style.display = "none";
  main.classList.toggle("active");
  header.classList.toggle("active");
})


const signInBtn = document.querySelector('#signin_btn');
const logedname = document.querySelector(".logedname")

signInBtn.addEventListener('click', ()=>{
  const signInEmail = document.querySelector('#signin_email').value;

  for(let i=0; i<userData.length; i++){
    if (userData[i].userEmail == signInEmail) {
      // console.log("userEmail", userData[i].userEmail);
      // console.log("singInemail", signInEmail);
      loginPopUpMainContainer.style.display = "none";
    main.classList.toggle("active");
    header.classList.toggle("active");
    // signUpBtn.innerHTML="LogOut"
    loginBtn.innerHTML="log out"
    logedname.innerHTML=`welcome ${userData[i].userFirstName}`
    // console.log();
  }
  // else if(userData[i].userEmail!=signInEmail){
  //   alert('Please Sign Up')
  // }
}
})