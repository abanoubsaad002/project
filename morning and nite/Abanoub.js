let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let Abanoub = document.querySelector(".Abanoub")
let main = document.querySelector(".main")

onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px"
    moon.style.top = value *3.5 + "px"
    mountains3.style.top = value *2 + "px"
    mountains4.style.top = value* 1.5  + "px"
    river.style.top = value  + "px"
    boat.style.top = value + "px"
    boat.style.left = value*3 + "px"
    boat.style.left = value*3 + "px"
    Abanoub.style.fontSize = value + "px"
    console.log (value)

    // 78
    if(scrollY >= 78){
        Abanoub.style.fontSize = 78 + "px"
        Abanoub.style.position = "fixed"


    }if(scrollY >= 189){
        main.style.background = "linear-gradient(rgb(37, 170, 191),rgb(26, 5, 36))"
        Abanoub.style.opacity =  0.5
        if(scrollY >= 611){
            Abanoub.style.opacity =  0

          }

      }else{
        main.style.background = "linear-gradient(to top ,rgb(36, 2, 31),transparent)"
        Abanoub.style.opacity =  1


    }
}