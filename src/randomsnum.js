// Функция для генерации случайного числа в заданном диапазоне
const getNumber = (min, max) => Math.round(Math.random() * (max - min + 1) + min);
const getIndex = (array) => Math.floor(Math.random() * array.length);
export { getNumber, getIndex };
