// const showPicture = document.getElementById('.show_mem');
const hidePicture = document.getElementById('mem_1');
const hideDesc = document.getElementById('desc_mem_1');

// const showPicture_1 = document.getElementById('.show_mem');
const hidePicture_1 = document.getElementById('mem_2');
const hideDesc_1 = document.getElementById('desc_mem_2');

// const showPicture_2 = document.getElementById('.show_mem');
const hidePicture_2 = document.getElementById('mem_3');
const hideDesc_2 = document.getElementById('desc_mem_3');

// const showPicture_3 = document.getElementById('.show_mem');
const hidePicture_3 = document.getElementById('mem_4');
const hideDesc_3 = document.getElementById('desc_mem_4');

const buttonMem_1 = document.getElementById("but_1");
const buttonMem_2 = document.getElementById("but_2");
const buttonMem_3 = document.getElementById("but_3");
const buttonMem_4 = document.getElementById("but_4");

buttonMem_1.addEventListener('click', function(e){
    e.preventDefault();
    hidePicture.classList.remove('hide_mem');
    hideDesc.classList.remove('hide_mem');
    hidePicture_1.classList.add('hide_mem');
    hideDesc_1.classList.add('hide_mem');
    hidePicture_2.classList.add('hide_mem');
    hideDesc_2.classList.add('hide_mem');
    hidePicture_3.classList.add('hide_mem');
    hideDesc_3.classList.add('hide_mem');

    buttonMem_1.classList.add('active');
    buttonMem_2.classList.remove('active');
    buttonMem_3.classList.remove('active');
    buttonMem_4.classList.remove('active');
})

buttonMem_2.addEventListener('click', function(e){
    e.preventDefault();
    hidePicture_1.classList.remove('hide_mem');
    hideDesc_1.classList.remove('hide_mem');
    hidePicture.classList.add('hide_mem');
    hideDesc.classList.add('hide_mem');
    hidePicture_2.classList.add('hide_mem');
    hideDesc_2.classList.add('hide_mem');
    hidePicture_3.classList.add('hide_mem');
    hideDesc_3.classList.add('hide_mem');

    buttonMem_1.classList.remove('active');
    buttonMem_2.classList.add('active');
    buttonMem_3.classList.remove('active');
    buttonMem_4.classList.remove('active');
})

buttonMem_3.addEventListener('click', function(e){
    e.preventDefault();
    hidePicture_2.classList.remove('hide_mem');
    hideDesc_2.classList.remove('hide_mem');
    hidePicture.classList.add('hide_mem');
    hideDesc.classList.add('hide_mem');
    hidePicture_1.classList.add('hide_mem');
    hideDesc_1.classList.add('hide_mem');
    hidePicture_3.classList.add('hide_mem');
    hideDesc_3.classList.add('hide_mem');

    buttonMem_1.classList.remove('active');
    buttonMem_2.classList.remove('active');
    buttonMem_3.classList.add('active');
    buttonMem_4.classList.remove('active');
})

buttonMem_4.addEventListener('click', function(e){
    e.preventDefault();
    hidePicture_3.classList.remove('hide_mem');
    hideDesc_3.classList.remove('hide_mem');
    hidePicture.classList.add('hide_mem');
    hideDesc.classList.add('hide_mem');
    hidePicture_2.classList.add('hide_mem');
    hideDesc_2.classList.add('hide_mem');
    hidePicture_1.classList.add('hide_mem');
    hideDesc_1.classList.add('hide_mem');

    buttonMem_1.classList.remove('active');
    buttonMem_2.classList.remove('active');
    buttonMem_3.classList.remove('active');
    buttonMem_4.classList.add('active');
})
