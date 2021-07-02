//var today = new Date();
let time = document.querySelector('.time')
let date = document.querySelector('.date')
//var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let twofour = document.querySelector('.twofour')
let onetwo = document.querySelector('.onetwo')
let timeagain = document.querySelector('.timeagain')
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

setInterval(function() {
    onLoad();
  }, 1000);