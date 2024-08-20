const CarritoCompra = require("../index")

describe('CarritoCompra', () => {
    let carrito;
  
    beforeEach(() => {
      carrito = new CarritoCompra();
      carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
      carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
      carrito.agregarProducto({ nombre: 'Producto 3', precio: 30 });
    });
  
    test('agregarProducto', () => {
      expect(carrito.productos.length).toBe(3);
    });
  
    test('calcularTotal', () => {
      expect(carrito.calcularTotal()).toBe(60);
    });
  
    test('aplicarDescuento', () => {
      expect(carrito.aplicarDescuento(10)).toBe(54);
      expect(carrito.aplicarDescuento(20)).toBe(48);
      expect(carrito.aplicarDescuento(50)).toBe(30);
    });
  });