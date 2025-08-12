const productos = [
    {
        id: 1,
        nombre: "Pino marítimo",
        nombre_cientifico: "Pinus pinaster",
        precio: 5000,
        stock: 150,
        origen: "Exótica",
        altura_maxima: 35,
        presentacion: "Maceta 1 kg",
        foto: "./img/pino_maritimo.webp"
    },
    {
        id: 2,
        nombre: "Plátano",
        nombre_cientifico: "Platanus acerifolia",
        precio: 10000,
        stock: 40,
        origen: "Exótica",
        altura_maxima: 200,
        presentacion: "Maceta 3 kg",
        foto: "./img/platano.webp"
    },
    {
        id: 3,
        nombre: "Acacia melanoxylon",
        nombre_cientifico: "Acacia melanoxylon",
        precio: 7500,
        stock: 750,
        origen: "Exótica",
        altura_maxima: 20,
        presentacion: "Maceta 1 kg",
        foto: "./img/acacia_melanoxylon.webp"
    },
    {
        id: 4,
        nombre: "Liquidambar",
        nombre_cientifico: "Liquidambar styraciflua",
        precio: 15000,
        stock: 300,
        origen: "Exótica",
        altura_maxima: 25,
        presentacion: "Maceta 2 kg",
        foto: "./img/liquidambar.webp"
    },
    {
        id: 5,
        nombre: "Molle",
        nombre_cientifico: "Schinus fasciculatus",
        precio: 5000,
        stock: 650,
        origen: "Autóctona",
        altura_maxima: 15,
        presentacion: "Maceta 2 kg",
        foto: "./img/molle.webp"
    },
    {
        id: 6,
        nombre: "Azahar de monte",
        nombre_cientifico: "Aloysia gratissima",
        precio: 3000,
        stock: 350,
        origen: "Autóctona",
        altura_maxima: 3,
        presentacion: "Maceta 0,5 kg",
        foto: "./img/azahar_monte.webp"
    },
    {
        id: 7,
        nombre: "Zampa",
        nombre_cientifico: "Atriplex lampa",
        precio: 3000,
        stock: 275,
        origen: "Autóctona",
        altura_maxima: 1,
        presentacion: "Maceta 0,5 kg",
        foto: "./img/zampa.webp"
    },
    {
        id: 8,
        nombre: "Calden",
        nombre_cientifico: "Prosopis caldenia",
        precio: 10000,
        stock: 500,
        origen: "Autóctona",
        altura_maxima: 20,
        presentacion: "Maceta 2 kg",
        foto: "./img/calden.webp"
    },
    {
        id: 9,
        nombre: "Espinillo",
        nombre_cientifico: "Acacia caven",
        precio: 10000,
        stock: 1500,
        origen: "Autóctona",
        altura_maxima: 15,
        presentacion: "Maceta 2 kg",
        foto: "./img/espinillo.webp"
    },
    {
        id: 10,
        nombre: "Ciprés arizónica",
        nombre_cientifico: "Cupressus arizonica",
        precio: 5000,
        stock: 1750,
        origen: "Exótica",
        altura_maxima: 25,
        presentacion: "Maceta 1 kg",
        foto: "./img/cipres_arizonica.webp"
    },

    {
        id: 15,
        nombre: "Ciprés arizónica",
        nombre_cientifico: "Cupressus arizonica",
        precio: 5000,
        stock: 1750,
        origen: "Exótica",
        altura_maxima: 25,
        presentacion: "Maceta 1 kg",
        foto: "./img/cipres_arizonica.webp"
    }
];

// Exporta para uso en Node.js (backend)
if (typeof module !== "undefined" && module.exports) {
    module.exports = productos;
}

// y Para uso en navegador (frontend) - variable global
if (typeof window !== "undefined") {
    window.productos = productos;
}