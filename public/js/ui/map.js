class Location {
  #btn = document.getElementById("userLocation");
  #map = document.getElementById("map");

  displayMap() {
    this.#btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const locations = JSON.parse(this.#map.dataset.locations);

      console.log(locations);

      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    });
  }
}

export default new Location();