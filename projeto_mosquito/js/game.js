let clicou = true
let score = 0
let vidas = 3


let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "../imgs/mosquito2.png"
img.style.position = "absolute"

function alteraTamanhoMosquito() {
    let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
    img.style.transform = `scale(${numeroAleatorio + 0.2})`
}

function geraposicao() {
    let y = Math.random() * (window.innerHeight * 0.70)
    let x = Math.random() * (window.innerWidth * 0.70)

    img.style.top = `${y}px`
    img.style.left = `${x}px`

}
img.addEventListener("click", function () {
    clicou = true
    
})



setInterval(function () {
    alteraTamanhoMosquito()
    geraposicao()
    body.appendChild(img)

    if (!clicou) {

        vidas--


        clicou = false

        if (vidas == 2) {
            let presente3 = document.getElementById("presente-3")
            presente3.src = "../imgs/presente vazio.png"
        }

        else if (vidas == 1) {
            let presente2 = document.getElementById("presente-2")
            presente2.src = "../imgs/presente vazio.png"
        }

        else if (vidas == 0) {
            let presente1 = document.getElementById("presente-1")
            presente1.src = "../imgs/presente vazio.png"

            alert("Game Over!!")
        }
    }

    clicou = false

}, 1000)

img.remove()



