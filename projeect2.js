let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
          const userchoice=choice.getAttribute("id");
          //console.log("chio");
          playgame(userchoice);
    });
});

let msg=document.querySelector("#msg");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
   const randi= Math.floor(Math.random()*3);
   return options[randi];
};
const draw=()=>{
msg.innerText="DRAW";
msg.style.backgroundColor="black";
};
const usrescorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const showwinner=(userwin)=>{
    if(userwin){
        user_score++;
        usrescorepara.innerText=user_score;
        msg.innerText="YOU WIN";
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compscorepara.innerText=comp_score;
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
    }

};
const playgame=(userchoice)=>{
 const compchoice=gencompchoice();
 if(userchoice===compchoice){
      draw();
 }
 else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"? false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors"? false:true;
    }
    else if(userchoice==="scissors"){
        userwin=compchoice==="rock"? false:true;
    }
    showwinner(userwin);
 }
 
};  
// scoreshow();
