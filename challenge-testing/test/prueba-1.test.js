const CarritoCompra = require("../index");

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('El carrito se inicializa vacío', () => {
        expect(carrito.productos).toEqual([]);
    });

    test('Agregar un producto al carrito', () => {
        const producto = { nombre: 'Camisa', precio: 20 };
        carrito.agregarProducto(producto);
        expect(carrito.productos).toHaveLength(1);
        expect(carrito.productos[0]).toEqual(producto);
    });

    test('Calcular el total de la compra', () => {
        const producto1 = { nombre: 'Camisa', precio: 20 };
        const producto2 = { nombre: 'Pantalón', precio: 30 };
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(50);
    });

    test('Aplicar descuento al total de la compra', () => {
        const producto1 = { nombre: 'Camisa', precio: 20 };
        const producto2 = { nombre: 'Pantalón', precio: 30 };
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(10)).toBe(45); //10% de descuento
    });
});
