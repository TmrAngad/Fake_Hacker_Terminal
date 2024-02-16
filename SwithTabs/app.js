//tabs project

//tabs varibale 

let tabs = document.querySelectorAll('.tab')

//tabs container variable
let tabsCon = document.querySelectorAll('.tabsCon')

tabs[0].addEventListener('click',()=>{
    tabs[0].classList.add('background')
    tabs[1].classList.remove('background')
    tabs[2].classList.remove('background')
    tabsCon[0].style.display="block"
    tabsCon[1].style.display="none"
    tabsCon[2].style.display="none"
})
tabs[1].addEventListener('click',()=>{
    tabs[1].classList.add('background')
    tabs[0].classList.remove('background')
    tabs[2].classList.remove('background')
    tabsCon[1].style.display="block"
    tabsCon[0].style.display="none"
    tabsCon[2].style.display="none"
})
tabs[2].addEventListener('click',()=>{
    tabs[2].classList.add('background')
    tabs[0].classList.remove('background')
    tabs[1].classList.remove('background')
    tabsCon[2].style.display="block"
    tabsCon[0].style.display="none"
    tabsCon[1].style.display="none"
})