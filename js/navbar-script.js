
const st = document.querySelectorAll(".hidden-menu-nav .st");
const navbar = document.querySelector("nav");
const myLinks = document.querySelectorAll(".links-list-nav .link-nav a")
const sections = document.querySelectorAll("section");

const myBars = document.querySelector(".d-block-nav")
const myUl = document.querySelector(".links-nav")

myBars.addEventListener("click" , ()=> {
    myUl.classList.toggle("active");
    st.forEach(s => {
        s.classList.toggle("w-40");
    });
})

myLinks.forEach(a => {
    a.addEventListener("click" , () => {
        myBars.click();
    })
});

window.onscroll = function () {
    let current;
    sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;    
    if (top >= offset - 200) {
      current = sec.getAttribute("id");
    }
    myLinks.forEach((a) => {
      a.classList.remove("active-nav");
      if (a.getAttribute("href") == `#${current}`) {
        a.classList.add("active-nav");
      }
    });
  });

  if (scrollY > 400) {
    navbar.classList.add("dark")
    }
    else {
        navbar.classList.remove("dark")
    }
};