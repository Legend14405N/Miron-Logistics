let ham = document.getElementsByClassName('hamburger');
let body = document.body;
let icon = document.getElementById('icon')
let icon2 = document.getElementById('icon2')
    // function themeThree() {
    //     console.log(nav)
    //     // x.classList.toggle("change");
    //     top.classList.toggle("nav-B2");
    //     mak.style.backgroundColor = 'green'
    // }
    icon.addEventListener("click", 
    function(){
        document.getElementById("navB").classList.add('navB2')
    })
    icon2.addEventListener("click", 
    function(){
        document.getElementById("navB").classList.remove('navB2')
    })