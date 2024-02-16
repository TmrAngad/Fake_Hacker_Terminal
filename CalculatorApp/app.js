//Calculator App

// buttons variables 

let buttons=document.querySelectorAll('.intbut')
let clearBut=document.querySelector('.clearBut')
let cutBut=document.querySelector('.cutBut')
let eqBut=document.querySelector('.equal')

//input variable
let intval=document.querySelector('input')

//take input from button into input container

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        intval.value+=button.innerHTML
    })
})

// lets solve it 

eqBut.addEventListener('click',()=>{
    let solveVal=eval(intval.value)
    intval.value=solveVal
})

// lets clear the value of input container

clearBut.addEventListener('click',()=>{
    intval.value=""
})


// lets cut single charactor of input container
let index=0
cutBut.addEventListener('click',()=>{
    intval.value=intval.value.substring(0,intval.value.length-1)
    
})

