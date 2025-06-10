const display = document.getElementById("display");
const resposta = document.getElementById("resposta");

let expressao = "";

const digitos = [
  "zero", "um", "dois", "tres", "quatro",
  "cinco", "seis", "sete", "oito", "nove"
];

digitos.forEach((id, index) => {
  document.getElementById(id).addEventListener("click", () => {
    expressao += index.toString();
    display.value = expressao;
  });
});

document.getElementById("mais").addEventListener("click", () => {
  expressao += "+";
  display.value = expressao;
});

document.getElementById("menos").addEventListener("click", () => {
  expressao += "-";
  display.value = expressao;
});

document.getElementById("multiplicar").addEventListener("click", () => {
  expressao += "*";
  display.value = expressao;
});

document.getElementById("dividir").addEventListener("click", () => {
  expressao += "/";
  display.value = expressao;
});

document.getElementById("igual").addEventListener("click", () => {
  try {
    const resultado = eval(expressao);
    resposta.textContent = "Resposta: " + resultado;
  } catch {
    resposta.textContent = "Erro na expressão!";
  }
});

document.getElementById("apagar").addEventListener("click", () => {
  expressao = expressao.slice(0, -1);
  display.value = expressao;
});
