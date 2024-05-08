let redBar=0;
let greenBar=0;
let bluebar=0;
let alphaBar=1;
let rgbBar;
let bars=document.querySelectorAll('input')
bars.forEach((bar)=>{
    bar.onchange=()=>{
        rgbBar=document.querySelector('.rgbBar');
        if(bar.getAttribute('class')==="redBar"){
            redBar=bar.value
        }
        else if(bar.getAttribute('class')==="greenBar"){
            greenBar=bar.value
        }
        else if(bar.getAttribute('class')==="blueBar"){
            bluebar=bar.value

        }
        else{
            alphaBar=bar.value
        }
        rgbBar.innerHTML=`<p>rgba(${redBar},${greenBar},${bluebar},${alphaBar})</p>`
        document.body.style.background=`rgba(${redBar},${greenBar},${bluebar},${alphaBar})`
        textColor()
    }
    
})

function textColor(){
    let spanEle=document.querySelectorAll('span')
    for(span of spanEle){
        span.style.color=`rgba(${redBar},${greenBar},${bluebar},${alphaBar})`
    }
}
