// Toogle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger diketik
document.querySelector('#menu') .onclick =()=> {
    navbarNav.classList.toggle('active');
};

//klik luar slidebar
const hamburger = document.querySelector('#menu');

document.addEventListener ('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})