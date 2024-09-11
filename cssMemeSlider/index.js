const showPicture = document.getElementById('.show_mem');
const hidePicture = document.getElementById('.hide_mem');
const buttonMem1 = document.getElementById("button_mem1");
const buttonMem2 = document.getElementById("button_mem2");
const buttonMem3 = document.getElementById("button_mem3");
const buttonMem4 = document.getElementById("button_mem4");

showPicture.addEventListener('clike', function(){
    showPicture.classList.add('show_mem');
    hidePicture.classList.remove('hide_mem');
})

hidePicture.addEventListener('clike', function(){
    hidePicture.classList.remove('show_mem');
    showPicture.classList.add('hide_mem');
})