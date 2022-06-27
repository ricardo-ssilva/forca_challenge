//Seletores e Variáveis:
let btn = document.querySelectorAll('button')
let playBtn = btn[0]
let addWordBtn = btn[1]


let words = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS']
let tips = ['PLATAFORMA', 'MARCA', 'MARCAÇAO', 'PROGRAMAÇAO', 'ESTILO']
let tip = ' '
let keys = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

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

    for(let i = 0; i < secretWord.length; i++){
        board.moveTo(300 + i * 60, 540)
        board.lineTo(350 + i * 60, 540)
    }



    // board.moveTo(360, 540)
    // board.lineTo(410, 540)
    board.stroke()
    board.closePath()
   
}
drawUnderline(chooseRamdonWords())

function addTips() {
    board.fillStyle = '#0A3871'
    board.font = 'bold 30px Arial'
    board.fillText(`DICA: ${tip}` , 390, 50, tip.length * 40)
} addTips()

function drawHang() {
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



//Veriificar letras
document.onkeydown = (e) => {
    let char = e.key.toLocaleUpperCase()
    // console.log(e)
    for(let i = 0; i <= keys.length; i++){
        if(char == keys[i]){
          
            checkCorrectLetter(char)
        
        }
    
        
    }
}

function addRightLetter(i){
    board.fillStyle = '#0A3871'
    board.font = 'bold 40px Arial'
    board.fillText(`${secretWord[i]}` , 310 + i * 60 , 530, secretWord.length * 40)
    // board.fillText(`${secretWord[1]}` , 310 + 1 * 60 , 540, secretWord.length * 40)
    // board.fillText(`${secretWord[2]}` , 310 + 2 * 60 , 540, secretWord.length * 40)
    // board.moveTo(300 + i * 60, 540)
    // board.lineTo(350 + i * 60, 540)
} addRightLetter(i)


function checkCorrectLetter(char){
    if(secretWord.includes(char)){

        let indexX = []
        let idx = secretWord.indexOf(char)
        while(idx != -1) {
            indexX.push(idx)
            idx = secretWord.indexOf(char, idx + 1)
        }
        console.log(indexX)
        
        // console.log(secretWord.indexOf(char))
        for(let i = 0 ; i <= indexX.length; i++){
            addRightLetter(indexX[i])
        }
    
        
    }
    
}

