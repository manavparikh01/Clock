//var today = new Date();
let time = document.querySelector('.time')
let date = document.querySelector('.date')
//var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let twofour = document.querySelector('.twofour')
let onetwo = document.querySelector('.onetwo')
let timeagain = document.querySelector('.timeagain')
let clock = document.querySelector('.cl')
let timer = document.querySelector('.tm')
let stopwatch = document.querySelector('.st')
let clocka = document.querySelector('.cl a')
let timera = document.querySelector('.tm a')
let stopwatcha = document.querySelector('.st a')
let stamp = 0

twofour.addEventListener('click', () => {
    onetwo.classList.add('unselectedformat')
    onetwo.classList.remove('selectedtimeformat')
    twofour.classList.remove('unselectedformat')
    twofour.classList.add('selectedtimeformat')
    stamp = 24
})

onetwo.addEventListener('click', () => {
    onetwo.classList.remove('unselectedformat')
    onetwo.classList.add('selectedtimeformat')
    twofour.classList.remove('selectedtimeformat')
    twofour.classList.add('unselectedformat')
    stamp = 12
})

clock.addEventListener('click', () => {
    timer.classList.add('unselectedformat')
    timer.classList.remove('selectedtimeformat')
    stopwatch.classList.add('unselectedformat')
    stopwatch.classList.remove('selectedtimeformat')
    clock.classList.remove('unselectedformat')
    clock.classList.add('selectedtimeformat')
    timera.classList.add('unself')
    timera.classList.remove('seltf')
    stopwatcha.classList.add('unself')
    stopwatcha.classList.remove('seltf')
    clocka.classList.remove('unself')
    clocka.classList.add('seltf')
    stamp = 24
})

timer.addEventListener('click', () => {
    timer.classList.remove('unselectedformat')
    timer.classList.add('selectedtimeformat')
    stopwatch.classList.add('unselectedformat')
    stopwatch.classList.remove('selectedtimeformat')
    clock.classList.add('unselectedformat')
    clock.classList.remove('selectedtimeformat')
})

stopwatch.addEventListener('click', () => {
    timer.classList.add('unselectedformat')
    timer.classList.remove('selectedtimeformat')
    stopwatch.classList.remove('unselectedformat')
    stopwatch.classList.add('selectedtimeformat')
    clock.classList.add('unselectedformat')
    clock.classList.remove('selectedtimeformat')
    timera.classList.add('unself')
    timera.classList.remove('seltf')
    stopwatcha.classList.remove('unself')
    stopwatcha.classList.add('seltf')
    clocka.classList.add('unself')
    clocka.classList.remove('seltf')
    stamp = 24
})



let onLoad = () => {
    var today = new Date();
    if (stamp == 0 || stamp == 24) {
        var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        timeagain.innerHTML = ''
    }
    else {
        if (today.getHours() >= 12) {
            let getHours = today.getHours() - 12
            var timenow = getHours + ":" + today.getMinutes() + ":" + today.getSeconds();
            timeagain.innerHTML = `<h5>PM</h5>`
        }
        else {
            var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            timeagain.innerHTML = `<h5>AM</h5>`
        }
    }
    var today = new Date();
    var datenow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    time.innerHTML = `<h4>${timenow}</h4>`;
    date.innerHTML = `<p>${datenow}</p>`;
    // setInterval(function() {
    //     window.onload()
    //   }, 1000);
}

onLoad()

setInterval(function() {
    onLoad();
  }, 1000);