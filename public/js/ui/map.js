class Location {
  #btn = document.getElementById("sellersLocations");
  #map = document.getElementById("map");
  #locations = JSON.parse(this.#map.dataset.locations);

  displayMap() {
    this.#btn.addEventListener("click", async (e) => {
     e.preventDefault();
     
     console.log(this.#locations);

    const map = L.map("map").setView([51.505, -0.09], 13);

     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
       maxZoom: 19,
       attribution:
         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
     }).addTo(map);
    })
  }
}

export default new Location();