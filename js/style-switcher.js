const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', ()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})

window.addEventListener('scroll', ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

const dayNight = document.querySelector(".mode");
window.addEventListener('load', () =>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('.mode').innerText.toggle('Light Mode')
    }
    else{
        dayNight.querySelector('.mode').innerText.toggle('Dark Mode')
    }
})