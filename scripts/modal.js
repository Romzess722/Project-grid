const modal = document.querySelector(".hero__btn")
const bdr = document.querySelector(".backdrop")
const close = document.querySelector(".close");


modal.addEventListener('click', () => {
  bdr.classList.remove("is-hidden");
})

close.addEventListener("click", () => {
  bdr.classList.add("is-hidden");
  
});