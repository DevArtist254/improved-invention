class Location {
  #btn = document.getElementById("userLocation");
  #map = document.getElementById("map");

  displayMap() {
    this.#btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const locations = JSON.parse(this.#map.dataset.locations);

      console.log(locations);

      const map = L.map("map").setView(
        [locations[0].coordinates[1], locations[0].coordinates[0]],
        13
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      locations.forEach(location => {
        L.marker([location.coordinates[1], location.coordinates[0]], {
          title: `${location.description}`,
        }).addTo(map);
      });

      // L.popup()
      //   .setLatLng([locations[0].coordinates[1], locations[0].coordinates[0]])
      //   .setContent("<p>Hello world!<br />This is a nice popup.</p>")
      //   .openOn(map);
    });
  }
}

export default new Location();