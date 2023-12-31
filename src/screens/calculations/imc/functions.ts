import { ResultadoIMC, Sexo } from "./props"

export function calcularIMC(
  peso: number,
  altura: number,
  idade: number,
  sexo: Sexo
): ResultadoIMC {
  var imc = peso / (altura * altura)

  var diagnostico = ""
  if (idade >= 18) {
    if (sexo === Sexo.masculino) {
      if (imc < 16) {
        diagnostico = "Muito abaixo do peso"
      } else if (imc >= 16 && imc < 16.9) {
        diagnostico = "Abaixo do peso"
      } else if (imc >= 17 && imc < 18.4) {
        diagnostico = "Magreza moderada"
      } else if (imc >= 18.5 && imc < 24.9) {
        diagnostico = "Peso normal"
      } else if (imc >= 25 && imc < 29.9) {
        diagnostico = "Acima do peso"
      } else if (imc >= 30 && imc < 34.9) {
        diagnostico = "Obesidade Grau I"
      } else if (imc >= 35 && imc < 39.9) {
        diagnostico = "Obesidade Grau II"
      } else {
        diagnostico = "Obesidade Grau III"
      }
    } else if (sexo === Sexo.feminino) {
      if (imc < 16) {
        diagnostico = "Muito abaixo do peso"
      } else if (imc >= 16 && imc < 16.9) {
        diagnostico = "Abaixo do peso"
      } else if (imc >= 17 && imc < 18.4) {
        diagnostico = "Magreza moderada"
      } else if (imc >= 18.5 && imc < 24.9) {
        diagnostico = "Peso normal"
      } else if (imc >= 25 && imc < 29.9) {
        diagnostico = "Acima do peso"
      } else if (imc >= 30 && imc < 34.9) {
        diagnostico = "Obesidade Grau I"
      } else if (imc >= 35 && imc < 39.9) {
        diagnostico = "Obesidade Grau II"
      } else {
        diagnostico = "Obesidade Grau III"
      }
    } else {
      diagnostico = "Sexo não reconhecido"
    }
  } else {
    diagnostico = "IMC não aplicável para menores de 18 anos"
  }

  return {
    imc: parseFloat(imc.toFixed(2)),
    diagnostico: diagnostico,
  }
}
