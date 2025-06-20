const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

const barEl = document.querySelector(".fa-bars");
const  menuEl = document.querySelector(".memu");

barEl.addEventListener("click",() => {
  menuEl.classList.toggle(".show-menu")
})

tabs.addEventListener("click",function (e) {
  const id = e.target.dataset.id;

  if(id){
    btns.forEach(function(btn){
      btn.classList.remove("live");
      
    });
    e.target.classList.add("live")
    
    articles.forEach(function(article){
      article.classList.remove("live");
    });

    const element = document.getElementById(id);
     element.classList.add("live");

  }
});