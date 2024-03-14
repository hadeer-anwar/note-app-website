let cnt=-1;
let con=document.querySelector(".container");
let notes=document.querySelectorAll(".box");

function show()
{
    con.innerHTML=localStorage.getItem("notes");
    console.log("local storage");

}
show();
function update()
{
    localStorage.setItem("notes",con.innerHTML);
}

function addNote()
{
    cnt=(cnt+1)%5;
    let txt=document.createElement("p");
    let mg=document.createElement("img");
    let col="white";
    switch (cnt)
    {
        case 0:col="#9218fd3d";break;
        case 1:col="#be9886";break;
        case 2:col="#a5cbaa";break;
        case 3:col="#778d7a";break;
        case 4:col="#b48068";break;
    }
    txt.style.backgroundColor=col;
    txt.className="box";
    txt.setAttribute("contenteditable","true");
    mg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC";

    con.appendChild(txt).appendChild(mg);
}
con.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if(e.target.tagName==="P")
    {
        notes=notes=document.querySelectorAll(".box");
        notes.forEach(nt=>{
            nt.onkeyup=function()
            {
                update();
            }
        })
    }
})

