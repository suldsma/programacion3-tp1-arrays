/*
1. Configuración Inicial:
1)
Instalar Node.js, ya que es el entorno de ejecución que utilizaremos.
2)
Crear un nuevo archivo JavaScript (ej. gestionDatos.js).
3)
Dentro de este archivo, declarar un array llamado productos (o libros, turnos, etc.) que contenga al menos 
5 objetos JavaScript. Cada objeto debe representar un elemento con propiedades como id, nombre, precio y stock.
*/

let productos = [
    {
        Id: 1,
        Nombre_vulgar: "Pino marítimo ",
        Nombre_cientifico: "Pinus pinaster",
        Origen: "Exótica",
        Altura_maxima: 35,
        Presentacion: "Maceta 1 kg",
        Precio: 5000,
        Stock: 0,
        Foto1: "./img/Pinus pinaster.jpg",
        Foto2: "./img/Pinus pinaster 2.jpg",
        Foto3: "./img/Pinus pinaster 3.jpg",
    },
    {
        
        Id: 2,
        Nombre_vulgar: "Plátano ",
        Nombre_cientifico: "Platanus acerifolia",
        Origen: "Exótica",
        Altura_maxima: 40,
        Presentacion: "Maceta 3 kg",
        Precio: 10000,
        Stock: 0,
        Foto1: "./img/Platanus acerifolia.jpg",
        Foto2: "./img/Platanus acerifolia 2.jpg",
        Foto3: "./img/Platanus acerifolia 3.jpg", 
    },
    {
        Id: 3,
        Nombre_vulgar: "Acacia melanoxylon ",
        Nombre_cientifico: "Acacia melanoxylon",
        Origen: "Exótica",
        Altura_maxima: 20,
        Presentacion: "Maceta 1 kg",
        Precio: 7500,
        Stock: 750,
        Foto1: "./img/Acacia melanoxylon.jpg",
        Foto2: "./img/Acacia melanoxylon 2.jpg",
        Foto3: "./img/Acacia melanoxylon 3.jpg", 
    },
    {
        Id: 4,
        Nombre_vulgar: "Liquidambar ",
        Nombre_cientifico: "Liquidambar styraciflua",
        Origen: "Exótica",
        Altura_maxima: 25,
        Presentacion: "Maceta 2 kg",
        Precio: 15000,
        Stock: 0,
        Foto1: "./img/Liquidambar styraciflua.jpg",
        Foto2: "./img/Liquidambar styraciflua 2.jpg",
        Foto3: "./img/Liquidambar styraciflua 3.jpg"
    },
    {
        Id: 5,
        Nombre_vulgar: "Molle ",
        Nombre_cientifico: "Schinus fasciculatus",
        Origen: "Autóctona",
        Altura_maxima: 15,
        Presentacion: "Maceta 2 kg",
        Precio: 5000,
        Stock: 750,
        Foto1: "./img/Schinus fasciculatus.jpg",
        Foto2: "./img/Schinus fasciculatus 2.jpg",
        Foto3: "./img/Schinus fasciculatus 3.jpg"
    },
    {
        Id: 6,
        Nombre_vulgar: "Azahar de monte ",
        Nombre_cientifico: "Aloysia gratissima",
        Origen: "Autóctona",
        Altura_maxima: 3,
        Presentacion: "Maceta 0,5 kg",
        Precio: 3000,
        Stock: 750,
        Foto1: "./img/Aloysia gratissima.jpg",
        Foto2: "./img/Aloysia gratissima 2.jpg",
        Foto3: "./img/Aloysia gratissima 3.jpg"
    },
    {
        Id: 7,
        Nombre_vulgar: "Zampa ",
        Nombre_cientifico: "Atriplex lampa",
        Origen: "Autóctona",
        Altura_maxima: 1,
        Presentacion: "Maceta 0,5 kg",
        Precio: 3000,
        Stock: 0,
        Foto1: "./img/Atriplex lampa.jpg",
        Foto2: "./img/Atriplex lampa 2.jpg",
        Foto3: "./img/Atriplex lampa 3.jpg"
    },
    {
        Id: 8,
        Nombre_vulgar: "Calden ",
        Nombre_cientifico: "Prosopis caldenia",
        Origen: "Autóctona",
        Altura_maxima: 20,
        Presentacion: "Maceta 2 kg",
        Precio: 10000,
        Stock: 5000,
        Foto1: "./img/Prosopis caldenia.jpg",
        Foto2: "./img/Prosopis caldenia 2.jpg",
        Foto3: "./img/Prosopis caldenia 3.jpg",
    },
    {
        Id: 9,
        Nombre_vulgar: "Espinillo ",
        Nombre_cientifico: "Acacia caven",
        Origen: "Autóctona",
        Altura_maxima: 15,
        Presentacion: "Maceta 2 kg",
        Precio: 10000,
        Stock: 1500,
        Foto1: "./img/Acacia caven.jpg",
        Foto2: "./img/Acacia caven 2.jpg",
        Foto3: "./img/Acacia caven 3.jpg"
    },
    {
        Id: 10,
        Nombre_vulgar: "Ciprés arizónica ",
        Nombre_cientifico: "Cupressus arizonica",
        Origen: "Exótica",
        Altura_maxima: 25,
        Presentacion: "Maceta 1 kg",
        Precio: 5000,
        Stock: 1750,
        Foto1: "./img/Cupressus arizonica.jpg",
        Foto2: "./img/Cupressus arizonica 2.jpg",
        Foto3: "./img/Cupressus arizonica 3.jpg"
    },
    {
        Id: 11,
        Nombre_vulgar: "Ciprés lusitánica ",
        Nombre_cientifico: "Cupressus lusitanica",
        Origen: "Exótica",
        Altura_maxima: 25,
        Presentacion: "Maceta 1 kg",
        Precio: 5000,
        Stock: 5050,
        Foto1: "./img/Cupressus lusitánica.jpg",
        Foto2: "./img/Cupressus lusitánica 2.jpg",
        Foto3: "./img/Cupressus lusitánica 3.jpg"
    },
    {
        Id: 12,
        Nombre_vulgar: "Tuya ",
        Nombre_cientifico: "Thuja occidentalis",
        Origen: "Exótica",
        Altura_maxima: 15,
        Presentacion: "Maceta 1 kg",
        Precio: 5000,
        Stock: 2750,
        Foto1: "./img/Thuja occidentalis.jpg",
        Foto2: "./img/Thuja occidentalis 2.jpg",
        Foto3: "./img/Thuja occidentalis 3.jpg"
    },
    {
        Id: 13,
        Nombre_vulgar: "Ciprés piramidal ",
        Nombre_cientifico: "Cupressus sempervirens",
        Origen: "Exótica",
        Altura_maxima: 35,
        Presentacion: "Maceta 1 kg",
        Precio: 5000,
        Stock: 1750,
        Foto1: "./img/Cupressus sempervirens.jpg",
        Foto2: "./img/Cupressus sempervirens 2.jpg",
        Foto3: "./img/Cupressus sempervirens 3.jpg"
    },
]

/*
2. Operaciones Básicas y Acceso:
1
Imprimir la longitud total del array productos.
2
Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice.
*/

console.log(productos.length);
console.log(productos[1].Nombre_vulgar);
console.log(productos[3].Nombre_vulgar);


/*
3. Recorrido del Array:
1.
Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada elemento.
2.
Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el punto 
anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").
*/

for (const plantas of productos) {
    console.log(`Especie: ${plantas.Nombre_vulgar} (${plantas.Nombre_científico}). Precio ${plantas.Precio}`) 
}

console.log()

productos.forEach(e => {
    console.log(`La especie ${e.Nombre_vulgar} (${e.Nombre_científico}) tiene un precio de ${e.Precio}`)
});

/*
4. Manipulación de Arrays:
1.
Agregar dos elementos al final del array productos utilizando push().
*/

productos.push({
    Id: 14,
    Nombre_vulgar: "Eucaliptus blanco",
    Nombre_cientifico: "Eucaliptus viminalis",
    Origen: "Exótica",
    Altura_maxima: 45,
    Presentacion: "Maceta 1 kg",
    Precio: 3000,
    Stock: 200,
    Foto1: "./img/Eucaliptus viminalis.jpg",
    Foto2: "./img/Eucaliptus viminalis 2.jpg",
    Foto3: "./img/Eucaliptus viminalis 3.jpg",
})

productos.push({
    Id: 15,
    Nombre_vulgar: "Eucaliptus medicinal",
    Nombre_cientifico: "Eucaliptus cinerea",
    Origen: "Exótica",
    Altura_maxima: 40,
    Presentacion: "Maceta 1 kg",
    Precio: 3000,
    Stock: 300,
    Foto1: "./img/Eucaliptus cinerea.jpg",
    Foto2: "./img/Eucaliptus cinerea 2.jpg",
    Foto3: "./img/Eucaliptus cinerea 3.jpg",
})

/*
2.
Eliminar el último elemento del array productos utilizando pop().
*/

const eliminado_pop = productos.pop();
console.log();
console.log(`Se a borrado ${eliminado_pop.Nombre_vulgar} (${eliminado_pop.Nombre_cientifico})`);

/*
3.
Agregar un nuevo elemento al inicio del array productos utilizando unshift().
*/

const new_length = productos.unshift({
    Id: 16,
    Nombre_vulgar: "Pino tosquero",
    Nombre_cientifico: "Pinus halepensis",
    Origen: "Exótica",
    Altura_maxima: 30,
    Presentacion: "Maceta 1 kg",
    Precio: 2500,
    Stock: 500,
    Foto1: "./img/Pinus halepensis.jpg",
    Foto2: "./img/Pinus halepensis 2.jpg",
    Foto3: "./img/Pinus halepensis 3.jpg",
})

console.log();
console.log(`Longitud actual array productos: ${new_length}`);


/*
4.
Elimina el primer elemento del array productos utilizando shift().
*/

const eliminado_shift = productos.shift()

console.log();
console.log(`Se a borrado ${eliminado_shift.Nombre_vulgar} (${eliminado_shift.Nombre_cientifico})`);


/*
5.
Crear un nuevo array llamado productosConStock que contenga solo los elementos 
del array productos donde el stock sea mayor que 0 utilizando filter().
*/

const productos_con_stock = productos.filter(producto => producto.Stock > 0);
console.log();
console.log(productos_con_stock);

//Lista productos con stock
let mensaje = "Tienen stock " + productos_con_stock.length + " productos: "
let nombres_stock =[]
productos_con_stock.map(producto => nombres_stock.push(
    producto.Nombre_vulgar + "(" + producto.Nombre_cientifico + ")"
));
mensaje += nombres_stock.join(", ")
console.log(mensaje);

/*
6.
Crear un nuevo array llamado nombresProductos que contenga solo los nombres de 
todos los productos en el inventario utilizando map().
*/
const array_nombres = []
//Guarda cada uno como objeto
productos.map(producto => array_nombres.push({
    Nombre: producto.Nombre_vulgar + "(" + producto.Nombre_cientifico + ")"
}));

console.log();
console.log(array_nombres);

/*
7.
Encontrar y guardar en una variable el primer producto en productos que tenga 
un id específico (ej. id:3) utilizando find(). Si no lo encuentra, indicar que 
no existe.
*/

let id_5 = productos.find(producto => producto.Id === 5)

console.log();
console.log(id_5);


/*
8.
Crear un nuevo array llamado productosOrdenados que contenga los productos 
ordenados por precio en orden decreciente. (investigar método sort()).
*/

let productos_Ordenados = productos
productos_Ordenados.sort((a, b) => b.Precio - a.Precio);

console.log();
console.log(productos_Ordenados);

let mensaje_precio = "Lista de precios ordenada: "
let nombresxPrecio =[]
productos_Ordenados.map(producto => nombresxPrecio.push(
    producto.Nombre_vulgar + "(" + producto.Nombre_cientifico + ") Precio: " + producto.Precio 
));
mensaje_precio += nombresxPrecio.join(", ")
console.log(mensaje_precio);



/*
Imprimir en consola el array original o creado para verificar las operaciones 
realizadas.
*/

console.log(productos);