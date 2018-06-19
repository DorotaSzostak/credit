const dropRec = document.querySelector('.offer__title')
const dropOther = document.querySelector('.offer__title--other')
const toHide = document.querySelectorAll('.hidden')
const toHideOther = document.querySelectorAll('.hidden--other')


dropRec.addEventListener('click', function(){
   // toHide.classList.toggle("close");
    for (let i = 0; i <toHide.length; i++) {
    toHide[i].classList.toggle("close");
}
});

dropOther.addEventListener('click', function(){
   // toHide.classList.toggle("close");
    for (let i = 0; i <toHideOther.length; i++) {
    toHideOther[i].classList.toggle("close");
}
});


