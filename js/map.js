var map = L.map('mijnmap').setView([51.316695, 4.559108], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.316695, 4.559108]).addTo(map)
    .bindPopup('this is where i live.')
    .openPopup();