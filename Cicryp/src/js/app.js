const BurgerBtn = document.querySelector('.fa-bars');
const CloseBtn = document.querySelector('.fa-xmark');
const MobileMenu = document.querySelector('.mobile-menu')
const Discover = document.getElementById('discover');
const Sublist = document.querySelector('.sublist');

BurgerBtn.addEventListener("click", () => {
    console.log('salam');
    MobileMenu.style.transform = 'translateX(0)';
})
CloseBtn.addEventListener("click", () => {
    console.log('salam');
    MobileMenu.style.transform = 'translateX(-385px)';
})


Discover.addEventListener("click", () => {
    console.log('salam');
    Sublist.classList.toggle('active')
})



// const FocusDiv = document.querySelectorAll('.focusit');

// for (let i = 0; i < FocusDiv.length; i++) {
//     FocusDiv[i].addEventListener("click",()=>{
//         console.log('salam');
//         FocusDiv[i].style.backgroundColor = '#2A3441'
//     })
// }


const acc = document.querySelectorAll('.click');
const info = document.querySelectorAll('.expand');
const caret = document.querySelectorAll('.caret');

if (acc) {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click",()=>{
            info[i].classList.toggle("active-acc");
            caret[i].classList.toggle("active-rotate");
        })
    }
}