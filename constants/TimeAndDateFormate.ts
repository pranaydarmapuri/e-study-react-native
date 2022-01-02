
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const shortDateFormate = (d: Date): string => {


  const month = months[d.getMonth()]
  const date = d.getDate()

  return `${month}, ${date}`
}

export const timeFormate = (t: Date): string => {

  //=====> Get Hours in 12hr formate
  const getHour = (h: number): number => h > 12 ? h - 12 : h
  //=====> Formate Hours and minutes with leading Zero (0)
  const formate = (n: number): string => n < 10 ? `0${n}` : `${n}`
  //=====> Get AM or PM
  const ampm = (h: number): string => h >= 12 ? 'pm' : 'am'

  const hours = formate(getHour(t.getHours()))
  const minutes = formate(t.getMinutes())

  return `${hours}:${minutes} ${ampm(t.getHours())}`
}

export const longDateFormate = (d: Date): string => {

  const day = days[d.getDay()]
  const month = months[d.getMonth()]
  const date = d.getDate()

  return `${day} ${month} ${date}, ${timeFormate(d)}`
}