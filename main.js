// change nav bar color on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

// show/hide faq answer

const faq = document.querySelectorAll('.faq');

faq.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open'); 
        //change icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className= "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
})

// show menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display  ="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block";
    location.reload();
    
}
closeBtn.addEventListener('click',closeNav);

