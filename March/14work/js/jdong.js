var picture = document.querySelector('.container-middle')
var div = picture.querySelectorAll('div')
var li = picture.querySelectorAll('li')
var span = picture.querySelectorAll('span')

var timer
var now = 0
for(var i = 0; i< li.length; i++){
    li[i].index = i
    li[i].addEventListener('mouseover', function(){
        now = this.index
        change()
})
span[1].onclick =function(){
    lun()
    }

span[0].onclick = function(){
    if(now==0){
        now=li.length-1
    }
    else{
        now--
    }
    change()
}
function lunbo(){
timer = setInterval(function(){
lun()
change()
},1000)
}
function lun(){
    if(now >=li.length-1){
        now = 0
    }
    else{
        now++
    }
    change()
}
function change(){
    for(var i = 0 ; i<li.length;i++){
        li[i].classList.remove('ac')
    }
    li[now].classList.add('ac')
    for(var j = 0 ; j<li.length;j++){
        div[j].classList.remove('active')
    }
    div[now].classList.add('active')
}
}
picture.addEventListener('mouseenter',function(){
    clearInterval(timer)
})
picture.addEventListener('mouseleave',function(){
    clearInterval(timer)
    lunbo()
})
