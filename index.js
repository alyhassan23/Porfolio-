let btn = document.querySelector(".menu-button");

btn.addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
});

let closeBtn = document.querySelector(".close-menu");
closeBtn.addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
});
