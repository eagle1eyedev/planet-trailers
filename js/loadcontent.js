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

const trailer_title = document.getElementById("staticBackdropLabel")
		const trailer_source = document.getElementById("trailer_vid")
		document.querySelectorAll(".trailer").forEach((e)=>{
			e.addEventListener("click",()=>{
				trailer_title.innerText = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText
				trailer_source.src = e.href
			})
		})