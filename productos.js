// productos.js
const productos = [
    { id: 1, nombre: "Pino marítimo", precio: 5000, stock: 150, foto: "./img/pino_maritimo.jpg" },
    { id: 2, nombre: "Plátano", precio: 10000, stock: 40, foto: "./img/platano.jpg" },
    { id: 3, nombre: "Acacia melanoxylon", precio: 7500, stock: 750, foto: "./img/acacia_melanoxylon.jpg" },
    { id: 4, nombre: "Liquidambar", precio: 15000, stock: 300, foto: "./img/liquidambar.jpg" },
    { id: 5, nombre: "Molle", precio: 5000, stock: 650, foto: "./img/molle.jpg" },
    { id: 6, nombre: "Azahar de monte", precio: 3000, stock: 350, foto: "./img/azahar_monte.jpg" },
    { id: 7, nombre: "Zampa", precio: 3000, stock: 275, foto: "./img/zampa.jpg" },
    { id: 8, nombre: "Calden", precio: 10000, stock: 500, foto: "./img/calden.jpg" },
    { id: 9, nombre: "Espinillo", precio: 10000, stock: 1500, foto: "./img/espinillo.jpg" },
    { id: 10, nombre: "Ciprés arizónica", precio: 5000, stock: 1750, foto: "./img/cipres_arizonica.jpg" }
];

// Exportar para Node.js
if (typeof module !== "undefined") {
    module.exports = productos;
}
