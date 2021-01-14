//Display/hide nav bar
let menu=document.getElementById("menu");
let navBar=document.getElementById("nav-bar");
let content=document.getElementById("content");

menu.addEventListener("click", ()=>{
    if(navBar.style.display === "block"){
        navBar.style.display="none";
        content.style.paddingTop="2rem";
        content.style.position="static";
    }
    else{
        navBar.style.display="block";
        content.style.position="relative";
        content.style.top="27.5rem";
    }
})

content.addEventListener("click", ()=>{
    if(navBar.style.display === "block"){
        navBar.style.display="none";
        content.style.paddingTop="2rem";
        content.style.position="static";
    }
})
