const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const list = document.querySelector(".list");
const item = document.querySelector(".item");

const itemWidth = item.offsetWidth;

prev.addEventListener("click", () => {
  list.scrollBy({ left: -itemWidth, behavior: "smooth" });
});

next.addEventListener("click", () => {
  list.scrollBy({ left: itemWidth, behavior: "smooth" });
});
