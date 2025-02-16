class Popup {
    #slideIndex = 1;
    #slides = document?.getElementsByClassName("popup__content--sliders");
    #prev = document?.getElementById("prev");
    #next = document?.getElementById("next");
    #tn = document?.querySelector(".thumbnail");

    constructor() {
        this.showSlides(this.#slideIndex);
    }

    currentSlide() {
        this.#tn.addEventListener("click", (e) => {
            console.log(Number(e.target.id));
            this.showSlides(this.#slideIndex = Number(e.target.id));
        })
    }

    nextSlide(n) {
        this.showSlides(this.#slideIndex += n);
    }

    showSlides(n) {
        if(n > this.#slides.length) { this.#slideIndex = 1 }
        if(n < 1) {this.#slideIndex = this.#slides.length }

        for(let i = 0; i < this.#slides.length; i++) {
            this.#slides[i].style.display = "none";
        }

        this.#slides[this.#slideIndex - 1].style.display = "block";
    }

    prevBtn() {
        this.#prev.addEventListener("click", () => {
            this.nextSlide(-1);
        })
    }

    nextBtn() {
        this.#next.addEventListener("click", () => {
            this.nextSlide(1);
        })
    }
}

export default new Popup();