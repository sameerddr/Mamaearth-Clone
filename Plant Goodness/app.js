//======================================= NAV FUNCTIONALIY ================================
const body = document.querySelector('body');
const baby_modal = document.querySelector('.display-none');
function babyData() {
    
    baby_modal.style.display = 'flex';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    
}

function babyDataRemove() {
    
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    face.style.display = 'none';
    bodyData.style.display = 'none';
    
}
const beauty = document.querySelector('.beauty-display-none');
function beautyData() {
    baby_modal.style.display = 'none';
    hair.style.display = 'none';
    face.style.display = 'none';
    beauty.style.display = 'flex';
    
}

const hair = document.querySelector('.hair-display-none');
function hairData() {
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    face.style.display = 'none';
    bodyData.style.display = 'none';
    hair.style.display = 'flex';
    
}

const face = document.querySelector('.face-display-none');
function faceData() {
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    bodyData.style.display = 'none';
    face.style.display = 'flex';

}

const bodyData = document.querySelector('.body-display-none');
function bodyShowData() {
    baby_modal.style.display = 'none';
    beauty.style.display = 'none';
    hair.style.display = 'none';
    face.style.display = 'none';
    bodyData.style.display = 'flex';
    
}


// ============================================== PLANT GOODNESS FUNCTIONALITY ======================================
let previews = [
    {
        id: 1,
        img: 'Ritu_Image.png',
        text: 'A much needed invitative in the present times, just by taking a small step this can bring about a big changes',
    },
    {
        id: 2,
        img: '2nd_Quote_1.jpg',
        text: 'Thank you for initiating a much needed programme which contributes back to our enviroment.',
    }
];


const rituImage = document.querySelector('#ritu-image');
const rituQuote = document.querySelector('#ritu-quote');
const preBtn = document.querySelector('#preview');
const nextBtn = document.querySelector('#next');

let currentItem = 0;
function showPerson() {
    let item = previews[currentItem];
    rituImage.src = item.img;
    rituQuote.textContent = item.text;
}
showPerson();

nextBtn.addEventListener('click', (event)=>{
    currentItem++;
    if(currentItem > previews.length - 1){
        currentItem = 0;
    }

    showPerson();
})

preBtn.addEventListener('click', (event)=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = previews.length - 1;
    }

    showPerson();
})