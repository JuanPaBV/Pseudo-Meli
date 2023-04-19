let productos = [
    {srcImagen: 'imagenes/medium07_1.png', nombre: 'Televisor LG 32'},
    {srcImagen: 'imagenes/lg50.png', nombre: 'Televisor LG 50'},
    {srcImagen: 'imagenes/samsung55.png', nombre: 'Televisor Samsung 55'},
];

for (let producto of productos) {
    let texto = document.createTextNode(producto.nombre)

    let strong = document.createElement('strong');
    strong.appendChild(texto);

    let imagen = document.createElement('img');
    imagen.src = producto.srcImagen;

    let link = document.createElement('a');
    link.href = 'producto.html'
    link.appendChild(imagen)
    link.appendChild(strong);

    let contenedor = document.createElement('div');
    contenedor.className = 'preview-producto';
    contenedor.appendChild(link);

    document.getElementById('listado-productos').appendChild(contenedor);
}
