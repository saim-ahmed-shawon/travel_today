const sidebarOpen = document.querySelector("#linkList");
const menuBtn = document.querySelector("#menu");
const crossBtn = document.querySelector("#cross");
const lis = document.querySelectorAll("li.liTab");
const overlay = document.querySelector("div.overlay");

menuBtn.addEventListener("click",()=>{
    sidebarOpen.classList.toggle("sideBar-open")
    overlay.classList.toggle("hidden")
})
overlay.addEventListener("click",()=>{
    sidebarOpen.classList.toggle("sideBar-open")
    overlay.classList.toggle("hidden")
    
})
lis.forEach(li => {
    li.addEventListener("click",()=>{
        sidebarOpen.classList.toggle("sideBar-open")
        overlay.classList.toggle("hidden")
        })
    });