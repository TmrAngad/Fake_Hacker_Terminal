        //Masseging app

        //msg input variable 
        let leftMsgCon;
        let rightMsgCon;    
        let leftmsgData=document.querySelector('.leftMsgCon');
        let rightmsgData=document.querySelector('.rightMsgCon');

        //msg output variable 
        let leftCon;
        let rightCon;

        // msg send button variable

        let leftbtn = document.querySelector('.leftbtn')
        let rightbtn = document.querySelector('.rightbtn')

        const leftMsg = () => {
            leftMsgCon = document.querySelector('.leftMsgCon')
            rightCon = document.querySelector('.rightReadMsgCon')
            let leftshowCon = `
            <div class="msgChildCon borderBox addPadding fontFamily style="margin-left: 6em;background-color: black;color: green;">
                    ${leftMsgCon.value}
                </div>
            
            `
            let rightshowCon = `
            <div class="msgChildCon borderBox addPadding fontFamily" style="margin-left: 1em;background-color: antiquewhite;color: black;">
                ${leftMsgCon.value}
                </div>
            
            `
            leftCon = document.querySelector('.leftReadMsgCon').innerHTML += leftshowCon;
            leftMsgCon.value = ""
            rightCon = document.querySelector('.rightReadMsgCon').innerHTML += rightshowCon;

        }
        const rightMsg = () => {
            rightMsgCon = document.querySelector('.rightMsgCon')
            let leftshowCon = `
            <div class="msgChildCon borderBox addPadding fontFamily style="margin-left: 6em;background-color: black;color: green;">
                    ${rightMsgCon.value}
                </div>
            
            `
            let rightshowCon = `
            <div class="msgChildCon borderBox addPadding fontFamily" style="margin-left: 1em;background-color: antiquewhite;color: black;">
                ${rightMsgCon.value}
                </div>`
            leftCon = document.querySelector('.leftReadMsgCon').innerHTML += rightshowCon;
            rightCon = document.querySelector('.rightReadMsgCon').innerHTML += leftshowCon;
            rightMsgCon.value = "";
        }

        leftbtn.addEventListener('click', () => {
            if(leftmsgData.value==""){
                alert("Plese enter some massages...")
            }
            else{
               leftMsg()
            }
        })
        rightbtn.addEventListener('click', () => {
            if(rightmsgData.value==""){
                alert("Plese enter some massages...")
            }
            else{
               rightMsg()
            }
        })