let date = document.querySelector('input')
let age = document.getElementById('age')

const {DateTime, settings} = luxon

date.addEventListener('input', () => {
let start = DateTime.fromISO(date.value)
let end = DateTime.now()
console.log(end.diff(start,['year','month','day']).values)
age.innerText = end.diff(start,['year','month','day']).toFormat('y ปี M เดือน d วัน')
})