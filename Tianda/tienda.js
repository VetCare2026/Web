// Array con 50 productos enfocados en mascotas (VetCare) organizados por categoría
const productos = [
    // --- ALIMENTACIÓN ---
    { id: 1, nombre: "Comida Seca Perro Adulto 15kg", categoria: "Alimentación", precio: 45, imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500" },
    { id: 2, nombre: "Alimento Húmedo Gato Lote x6", categoria: "Alimentación", precio: 15, imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500" },
    { id: 3, nombre: "Snacks Dentales para Perros", categoria: "Alimentación", precio: 8, imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=500" },
    { id: 4, nombre: "Comida Cachorro Raza Grande", categoria: "Alimentación", precio: 38, imagen: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500" },
    { id: 5, nombre: "Alimento Gato Esterilizado", categoria: "Alimentación", precio: 32, imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500" },
    { id: 6, nombre: "Premios Naturales de Pollo", categoria: "Alimentación", precio: 6, imagen: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=500" },
    { id: 7, nombre: "Semillas para Aves Domésticas", categoria: "Alimentación", precio: 10, imagen: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=500" },
    { id: 8, nombre: "Heno Orgánico para Conejos", categoria: "Alimentación", precio: 12, imagen: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500" },
    { id: 9, nombre: "Alimento Flotante para Peces", categoria: "Alimentación", precio: 7, imagen: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500" },
    { id: 10, nombre: "Suplemento Vitamínico Canino", categoria: "Alimentación", precio: 22, imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500" },
    { id: 11, nombre: "Comida Húmeda Perro Senior", categoria: "Alimentación", precio: 18, imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" },
    { id: 12, nombre: "Malta para Gatos (Bolas de pelo)", categoria: "Alimentación", precio: 11, imagen: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500" },
    { id: 13, nombre: "Galletas Integrales Perro", categoria: "Alimentación", precio: 5, imagen: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=500" },

    // --- LIMPIEZA ---
    { id: 14, nombre: "Arena Aglomerante Gato 10kg", categoria: "Limpieza", precio: 16, imagen: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500" },
    { id: 15, nombre: "Champú Neutro Perro 500ml", categoria: "Limpieza", precio: 14, imagen: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500" },
    { id: 16, nombre: "Bolsas Biodegradables Heces x100", categoria: "Limpieza", precio: 9, imagen: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=500" },
    { id: 17, nombre: "Empapadores Entrenadores x30", categoria: "Limpieza", precio: 20, imagen: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500" },
    { id: 18, nombre: "Toallitas Húmedas Limpiadoras", categoria: "Limpieza", precio: 7, imagen: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=500" },
    { id: 19, nombre: "Eliminador Enzimático de Olores", categoria: "Limpieza", precio: 18, imagen: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500" },
    { id: 20, nombre: "Acondicionador Desenredante Pelaje", categoria: "Limpieza", precio: 13, imagen: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500" },
    { id: 21, nombre: "Champú Seco en Espuma Gato", categoria: "Limpieza", precio: 12, imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500" },
    { id: 22, nombre: "Limpiador de Auricular Mascotas", categoria: "Limpieza", precio: 10, imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500" },
    { id: 23, nombre: "Limpia Patas Portátil de Silicona", categoria: "Limpieza", precio: 15, imagen: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500" },

    // --- JUGUETES ---
    { id: 24, nombre: "Pelota de Goma Resistente", categoria: "Juguetes", precio: 8, imagen: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500" },
    { id: 25, nombre: "Rascador Torre para Gato", categoria: "Juguetes", precio: 55, imagen: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500" },
    { id: 26, nombre: "Juguete Cuerda Dental Perro", categoria: "Juguetes", precio: 6, imagen: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=500" },
    { id: 27, nombre: "Ratón de Peluche con Catnip", categoria: "Juguetes", precio: 5, imagen: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500" },
    { id: 28, nombre: "Frisbee Volador Suave", categoria: "Juguetes", precio: 10, imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" },
    { id: 29, nombre: "Túnel Plegable para Gatos", categoria: "Juguetes", precio: 22, imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500" },
    { id: 30, nombre: "Juguete Interactivo Dispensador", categoria: "Juguetes", precio: 19, imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=500" },
    { id: 31, nombre: "Peluche Chillón Perro Cachorro", categoria: "Juguetes", precio: 11, imagen: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=500" },
    { id: 32, nombre: "Caña con Plumas para Gato", categoria: "Juguetes", precio: 7, imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500" },
    { id: 33, nombre: "Rueda de Ejercicio Hamster", categoria: "Juguetes", precio: 12, imagen: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500" },
    { id: 34, nombre: "Hueso Masticable de Nailon", categoria: "Juguetes", precio: 9, imagen: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=500" },
    { id: 35, nombre: "Circuito de Pelotas Gato", categoria: "Juguetes", precio: 25, imagen: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500" },

    // --- CUIDADOS ---
    { id: 36, nombre: "Cepillo Deslanador Perro/Gato", categoria: "Cuidados", precio: 18, imagen: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500" },
    { id: 37, nombre: "Cortaúñas Ergonómico con Seguro", categoria: "Cuidados", precio: 11, imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500" },
    { id: 38, nombre: "Arnés Antipull Talla M", categoria: "Cuidados", precio: 24, imagen: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500" },
    { id: 39, nombre: "Correa Extensible 5 metros", categoria: "Cuidados", precio: 20, imagen: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500" },
    { id: 40, nombre: "Cama Ortopédica Grande", categoria: "Cuidados", precio: 60, imagen: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=500" },
    { id: 41, nombre: "Transportadora Rígida Aprobada", categoria: "Cuidados", precio: 48, imagen: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500" },
    { id: 42, nombre: "Collar Antiparasitario 7 Meses", categoria: "Cuidados", precio: 28, imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500" },
    { id: 43, nombre: "Comedero Antivoracidad", categoria: "Cuidados", precio: 14, imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500" },
    { id: 44, nombre: "Bebedero Fuente Automática", categoria: "Cuidados", precio: 35, imagen: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500" },
    { id: 45, nombre: "Bálsamo Protector para Huellas", categoria: "Cuidados", precio: 12, imagen: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500" },
    { id: 46, nombre: "Manta Térmica Lavable", categoria: "Cuidados", precio: 17, imagen: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=500" },
    { id: 47, nombre: "Cinta Antiparasitaria Felina", categoria: "Cuidados", precio: 23, imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500" },
    { id: 48, nombre: "Cepillo Dental Doble Cabezal", categoria: "Cuidados", precio: 7, imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=500" },
    { id: 49, nombre: "Bozal de Malla Respirable", categoria: "Cuidados", precio: 13, imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" },
    { id: 50, nombre: "Ropa Impermeable para Lluvia", categoria: "Cuidados", precio: 26, imagen: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500" }
];

// Función para mostrar los productos en el grid del HTML
function mostrarProductos(lista) {
    const catalogoGrid = document.querySelector(".catalogo-grid");
    
    if (!catalogoGrid) {
        console.error("No se encontró el elemento .catalogo-grid en el HTML");
        return;
    }

    catalogoGrid.innerHTML = ""; // Limpia el catálogo

    if (lista.length === 0) {
        catalogoGrid.innerHTML = "<p>No hay productos disponibles en esta categoría.</p>";
        return;
    }

    lista.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto-card"); // Clase estándar para dar formato en CSS
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
            <h3>${producto.nombre}</h3>
            <p class="categoria-tag">${producto.categoria}</p>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
        `;
        catalogoGrid.appendChild(tarjeta);
    });
}

// Función para filtrar por categorías (conectada con el menú lateral Sidebar)
function filtrarProductos(categoria) {
    if (categoria === 'todos') {
        mostrarProductos(productos);
    } else {
        const productosFiltrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(productosFiltrados);
    }
}

// Función básica para simular la adición al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        alert(`¡Añadido! ${producto.nombre} por $${producto.precio}`);
    }
}

// Cargar todos los productos al renderizar el documento
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
});