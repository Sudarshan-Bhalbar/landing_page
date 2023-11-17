const menuBtn = document.querySelector("button.nav-toggle");
const menu = document.querySelector("div.nav-menu");
const closeBtn = document.querySelector("button.nav-close")


// console.log(menu , menuBtn)

menuBtn.addEventListener("click",()=>{
  menu.classList.remove("-top-96")
  menu.classList.add("top-0");
})
closeBtn.addEventListener("click",()=>{
  menu.classList.add("-top-96")
  menu.classList.remove("top-0");
})


const sr = ScrollReveal({
  distance:'90px',
  duration:3000,
})

sr.reveal('.home_data',{origin:'top',delay:400})
sr.reveal('.home_img',{origin:'bottom',delay:600})