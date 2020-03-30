import octoechos from './books/octoechos'

export const getWeekDay = numDay => ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][numDay]

export const getToneData = tone => {
  return octoechos[parseInt(tone)]
}