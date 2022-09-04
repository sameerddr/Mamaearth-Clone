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