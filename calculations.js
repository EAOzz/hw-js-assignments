function increaseBalance(x, y) {
  x += y;
  return x;
} // Функция сложения

function decreaseBalance(x, y) {
  x -= y;
  return x;
} // Функция разности

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
} // Функция деления

function getRestAfterDivision(x, y) {
  x *= y;
  return x;
} // Функция умножения

console.log(increaseBalance(3000, 700)); // Вывод вычислений функции сложения
console.log(decreaseBalance(3000, 700)); // Вывод вычислений функции разности
console.log(divideBalanceByAccounts(3000, 2)); // Вывод вычислений функции деления
console.log(getRestAfterDivision(7000, 3)); // Вывод вычислений функции умножения
