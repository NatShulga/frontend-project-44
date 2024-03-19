// Функция для генерации случайного числа в заданном диапазоне
export const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min + 1) + min);
export const generateRandomIndex = (array) => Math.floor(Math.random() * array.length);
