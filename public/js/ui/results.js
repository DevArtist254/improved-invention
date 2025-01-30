import store from "../store/store";

class Results {
  #sideBar = document?.querySelector(".images__sec");
  #main = document?.getElementById("main");
  #sideTip = document?.getElementById("safety_tips");
  #window = window;
  #reportAbuse = document?.getElementById("reportAbuse");

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

    this.#window.addEventListener("scroll", () => {
      const parentRect = this.#sideBar.getBoundingClientRect();
      const sideBarRect = this.#sideTip.getBoundingClientRect();

      if (
        parentRect.top <= 20 &&
        parentRect.bottom - sideBarRect.height >= 20
      ) {
        this.#sideTip.classList.add("sticky");
      } else {
        this.#sideTip.classList.remove("sticky");
      }
    });
  }
}

const results = new Results();

export default results;
