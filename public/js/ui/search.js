class Search {
    #inputSearch = document.querySelector("#searchInput");
    #searchArea = document.querySelector(".nav__search");
    #select = document.querySelector(".nav__search--select");
    #search = document.querySelector("#search");

    handleSearch() {
        this.#search.addEventListener("submit", async (e) => {
          e.preventDefault();

          const formData = new FormData(search);

          if (formData.get("category") === "default") {
            formData.delete("category");
          }

          this.#inputSearch.value = "";
          this.#select.value = "default";

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
        });
    }

    handleAnimation() {
        this.#searchArea.addEventListener("click", () => {
          this.#select.style.width = "12.5rem";
          this.#inputSearch.style.marginTop = "initial";
        });

        this.#inputSearch.addEventListener("focusout", () => {
          this.#select.style.width = "0";
          this.#inputSearch.style.marginTop = "1rem";
        });
    }
}

export default new Search();