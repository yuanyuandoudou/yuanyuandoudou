const shen = document.querySelectorAll('.shen1')
const prev = document.getElementById('prev')
const next = document.getElementById('next')


let shu = 1

next.addEventListener('click',() =>{
    shu++
    if(shu == 2){
        wocao()
    }else if (shu >= 3) {
        shu = 3
        diaomao()

    }
})

prev.addEventListener('click', () =>{
   
    shu --

 if(shu == 2){
       shabi()

    }
    else if(shu < 2){
        shu = 1
        goubi()
    }
})

function wocao(){
    shen.forEach(shen1 => {
        shen1.classList.add('two')
    })
}

function diaomao(){
    shen.forEach(shen1 => {
        shen1.classList.add('three')
    })
}

function goubi(){
    shen.forEach(shen1 =>{
        shen1.classList.remove('two')
    })
}
function shabi(){
    shen.forEach(shen1 => {
        shen1.classList.remove('three')
    })
}