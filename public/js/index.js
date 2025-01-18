const inputSearch = document.querySelector("#searchInput");
const searchArea = document.querySelector(".nav__search");
const select = document.querySelector(".nav__search--select");

searchArea.addEventListener("click", () => {
  select.style.width = "12.5rem";
  inputSearch.style.marginTop = "initial";
});

inputSearch.addEventListener("focusout", () => {
  select.style.width = "0";
  inputSearch.style.marginTop = "1rem";
});

console.log("Hello world");

