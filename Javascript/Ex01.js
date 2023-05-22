/*x = window.prompt("Informe o número: ");
console.log("Valor de x: " + x)
window.alert("Valor de x: " + x)
*/

num = prompt("Quantidade de pães: ");
console.log("Panificadora Pão de Ontem - Tabela de preços");

while (num >= 0) {
  console.log((num * 0.18).toFixed(2));
  num -= 1;
}