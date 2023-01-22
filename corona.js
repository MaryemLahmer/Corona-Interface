let addBtn=document.querySelector("button");
let input=document.querySelector("input");
let registerList=document.querySelector(".registered");
let vaccineList=document.querySelector(".vaccinated");
addBtn.addEventListener("click",register);

let i=0;let j=0;
input.addEventListener("keypress",function(e){
    if (e.key=="Enter"){
        register();
    }
});
function register(){
    if(input.value==""){
        alert("Name and Surname");
        return;
    }
    li=document.createElement("li");
    li.id="personne"+i;
    span=document.createElement("span");
    span.innerHTML=input.value;
    span.id=li.id+0;
    i++;
    cross=document.createElement("button");
    cross.classList.add("cross");
    cross.innerText="X";
    li.appendChild(span);
    li.appendChild(cross);
    registerList.appendChild(li);
    cross.addEventListener("click",function Move(e){
        let id=e.target.parentElement.id;
        let toMove=document.getElementById(id+0);
        liRegister=document.createElement("li");
        liRegister.id=id+j;j++
        crossRed=document.querySelector(".cross");
        crossRed.classList.add("crossRed");
        crossRed.removeEventListener("click",Move);
        crossRed.addEventListener("click",deleted);
        liRegister.appendChild(toMove);
        liRegister.appendChild(crossRed);
        vaccineList.appendChild(liRegister);
        document.getElementById(id).remove();
    });
    input.value="";
}

function deleted(e){
    let id=e.target.parentElement.id;
    document.getElementById(id).remove();
    
}