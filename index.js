const textarea=document.getElementById("textarea")
function saveToLocalStorage(){
    localStorage.setItem("savedtext",textarea.value)
}
if(localStorage.setItem("savedtext")){
    textarea.value=localStorage.getItem("savedtext");
}
addEventListener("input",saveToLocalStorage);