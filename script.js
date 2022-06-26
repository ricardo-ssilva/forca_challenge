//Seletores e Variáveis:
let btn = document.querySelectorAll('button')
let playBtn = btn[0]
let addWordBtn = btn[1]


let words = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS']

var letras = [];
var palavraCorreta = "";
var erros = 6;



let board = document.getElementById('forca').getContext('2d')
// board.fillStyle = 'lightgrey'
// board.fillRect(0, 0, 1200, 860);



playBtn.onclick = playGame
addWordBtn.onclick = addWord

//Escolher palavras aleatórias
function chooseRamdonWords(){
    let word = words[Math.floor(Math.random() * words.length)]
    secretWord = word
    return word
}
function drawUnderline(){
    board.lineWidth = 6
    board.lineCap = "round"
    board.lineJoin = "round"
    board.strokeStyle = "#0A3871"
    board.beginPath()
    var eixo = 600 / secretWord.length
    for(let i = 0; i < secretWord.length; i++){
        board.moveTo(300+(eixo*i), 540)
        board.lineTo(350+(eixo*i), 540)
    }
    board.stroke()
    board.closePath()
    console.log('opa')
}
drawUnderline(chooseRamdonWords())



function playGame() {
   let mainDisplay = document.querySelector('main')
   let menuDisplay= document.querySelector('menu')

   //Fecha menu e inicia o jogo:
   menuDisplay.style.opacity = '0'
   mainDisplay.style.display = 'flex'
    setTimeout(()=>{
        menuDisplay.style.display = 'none'
        mainDisplay.style.opacity = '1'
    }, 300)


    //ChooseRamdonWords
}


function addWord() {
    let addWordsDisplay = document.querySelector('.add-words')
    let menuDisplay = document.querySelector('menu')

    //Fecha o menu e abre as opções de adição:
    menuDisplay.style.opacity = '0'
    addWordsDisplay.style.display = 'flex'
    addWordsDisplay.querySelector('.focus').focus()
     setTimeout(()=>{
        menuDisplay.style.display = 'none'
        addWordsDisplay.style.opacity = '1'
     }, 300)
}