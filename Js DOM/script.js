// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     a.innerHTML="ROBO DROID"
//     a.style.color="green"
//     a.style.backgroundColor="black"
// })
var a =document.querySelectorAll("h1")
console.log(a)

var flag = 0

var bulb = document.querySelector("#bulb")

var button = document.querySelector("button")
button.addEventListener("click",function(){
    if (flag==0)
    {
    bulb.style.backgroundColor="yellow"
    flag=1
    }
    else
    {
        bulb.style.backgroundColor="Transparent"
        flag=0
    }
})
