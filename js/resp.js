let navbar=document.querySelector('.navbar');
let navlist=document.querySelector('.nav-list');
let rightnav=document.querySelector('.rightnav');
let burger=document.querySelector('.burger');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('height-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    
})