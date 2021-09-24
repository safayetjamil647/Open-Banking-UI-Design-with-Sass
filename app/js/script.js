
const btnHamburger= document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const fadeItems=document.querySelectorAll('.has-fade');
btnHamburger.addEventListener("click", myFunction); 
function myFunction() {
    console.log ("Hello World!");
    if(header.classList.contains('open')){
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');

    }
    else{
        header.classList.add('open');

        fadeItems.forEach(function(element){

            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

        
    }
}