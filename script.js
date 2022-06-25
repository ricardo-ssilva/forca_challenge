let btn = document.querySelectorAll('button')
let playBtn = btn[0]
let addBtn = btn[1]

function playGame() {
   let mainDisplay = document.querySelector('main')
   let menuBtn = document.querySelector('menu')
   menuBtn.style.opacity = '0'
   mainDisplay.style.display = 'block'
    setTimeout(()=>{
        menuBtn.style.display = 'none'
        mainDisplay.style.opacity = '1'
    }, 300)

}