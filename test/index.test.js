import { contador } from "../src/ejercicio1";
import { instancia } from "../src/ejercicio2";

describe('Ejercicio1', () => {
  it('debe aumentar el contador con el método siguiente', () => {
    contador.siguiente()

    expect(contador.valor).toEqual(1)
  })
})

describe('Ejercicio1', () => {
  it('debe definir una propiedad valor en 0', () => {
    expect(instancia.valor).toEqual(0)
  })

  it('debe aumentar el valor de la instancia con el método siguiente', () => {
    instancia.siguiente()

    expect(instancia.valor).toEqual(1)
  })
})