
class Results {
  #sideBar = document?.querySelector(".sidebar__content");
  #main = document?.querySelector(".sidebar");
  #window = window;

  windowAnimation() {
    this.#window.addEventListener("scroll", () => {
      const parentRect = this.#main.getBoundingClientRect();
      const sidebarRect = this.#sideBar.getBoundingClientRect();

      if (
        parentRect.top <= 20 &&
        parentRect.bottom - sidebarRect.height >= 20
      ) {
        this.#sideBar.classList.add("sticky");
      } else {
        this.#sideBar.classList.remove("sticky");
      }
    });

  }
}

const results = new Results();

export default results;
