const ibox=document.getElementById("input-box");
const lbox=document.getElementById("items");
function add(){
if(ibox.value===''){
    alert("Enter some value")

}
else{
    let li=document.createElement("li");
    li.innerHTML=ibox.value;
    lbox.appendChild(li);
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
}
ibox.value="";
}
lbox.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("ch");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

