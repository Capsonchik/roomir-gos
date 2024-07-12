import mockData from "../../mockData/static-levels-id-order3.json";

// Функция для поиска категории вопроса
export function findObjectByTitle(titleValue) {
  const foundObject = mockData.find(item => item.title === titleValue);
  return foundObject.categories;
}

export function findQuestionsByName(name, dataArray) {
  const foundObject = dataArray.find(obj => obj.name === name);
  if (foundObject) {
    // console.log('Вопросы после поиска',foundObject.questions)
    return foundObject.questions;
  } else {
    return []; // Возвращаем пустой массив, если объект не найден
  }
}