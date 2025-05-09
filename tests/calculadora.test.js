const calculadora = require("../models/calculadora.js")

test("deveria somar 2 com 2 dando resultado 4", () => {
  resultado = calculadora.soma(2, 2);

  expect(resultado).toBe(4)
})
