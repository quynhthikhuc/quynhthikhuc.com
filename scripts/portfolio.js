let all=document.getElementById("all");
let graphicDesignCategory=document.getElementById("graphic-design");
let uiCategory=document.getElementById("ui-ux");

let graphicDesign=document.getElementsByClassName("graphic-design");
let ui=document.getElementsByClassName("ui-ux");

all.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="block";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="block";
    }
})

graphicDesignCategory.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="block";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="none";
    }
})

uiCategory.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="none";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="block";
    }
})

