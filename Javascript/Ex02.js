num = prompt("Preço do pão: R$ ");
console.log("Panificadora Pão de Ontem - Tabela de preços");

while (num <= 0) {
  console.log(num * 0.18);
  num -= 1;
}