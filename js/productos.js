const productos = [
    {id:1, nombre: "Coca Cola", precio:400, imagen:"cocacola.webp"},
    {id:2, nombre: "Pepsi", precio:420, imagen:"pepsi.jpg"},
    {id:3, nombre: "Manaos", precio:260, imagen:"Manaos.jpg"},
    {id:4, nombre: "Cunnington", precio:240, imagen:"cunnington.png"},
    {id:5, nombre: "Seven-up", precio:390, imagen:"sevenup.png"},
    {id:6, nombre: "Baggio", precio:190, imagen:"baggio.jpg"},
    {id:7, nombre: "Paso de los toros", precio:350, imagen:"pasodelostoros.jpg"},
    {id:8, nombre: "Schwepper", precio:410, imagen:"scheweppes.webp"},
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);


