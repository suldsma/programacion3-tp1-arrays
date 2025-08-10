/*
===============================================================================
PROGRAMACIÓN III - 2025 2do cuatrimestre
TECNICATURA UNIVERSITARIA EN DESARROLLO WEB
TP 1 JS Arrays - Gestión de Inventario de Plantas
===============================================================================

*/

console.log("🌱 SISTEMA DE GESTIÓN DE INVENTARIO DE PLANTAS 🌱");
console.log("=" .repeat(60));

/*
===============================================================================
1. CONFIGURACIÓN INICIAL
===============================================================================
*/

// Array productos con todas las plantas del inventario original
let productos = [
    {
        id: 1,
        nombre: "Pino marítimo",
        nombre_cientifico: "Pinus pinaster",
        precio: 5000,
        stock: 0,
        origen: "Exótica",
        altura_maxima: 35,
        presentacion: "Maceta 1 kg",
        foto: "./img/pino_maritimo.jpg"
    },
    {
        id: 2,
        nombre: "Plátano",
        nombre_cientifico: "Platanus acerifolia",
        precio: 10000,
        stock: 0,
        origen: "Exótica",
        altura_maxima: 40,
        presentacion: "Maceta 3 kg",
        foto: "./img/platano.jpg"
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
        foto: "./img/acacia_melanoxylon.jpg"
    },
    {
        id: 4,
        nombre: "Liquidambar",
        nombre_cientifico: "Liquidambar styraciflua",
        precio: 15000,
        stock: 0,
        origen: "Exótica",
        altura_maxima: 25,
        presentacion: "Maceta 2 kg",
        foto: "./img/liquidambar.jpg"
    },
    {
        id: 5,
        nombre: "Molle",
        nombre_cientifico: "Schinus fasciculatus",
        precio: 5000,
        stock: 750,
        origen: "Autóctona",
        altura_maxima: 15,
        presentacion: "Maceta 2 kg",
        foto: "./img/molle.jpg"
    },
    {
        id: 6,
        nombre: "Azahar de monte",
        nombre_cientifico: "Aloysia gratissima",
        precio: 3000,
        stock: 750,
        origen: "Autóctona",
        altura_maxima: 3,
        presentacion: "Maceta 0,5 kg",
        foto: "./img/azahar_monte.jpg"
    },
    {
        id: 7,
        nombre: "Zampa",
        nombre_cientifico: "Atriplex lampa",
        precio: 3000,
        stock: 0,
        origen: "Autóctona",
        altura_maxima: 1,
        presentacion: "Maceta 0,5 kg",
        foto: "./img/zampa.jpg"
    },
    {
        id: 8,
        nombre: "Calden",
        nombre_cientifico: "Prosopis caldenia",
        precio: 10000,
        stock: 5000,
        origen: "Autóctona",
        altura_maxima: 20,
        presentacion: "Maceta 2 kg",
        foto: "./img/calden.jpg"
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
        foto: "./img/espinillo.jpg"
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
        foto: "./img/cipres_arizonica.jpg"
    }
];

console.log("\n📋 INVENTARIO INICIAL:");
console.table(productos);

/*
===============================================================================
2. OPERACIONES BÁSICAS Y ACCESO
===============================================================================
*/

console.log("\n 2. OPERACIONES BÁSICAS Y ACCESO");
console.log("-".repeat(40));

// 2.1 - Imprimir la longitud total del array productos
console.log(`Longitud total del array productos: ${productos.length}`);

// 2.2 - Acceder e imprimir el nombre del segundo y cuarto elemento por índice
console.log(`🌿 Segundo elemento (índice 1): ${productos[1].nombre}`);
console.log(`🌿 Cuarto elemento (índice 3): ${productos[3].nombre}`);

/*
===============================================================================
3. RECORRIDO DEL ARRAY
===============================================================================
*/

console.log("\n 3. RECORRIDO DEL ARRAY");
console.log("-".repeat(40));

// 3.1 - Recorrer con for...of e imprimir nombre y precio
console.log(" 3.1 - Recorrido con bucle for...of:");
for (const producto of productos) {
    console.log(`   ${producto.nombre} - $${producto.precio.toLocaleString()}`);
}

// 3.2 - Recorrer con forEach() con frase descriptiva
console.log("\n 3.2 - Recorrido con método forEach():");
productos.forEach(producto => {
    console.log(`   Producto: ${producto.nombre}, Precio: $${producto.precio.toLocaleString()}`);
});

/*
===============================================================================
4. MANIPULACIÓN DE ARRAYS
===============================================================================
*/

console.log("\n  4. MANIPULACIÓN DE ARRAYS");
console.log("-".repeat(40));

// 4.1 - Agregar dos elementos al final con push()
console.log("➕ 4.1 - Agregando dos elementos con push():");
productos.push({
    id: 11,
    nombre: "Eucalipto blanco",
    nombre_cientifico: "Eucalyptus viminalis",
    precio: 3000,
    stock: 200,
    origen: "Exótica",
    altura_maxima: 45,
    presentacion: "Maceta 1 kg",
    foto: "./img/eucalipto_blanco.jpg"
});

productos.push({
    id: 12,
    nombre: "Eucalipto medicinal",
    nombre_cientifico: "Eucalyptus cinerea",
    precio: 3000,
    stock: 300,
    origen: "Exótica",
    altura_maxima: 40,
    presentacion: "Maceta 1 kg",
    foto: "./img/eucalipto_medicinal.jpg"
});

console.log(`   ✅ Agregados 2 productos. Nueva longitud: ${productos.length}`);

// 4.2 - Eliminar el último elemento con pop()
console.log("\n➖ 4.2 - Eliminando último elemento con pop():");
const eliminado = productos.pop();
console.log(`   ✅ Eliminado: ${eliminado.nombre} (ID: ${eliminado.id})`);

// 4.3 - Agregar elemento al inicio con unshift()
console.log("\n⬆➕  4.3 - Agregando elemento al inicio con unshift():");
productos.unshift({
    id: 13,
    nombre: "Pino tosquero",
    nombre_cientifico: "Pinus halepensis",
    precio: 2500,
    stock: 500,
    origen: "Exótica",
    altura_maxima: 30,
    presentacion: "Maceta 1 kg",
    foto: "./img/pino_tosquero.jpg"
});
console.log(`   ✅ Elemento agregado al inicio. Nueva longitud: ${productos.length}`);

// 4.4 - Eliminar primer elemento con shift()
console.log("\n⬇➖  4.4 - Eliminando primer elemento con shift():");
const primerEliminado = productos.shift();
console.log(`   ✅ Eliminado: ${primerEliminado.nombre} (ID: ${primerEliminado.id})`);

// 4.5 - Crear array productosConStock con filter()
console.log("\n 4.5 - Creando array productosConStock con filter():");
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log(`   ✅ Productos con stock disponible: ${productosConStock.length}`);
console.log("   📁 Lista de productos con stock:");
productosConStock.forEach(producto => {
    console.log(`      • ${producto.nombre}: ${producto.stock} unidades`);
});

// 4.6 - Crear array nombresProductos con map()
console.log("\n 4.6 - Creando array nombresProductos con map():");
const nombresProductos = productos.map(producto => producto.nombre);
console.log("   ✅ Nombres de todos los productos:");
nombresProductos.forEach((nombre, index) => {
    console.log(`      ${index + 1}. ${nombre}`);
});

// 4.7 - Encontrar producto con ID específico usando find()
console.log("\n 4.7 - Buscando producto con ID: 3 usando find():");
const productoEncontrado = productos.find(producto => producto.id === 3);
if (productoEncontrado) {
    console.log("   ✅ Producto encontrado:");
    console.log(`      • ID: ${productoEncontrado.id}`);
    console.log(`      • Nombre: ${productoEncontrado.nombre}`);
    console.log(`      • Precio: $${productoEncontrado.precio.toLocaleString()}`);
    console.log(`      • Stock: ${productoEncontrado.stock} unidades`);
} else {
    console.log("   ❌ Producto con ID: 3 no existe");
}

// 4.8 - Crear array productosOrdenados por precio descendente con sort()
console.log("\n 4.8 - Creando array productosOrdenados por precio (descendente):");
const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("   ✅ Productos ordenados por precio (mayor a menor):");
productosOrdenados.forEach((producto, index) => {
    console.log(`      ${(index + 1).toString().padStart(2)}. ${producto.nombre} - $${producto.precio.toLocaleString()}`);
});

/*
===============================================================================
VERIFICACIÓN FINAL
===============================================================================
*/

console.log("\n VERIFICACIÓN FINAL - ESTADO ACTUAL DEL ARRAY");
console.log("=".repeat(60));
console.log(` Total de productos en inventario: ${productos.length}`);
console.log(" Array productos después de todas las operaciones:");
console.table(productos);

console.log("\n RESUMEN DE OPERACIONES REALIZADAS:");
console.log("✅ Longitud inicial y acceso por índice");
console.log("✅ Recorridos con for...of y forEach()");
console.log("✅ Agregado de elementos con push()");
console.log("✅ Eliminación con pop()");
console.log("✅ Agregado al inicio con unshift()");
console.log("✅ Eliminación del inicio con shift()");
console.log("✅ Filtrado de productos con stock con filter()");
console.log("✅ Extracción de nombres con map()");
console.log("✅ Búsqueda por ID con find()");
console.log("✅ Ordenamiento por precio con sort()");

console.log("\n🌱 ¡Gestión de inventario completada exitosamente! 🌱");