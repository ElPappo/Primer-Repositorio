

const productos = [
    { nombre: "Camiseta", precio: 20, categoria: "Ropa" },
    { nombre: "Pantalón", precio: 35, categoria: "Ropa" },
    { nombre: "Zapatillas", precio: 50, categoria: "Calzado" },
    { nombre: "Bolso", precio: 25, categoria: "Accesorios" },
    { nombre: "Gorra", precio: 15, categoria: "Accesorios" },
    { nombre: "Sandalias", precio: 20, categoria: "Calzado" }
];

// Filtra los productos de la categoría "Ropa" y crea un nuevo array que contenga estos productos.

const Filtro = productos.filter(p => p.categoria === "Ropa");

console.log(`Filtros : `, Filtro );

// A partir del array original, calcula el precio total de todos los productos en la categoría "Calzado".

const Calzado = productos.filter(p => p.categoria === "Calzado");
const index: number = 0; 
const IniPrecio = Calzado.reduce((total, producto) => total + producto.precio, index);

console.log(`El precio de los Calzados son: ${IniPrecio}`);

// Genera un nuevo array que incluya los nombres de todos los productos con precios mayores a 20, en mayúsculas.

const ProMayorA20 = productos.filter(producto => producto.precio > 20);
productos.map(productos => productos.nombre.toLowerCase());
console.log(`Los productos mayores a 20 son:`, ProMayorA20);
