const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}

closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}
