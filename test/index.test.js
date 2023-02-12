import { clonarArreglo, clonarObjeto, sumar, saludar } from "../src/ejercicio3";

describe("Ejercicio3", () => {
  it("clonarArreglo", () => {
    const arr = [1,2,3]
    const result = clonarArreglo(arr)

    expect(arr).toEqual(result);
    expect(arr).not.toBe(result);
  });

  it("clonarObjeto", () => {
    const obj = { nombre: 'Maria', edad: 20}
    const result = clonarObjeto(obj)

    expect(obj).toEqual(result);
    expect(obj).not.toBe(result);
  });

  it.each([
    [[1,2,3,4,5], 15],
    [[2, -1, 5,], 6]
  ])('debe sumar ', (parametros, total) => {
    const result = sumar(...parametros)

    expect(total).toEqual(result);
  });

  it.each([
    [undefined, 'Desconocido'],
    ['Maria', 'Maria']
  ])('debe saludar ', (parametro, expected) => {
    const result = saludar(parametro)

    expect(expected).toEqual(result);
  });
});
