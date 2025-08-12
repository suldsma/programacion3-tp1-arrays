/*
===============================================================================
PROGRAMACIÓN III - 2025 2do cuatrimestre
TECNICATURA UNIVERSITARIA EN DESARROLLO WEB
TP 1 JS Arrays - Gestión de Inventario de Plantas
===============================================================================
*/

console.log("🌱 SISTEMA DE GESTIÓN DE INVENTARIO DE PLANTAS 🌱");
console.log("=".repeat(60));

/*
===============================================================================
1. CONFIGURACIÓN INICIAL
===============================================================================
1) Instalar Node.js, ya que es el entorno de ejecución que utilizaremos.
2) Crear un nuevo archivo JavaScript (ej. gestionDatos.js).
3) Dentro de este archivo, declarar un array llamado productos (o libros, turnos, etc.) 
que contenga al menos 5 objetos JavaScript. Cada objeto debe representar un elemento con propiedades como id, nombre, precio y stock.
*/

let productos = [
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
    }
];

console.log("\n📋 INVENTARIO INICIAL:");
console.table(productos.map(p => ({
    ID: p.id,
    Nombre: p.nombre,
    Precio: `$${p.precio.toLocaleString()}`,
    Stock: p.stock,
    Origen: p.origen
})));

/*
===============================================================================
2. OPERACIONES BÁSICAS Y ACCESO
===============================================================================
1. Imprimir la longitud total del array productos.
2. Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice.
*/

console.log("\n📊 2. OPERACIONES BÁSICAS Y ACCESO");
console.log("-".repeat(50));

// 2.1 - Imprimir la longitud total del array productos.
console.log(`📏 Longitud total del array productos: ${productos.length}`);

// 2.2 - Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice
console.log(`🌿 Segundo elemento (índice 1): ${productos[1].nombre}`);
console.log(`🌿 Cuarto elemento (índice 3): ${productos[3].nombre}`);

/*
===============================================================================
3. RECORRIDO DEL ARRAY
===============================================================================
1. Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada elemento.
2. Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").
*/

console.log("\n🔄 3. RECORRIDO DEL ARRAY");
console.log("-".repeat(50));

// 3.1 - Recorrer el array productos utilizando un bucle for...of
// e imprimir el nombre y el precio de cada elemento.
console.log("\n📝 3.1 - Recorrido con bucle for...of:");
for (const producto of productos) {
    console.log(`   • ${producto.nombre} - $${producto.precio.toLocaleString()}`);
}

// 3.2 - Recorre el array productos utilizando el método forEach() 
// e imprimir la misma información que en el punto anterior, 
// pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").
console.log("\n📝 3.2 - Recorrido con método forEach():");
productos.forEach((producto, index) => {
    console.log(`   ${(index + 1).toString().padStart(2)}. Producto: ${producto.nombre}, Precio: $${producto.precio.toLocaleString()}`);
});

/*
===============================================================================
4. MANIPULACIÓN DE ARRAYS
===============================================================================

8. Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados por precio en orden decreciente. (investigar método sort()).
*/

console.log("\n🔧 4. MANIPULACIÓN DE ARRAYS");
console.log("-".repeat(50));

// Guardamos el estado original para comparar
const longitudOriginal = productos.length;
console.log(`🏁 Estado inicial: ${longitudOriginal} productos`);

// 4.1 - Agregar dos elementos al final con push()
console.log("\n➕ 4.1 - Agregando dos elementos con push():");
const productosAgregados = [
    {
        id: 11,
        nombre: "Eucalipto blanco",
        nombre_cientifico: "Eucalyptus viminalis",
        precio: 3000,
        stock: 200,
        origen: "Exótica",
        altura_maxima: 45,
        presentacion: "Maceta 1 kg",
        foto: "./img/eucalipto_blanco.webp"
    },
    {
        id: 12,
        nombre: "Eucalipto medicinal",
        nombre_cientifico: "Eucalyptus cinerea",
        precio: 3000,
        stock: 300,
        origen: "Exótica",
        altura_maxima: 40,
        presentacion: "Maceta 1 kg",
        foto: "./img/eucalipto_medicinal.webp"
    }
];

productosAgregados.forEach(producto => {
    productos.push(producto);
    console.log(`   ✅ Agregado: ${producto.nombre} (ID: ${producto.id})`);
});
console.log(`   📊 Nueva longitud: ${productos.length}`);

// 4.2 - Eliminar el último elemento del array productos utilizando pop().
console.log("\n➖ 4.2 - Eliminando último elemento con pop():");
const elementoEliminado = productos.pop();
console.log(`   ✅ Eliminado: ${elementoEliminado.nombre} (ID: ${elementoEliminado.id})`);
console.log(`   📊 Nueva longitud: ${productos.length}`);

// 4.3 - Agregar un nuevo elemento al inicio del array productos utilizando unshift().
console.log("\n⬆️➕ 4.3 - Agregando elemento al inicio con unshift():");
const nuevoInicio = {
    id: 13,
    nombre: "Pino tosquero",
    nombre_cientifico: "Pinus halepensis",
    precio: 2500,
    stock: 500,
    origen: "Exótica",
    altura_maxima: 30,
    presentacion: "Maceta 1 kg",
    foto: "./img/pino_tosquero.webp"
};

productos.unshift(nuevoInicio);
console.log(`   ✅ Agregado al inicio: ${nuevoInicio.nombre} (ID: ${nuevoInicio.id})`);
console.log(`   📊 Nueva longitud: ${productos.length}`);

// 4.4 - Elimina el primer elemento del array productos utilizando shift().
console.log("\n⬇️➖ 4.4 - Eliminando primer elemento con shift():");
const primerElementoEliminado = productos.shift();
console.log(`   ✅ Eliminado del inicio: ${primerElementoEliminado.nombre} (ID: ${primerElementoEliminado.id})`);
console.log(`   📊 Nueva longitud: ${productos.length}`);

// 4.5 - Crear un nuevo array llamado productosConStock que contenga solo los 
// elementos del array productos donde el stock sea mayor que 0 utilizando filter().
console.log("\n🔍 4.5 - Creando array productosConStock con filter():");
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log(`   ✅ Productos con stock disponible: ${productosConStock.length} de ${productos.length}`);
console.log("   📦 Lista de productos con stock:");
productosConStock.forEach((producto, index) => {
    console.log(`      ${(index + 1).toString().padStart(2)}. ${producto.nombre}: ${producto.stock.toLocaleString()} unidades`);
});

// 4.6 - Crear un nuevo array llamado nombresProductos que contenga solo los nombres 
// de todos los productos en el inventario utilizando map().
console.log("\n📝 4.6 - Creando array nombresProductos con map():");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(`   ✅ Extraídos ${nombresProductos.length} nombres de productos:`);
console.log(`   📋 [${nombresProductos.join(', ')}]`);

// 4.7 - Encontrar y guardar en una variable el primer producto en productos que tenga un
//  id específico (ej. id:3) utilizando find(). Si no lo encuentra, indicar que no existe.
console.log("\n🔎 4.7 - Buscando producto con ID: 3 usando find():");
const idBuscado = 3;
const productoEncontrado = productos.find(producto => producto.id === idBuscado);

if (productoEncontrado) {
    console.log("   ✅ Producto encontrado:");
    console.log(`      • ID: ${productoEncontrado.id}`);
    console.log(`      • Nombre: ${productoEncontrado.nombre}`);
    console.log(`      • Nombre científico: ${productoEncontrado.nombre_cientifico}`);
    console.log(`      • Precio: $${productoEncontrado.precio.toLocaleString()}`);
    console.log(`      • Stock: ${productoEncontrado.stock.toLocaleString()} unidades`);
    console.log(`      • Origen: ${productoEncontrado.origen}`);
} else {
    console.log(`   ❌ Producto con ID: ${idBuscado} no existe en el inventario`);
}

// 4.8 - Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados 
// por precio en orden decreciente. (investigar método sort()).
console.log("\n📊 4.8 - Creando array productosOrdenados por precio (descendente):");
const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("   ✅ Productos ordenados por precio (mayor a menor):");
productosOrdenados.forEach((producto, index) => {
    const posicion = (index + 1).toString().padStart(2);
    const precio = `$${producto.precio.toLocaleString()}`.padStart(8);
    console.log(`      ${posicion}. ${producto.nombre.padEnd(20)} ${precio}`);
});

/*
===============================================================================
VERIFICACIÓN FINAL Y ESTADÍSTICAS
===============================================================================
*/

console.log("\n📈 VERIFICACIÓN FINAL - ESTADO ACTUAL DEL INVENTARIO");
console.log("=".repeat(65));

// Estadísticas del inventario
const totalProductos = productos.length;
const stockTotal = productos.reduce((total, producto) => total + producto.stock, 0);
const valorInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
const precioPromedio = productos.reduce((total, producto) => total + producto.precio, 0) / totalProductos;

console.log(`📦 Total de productos en inventario: ${totalProductos}`);
console.log(`📊 Stock total de unidades: ${stockTotal.toLocaleString()}`);
console.log(`💰 Valor total del inventario: $${valorInventario.toLocaleString()}`);
console.log(`📊 Precio promedio: $${Math.round(precioPromedio).toLocaleString()}`);

// Productos por origen
const autóctonas = productos.filter(p => p.origen === "Autóctona").length;
const exóticas = productos.filter(p => p.origen === "Exótica").length;
console.log(`🌱 Plantas autóctonas: ${autóctonas} | Plantas exóticas: ${exóticas}`);

// Array final
console.log("\n📋 INVENTARIO FINAL:");
console.table(productos.map(p => ({
    ID: p.id,
    Nombre: p.nombre,
    Precio: `$${p.precio.toLocaleString()}`,
    Stock: p.stock.toLocaleString(),
    Origen: p.origen
})));

console.log("\n✅ RESUMEN DE OPERACIONES REALIZADAS:");
console.log("━".repeat(50));
console.log("✅ 2.1 - Longitud inicial y acceso por índice");
console.log("✅ 3.1 - Recorrido con bucle for...of");
console.log("✅ 3.2 - Recorrido con método forEach()");
console.log("✅ 4.1 - Agregado de elementos con push()");
console.log("✅ 4.2 - Eliminación con pop()");
console.log("✅ 4.3 - Agregado al inicio con unshift()");
console.log("✅ 4.4 - Eliminación del inicio con shift()");
console.log("✅ 4.5 - Filtrado de productos con stock con filter()");
console.log("✅ 4.6 - Extracción de nombres con map()");
console.log("✅ 4.7 - Búsqueda por ID con find()");
console.log("✅ 4.8 - Ordenamiento por precio con sort()");

console.log("\n🎉 ¡Gestión de inventario completada exitosamente! 🌱");
console.log("=".repeat(60));