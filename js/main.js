
// Функция, возвращающая случайное целое число из переданного диапазона включительно от и до
function getRandomIntNum(minNum, maxNum) {
  if (minNum < 0 || maxNum < 0 || typeof minNum !== 'number' || typeof maxNum !== 'number') {
    return NaN;
  }
  let min = minNum;
  let max = maxNum;
  // Если границы диапазона заданы в нисходящем порядке:
  if (minNum > maxNum) {
    min = maxNum;
    max = minNum;
  }
  // Нахождение случайного числа с плавающей точкой из диапазона
  const randomNum = min + Math.random() * (max - min);
  // Округление случайного числа к ближайшему целому, чтобы не нарушить закон случайности
  const roundedNum = Math.round(randomNum);
  if (min <= roundedNum && roundedNum <= max) {
    return roundedNum;
  }
  // Если диапазон меньше единицы:
  // Проверка округленного вверх на присутствие в диапазоне
  const roundedCeilNum = Math.ceil(randomNum);
  if (min <= roundedCeilNum && roundedCeilNum <= max) {
    return roundedCeilNum;
  }
  // Проверка округленного вниз на присутствие в диапазоне
  const roundedFloorNum = Math.floor(randomNum);
  if (min <= roundedFloorNum && roundedFloorNum <= max) {
    return roundedFloorNum;
  }
}
getRandomIntNum(0.99, 1.01);
//===============================================================================================
// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloatNum(minNum, maxNum, digits) {
  if (minNum < 0 || maxNum < 0 || typeof minNum !== 'number' || typeof maxNum !== 'number' || !Number.isInteger(digits) || digits < 0 || digits > 20) {
    return NaN;
  }
  let min = minNum;
  let max = maxNum;
  // Если границы диапазона заданы в нисходящем порядке:
  if (minNum > maxNum) {
    min = maxNum;
    max = minNum;
  }
  // Нахождение случайного числа с плавающей точкой из диапазона
  const randomFloatNum = min + Math.random() * (max - min);
  return Number(randomFloatNum.toFixed(digits));
}
getRandomFloatNum(2.5, 4.8, 7);
