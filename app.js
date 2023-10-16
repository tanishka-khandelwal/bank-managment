let saveel=document.getElementById("save-el");
let countel=document.getElementById("count-el");
let count=0;
function increment(){
    
    count=count+1;
    countel.innerText=count;
}
function save(){
    
    let countstr=count + " - ";
    saveel.innerText+=countstr;
    countel.innerText=0;
    count=0;
}
