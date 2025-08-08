console.log("=== TRABAJO PRÁCTICO N*1 ARRAYS JS ===\n");

// 1. CONFIGURACIÓN INICIAL
// Declarar un array llamado productos (o libros, turnos, etc.) que contenga al menos 5 objetos JavaScript.

let productos = [
    { id: 1, nombre: "JavaScript para Principiantes", precio: 25500, stock: 12 },
    { id: 2, nombre: "Python: Guía Completa", precio: 37800, stock: 5 },
    { id: 3, nombre: "Bases de Datos con SQL", precio: 26200, stock: 0 },
    { id: 4, nombre: "Fundamentos de HTML y CSS", precio: 34500, stock: 20 },
    { id: 5, nombre: "Algoritmos y Estructuras de Datos", precio: 28900, stock: 8 }
];

console.log("Array inicial de productos:");
console.log(productos);
console.log("\n");

// 2. OPERACIONES BÁSICAS Y ACCESO

console.log("=== OPERACIONES BÁSICAS Y ACCESO ===");

// 1. Imprimir la longitud total del array productos
console.log(`Longitud total del array: ${productos.length}`);

// 2. Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice.
console.log(`Segundo elemento (índice 1): ${productos[1].nombre}`);
console.log(`Cuarto elemento (índice 3): ${productos[3].nombre}`);
console.log("\n");

// 3. RECORRIDO DEL ARRAY

console.log("=== RECORRIDO DEL ARRAY ===");

// 1. Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada elemento.
console.log("Recorrido con for...of:");
for (const producto of productos) {
    console.log(`   ${producto.nombre} - $${producto.precio}`);
}

console.log("");

// 2. Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").
console.log("Recorrido con forEach():");
productos.forEach(producto => {
    console.log(`   Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

console.log("\n");

// 4. MANIPULACIÓN DE ARRAYS

console.log("=== MANIPULACIÓN DE ARRAYS ===");

// 1. Agregar dos elementos al final del array productos utilizando push().
console.log("➕ Agregando dos productos al final con push():");
productos.push(
    { id: 6, nombre: "Desarrollo Web Full Stack", precio: 12000, stock: 4 },
    { id: 7, nombre: "Introducción a C++", precio: 16500, stock: 9 }
);
console.log(`   Longitud después de push(): ${productos.length}`);

// 2. Eliminar el último elemento del array productos utilizando pop().
console.log("➖ Eliminando último elemento con pop():");
const eliminado = productos.pop();
console.log(`   Elemento eliminado: ${eliminado.nombre}`);
console.log(`   Longitud después de pop(): ${productos.length}`);

// 3. Agregar un nuevo elemento al inicio del array productos utilizando unshift().
console.log("➕ Agregando producto al inicio con unshift():");
productos.unshift({ id: 8, nombre: "Machine Learning con Python", precio: 15000, stock: 3 });
console.log(`   Longitud después de unshift(): ${productos.length}`);

// 4. Elimina el primer elemento del array productos utilizando shift().
console.log("➖ Eliminando primer elemento con shift():");
const primerEliminado = productos.shift();
console.log(`   Elemento eliminado: ${primerEliminado.nombre}`);
console.log(`   Longitud después de shift(): ${productos.length}`);

console.log("");

// 5. Crear un nuevo array llamado productosConStock que contenga solo los elementos del array productos donde el stock sea mayor que 0 utilizando filter().)
console.log("Creando array productosConStock con filter() (stock > 0):");
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log("   Productos con stock:");
productosConStock.forEach(producto => {
    console.log(`   - ${producto.nombre} (Stock: ${producto.stock})`);
});

console.log("");

// 6. Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los productos en el inventario utilizando map().
console.log("Creando array nombresProductos con map():");
const nombresProductos = productos.map(producto => producto.nombre);
console.log("   Lista de nombres:", nombresProductos);

console.log("");

// 7. Encontrar y guardar en una variable el primer producto en productos que tenga un id específico (ej. id:3) utilizando find(). Si no lo encuentra, indicar que no existe.
console.log("Buscando producto con id: 3 usando find():");
const productoBuscado = productos.find(producto => producto.id === 3);
if (productoBuscado) {
    console.log(`   ✅ Producto encontrado: ${productoBuscado.nombre} - $${productoBuscado.precio}`);
} else {
    console.log("   ❌ Producto no encontrado");
}

console.log("");

// 8. Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados por precio en orden decreciente. (investigar método sort()).
console.log("Creando array productosOrdenados por precio (decreciente) con sort():");
const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
console.log("   Productos ordenados por precio (mayor a menor):");
productosOrdenados.forEach((producto, index) => {
    console.log(`   ${index + 1}. ${producto.nombre} - $${producto.precio}`);
});

console.log("\n");


// VERIFICACIÓN FINAL
// Imprimir en consola el array original o creado para verificar las operaciones realizadas.

console.log("=== VERIFICACIÓN FINAL ===");
console.log("Array productos final:");
console.table(productos);

console.log("\n RESUMEN DE OPERACIONES REALIZADAS:");
console.log(`   • Array original: 5 productos`);
console.log(`   • Después de manipulaciones: ${productos.length} productos`);
console.log(`   • Productos con stock: ${productosConStock.length} productos`);
console.log(`   • Total de nombres extraídos: ${nombresProductos.length}`);
console.log(`   • Producto encontrado por ID: ${productoBuscado ? 'Sí' : 'No'}`);
console.log(`   • Array ordenado creado: ${productosOrdenados.length} productos`);

console.log("\n✅ ¡Trabajo Práctico completado exitosamente!");