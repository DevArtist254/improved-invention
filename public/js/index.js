const inputSearch = document.querySelector("#searchInput");
const searchArea = document.querySelector(".nav__search");
const select = document.querySelector(".nav__search--select");

const search = document.querySelector("#search");

searchArea.addEventListener("click", () => {
  select.style.width = "12.5rem";
  inputSearch.style.marginTop = "initial";
});

inputSearch.addEventListener("focusout", () => {
  select.style.width = "0";
  inputSearch.style.marginTop = "1rem";
});

search.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(search);

  if(formData.get("category") === "default") {
    formData.delete("category");
  }

  inputSearch.value = "";
  select.value = "default";

  try {
    const res = await fetch(
      `/results?${new URLSearchParams(formData).toString()}`
    );

   window.location.replace(
     `/results?${new URLSearchParams(formData).toString()}`
   );
  } catch (error) {
    console.log(error);
  }
})

console.log("Hello world");


