let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#btn")
let newgamebtn =document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn0= true;
let count=0;
const winPattern =[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box click")
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X"
            turn0=true;
            
        }
        box.disabled=true;
        checkwinner();
        count++;
        let isWinner = checkwinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
    });
    console.log(count);
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame= ()=>{
    trun0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner = (winner)=>{
    msg.innerText=`winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes();
    
}
const checkwinner= ()=>{
    for(pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val ===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
 reset.addEventListener("click",resetgame)
newgamebtn.addEventListener("click", resetgame)
