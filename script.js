//Seletores e Variáveis:
const btn = document.querySelectorAll('button')
const playBtn = btn[0]
const addWordMenuBtn = btn[1]
const sendBtn = btn[2]
const returnBtn = btn[3]


let looseCount = 0
let words = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS', 'CURSOS', 'DESENVOLVER']
let tips = ['PLATAFORMA DE CURSOS', 'EMPRESA DE TECNOLOGIA', 'LINGUAGEM DE MARCAÇAO', 'LINGUAGEM DE PROGRAMAÇAO', 'LINGUAGEM DE ESTILO', 'OFERECIDO PELA ALURA', 'CAPACIDADE DE CRIAR E EVOLUIR']
let tip = ' '
let keys = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let includeLetter = []
let letterSpace = 0
let check = [] //Add the correct letters to array, to compare with the ramdon word

//Ações: 
    playBtn.onclick = playGame
    addWordMenuBtn.onclick = addWordMenu
    sendBtn.onclick = addWords
    returnBtn.onclick = returnMenu
        //Veriificar letras
    document.onkeydown = (e) => {
        let char = e.key.toLocaleUpperCase()
        // console.log(e)
        for(let i = 0; i <= keys.length; i++){
            if(char == keys[i]){
            
                checkLetter(char)
            
            }
        
            
        }
    }
//Funções:
 //Escolher palavras aleatórias

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
    // board.fillRect(0, 0, 1200, 700);

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
        board.stroke()
        board.closePath()
    }
    

    function addTips() {
        board.fillStyle = '#0A3871'
        board.font = 'bold 30px Arial'
        board.fillText(`DICA: ${tip}` , 390, 50, tip.length * 40)
    }


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
   

    function addRightLetter(indexOfChar){
        board.fillStyle = '#0A3871'
        board.font = 'bold 40px Arial'
        board.fillText(`${secretWord[indexOfChar]}` , 310 + indexOfChar * 60 , 530, secretWord.length * 40)
    } 

    function addWrongLetter(char) {
        if(!includeLetter.includes(char)){
      
            if(letterSpace <= 6){
                includeLetter.push(char)
                console.log(includeLetter)
                letterSpace++
                console.log(letterSpace)
                board.fillStyle = '#0A3871'
                board.font = 'bold 30px Arial'
                board.fillText( char, 310 + letterSpace * 60 , 640, secretWord.length * 40)
    
                looseCount = letterSpace
               if(looseCount > 6 ){
                    alert('Você Perdeu')
               }
            }
        }
    }


//Game Functions
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

            drawUnderline(chooseRamdonWords())
            addTips()
            drawHang() 
    }


    function addWordMenu() {
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

    function addWords() {
        let addWordsInput = document.querySelectorAll('input')
        let addWord = addWordsInput[0]
        let addTip = addWordsInput[1]

        words.push(addWord.value.toLocaleUpperCase())
        tips.push(addTip.value.toLocaleUpperCase())
        
        console.log(addWord.value)
        console.log(addTip, addWord,words,tips)
    }
   

    function checkLetter(char){
        if(secretWord.includes(char)){
            let indexOfChar = []
            let idx = secretWord.indexOf(char)
            while(idx != -1) {
                indexOfChar.push(idx)
                idx = secretWord.indexOf(char, idx + 1)
            }
            for(let i = 0 ; i <= indexOfChar.length; i++){
                addRightLetter(indexOfChar[i])
                check [indexOfChar [i] ] = char
                
            }
        } else {
            addWrongLetter(char)
        }
            //Add the correct letters to an array and compare with the array of the original word
            console.log('check1',check)
            let arrayCheck = check.join('')
            console.log(arrayCheck)
            if(arrayCheck == secretWord) {
            setTimeout(() => {
                alert('Você venceu') 
            }, 500);
            }
    }

    function returnMenu () {
        let addWordsDisplay = document.querySelector('.add-words')
        let menuDisplay = document.querySelector('menu')

        addWordsDisplay.style.opacity = 0
        menuDisplay.style.display = 'flex'

        setTimeout(()=>{
            addWordsDisplay.style.display = 'none'
            menuDisplay.style.opacity = 1
         }, 300)
   
    }

    function gameOver() {
        board.clearRect(0, 0, 1200, 700);
        includeLetter = []
        letterSpace = 0
    }




