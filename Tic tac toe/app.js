//Tic toc toe

//massage variables 

let msgCon=document.querySelector('.msgCon')
let msgPara=document.querySelector('.msgPara')
let newGameBtn=document.querySelector('.NewGameBtn')
let resetBtn=document.querySelector('.resetbtn')
let restartBtn=document.querySelector('.restartbtn')

// button variable
let buttons=document.querySelectorAll('.box')
let switchbut=1;
let count=0

const clickbut=()=>{
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(switchbut==1){
                button.innerHTML="X"
                button.classList.add('xFont')
                switchbut=0
            }
            else{
                button.innerHTML="O"
                button.classList.add('oFont')
                switchbut=1
            }
         
            button.disabled = true;
            count+=1
            // console.log(count)
            showGame()
        })
    })
}
clickbut()

const showMsgCon=()=>{
    msgCon.style.display="block"
    msgPara.innerHTML="Game Draw ! Try Again"
    count=0
}
const showGame=()=>{
    if(count==9){
        showMsgCon()
    }
}

const game=()=>{
    buttons.forEach((button)=>{
        button.innerHTML=""
        button.classList.remove('xFont')
        button.classList.remove('oFont')
        button.disabled=false
        msgCon.style.display="none"
    })
}
newGameBtn.addEventListener('click',()=>{
    game()
})
resetBtn.addEventListener('click',()=>{
    game()
})
restartBtn.addEventListener('click',()=>{
    game()
})


const winPattern=[
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
const desableBox=()=>{
    for (box of buttons){
        box.disabled=true;
    }
}

const showMsg=(winner)=>{
    msgCon.style.display="block"
    msgPara.innerHTML=`Congratulations ! Winner is ${winner}`
    desableBox();
    count=0
    
}
const letsWin=()=>{
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            for(let pattern of winPattern){
                let pos1=buttons[pattern[0]].innerHTML
                let pos2=buttons[pattern[1]].innerHTML
                let pos3=buttons[pattern[2]].innerHTML 
                // console.log(pos1,pos2,pos3)

                if(pos1!="" && pos2!="" && pos3!=""){
                    if(pos1==pos2 && pos2==pos3){
                        showMsg(pos1)
                    }
                }
            }
        })
    })
}
letsWin()