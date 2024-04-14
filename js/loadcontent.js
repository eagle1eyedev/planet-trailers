document.querySelectorAll(".load_more").forEach((e)=>{
    let ischecked = false;
    e.addEventListener("click",()=>{
        if(!ischecked){
        e.parentElement.firstChild.innerText = e.parentElement.firstChild.innerText.replace("...","")
        e.previousElementSibling.hidden = false
        e.innerText = "Show Less"
        }
        else{
        e.parentElement.firstChild.innerText += "..."
        e.previousElementSibling.hidden = true
        e.innerText = "Load More"
        }
        ischecked = !ischecked
    });
})