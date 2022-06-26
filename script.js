//Seletores e Variáveis:
let btn = document.querySelectorAll('button')
let playBtn = btn[0]
let addWordBtn = btn[1]


let words = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS']
let tips = ['CURSO', 'MARCA', 'MARCAÇAO', 'PROGRAMAÇAO', 'ESTILO']
let tip = ' '

var letras = [];
var palavraCorreta = "";
var erros = 6;

function chooseRamdonWords(){
    let randomizer = Math.floor(Math.random() * words.length)
    let word = words[randomizer]
    tip = tips[randomizer]
    console.log(word, tip)
    secretWord = word

    return word
}



// Canvas
let board = document.getElementById('forca').getContext('2d')
// board.fillStyle = 'lightgrey'
// board.fillRect(0, 0, 1600, 860);



playBtn.onclick = playGame
addWordBtn.onclick = addWord

//Escolher palavras aleatórias

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
   
}
drawUnderline(chooseRamdonWords())

function addTips() {
    board.font = 'bold 30px Arial'
    
    board.fillText(`DICA: ${tip}` , 390, 50, tip.length * 40)
} addTips()

function drawHang() {
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')

    board.lineWidth = 6
    board.lineCap = "round"
    board.lineJoin = "round"
    board.strokeStyle = "#0A3871"

 // Base
    // board.moveTo(400, 400)
    // board.lineTo(400, 400)
    // board.moveTo(320, 400)
    // board.lineTo(480, 400)

 // Coluna
    board.moveTo(400, 400)
    board.lineTo(400, 100)

 // Topo
    board.moveTo(400, 100)
    board.lineTo(550, 100)


    board.moveTo(550, 100)
    board.lineTo(550, 140)

    board.stroke()
    board.closePath()
}
drawHang() 

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