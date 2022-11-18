const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

setInterval(() =>{
    const date = new Date()
    hour.style.transform = `rotate(${date.getHours()*30-90}deg)`
    minute.style.transform = `rotate(${date.getMinutes()*6-90}deg)`
    second.style.transform = `rotate(${date.getSeconds()*6-90}deg)`
}, 1000
)