let date = new Date()

const calRender = function () {
  date.setDate(1)
  let endDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()

  let today = new Date()
  document.getElementById('current_date').innerHTML = today.toDateString()


  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  document.getElementById('current_mnth').innerHTML = month[date.getMonth()]


  let  prevDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate()
  let days = ''
  for (let j = date.getDay(); j > 0; j--){
    days += '<div class="prev_mnth">' + (prevDate - j + 1) + '</div>'
  }
  for (let i = 1; i < endDate; i++) {
    if ( i === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
      days += '<div class="today">' + i + '</div>'
    } else {
    days += '<div>' + i + '</div>'
  }
  }
  document.getElementsByClassName('days')[0].innerHTML = days
}

const moveDate = function (val) {
  if (val === 'prev') {
    date.setMonth(date.getMonth()- 1)
  } else {
    date.setMonth(date.getMonth()+ 1)
  }
    calRender()
}
