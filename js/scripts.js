let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p');
let secondPlayer = ''

// contador de jogadas 
let player1 = 0;
let player2 = 0;

// modalidade de jogo
for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', function(){
        secondPlayer = this.getAttribute('id')

        buttons[i].parentNode.classList.add('hide')

        setTimeout( () => {
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 300)
    })
}
// adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', () => {        
        let elemento = checkElemento(player1, player2)

        // verifica se a caixinha já foi preenchida
        if(boxes[i].childNodes.length == 0) {
            let cloneElemento = elemento.cloneNode(true);
            boxes[i].appendChild(cloneElemento)

            // computa a jogada para player 1 ou 2 (x ou o)
            if(player1 == player2){
                player1 += 1 // player X
                
                if(secondPlayer == 'ai-player'){
                    // funcao executar a jogada
                    aiPlay()
                    player2++
                }
            } else {
                player2 += 1 // player O
            }
            
            // checa quem venceu
            checkWinner()
        }
    })
}
// verifica quem vai jogar (qual elemento)
function checkElemento (player1, player2) {
    let elemento;
    if(player1 == player2) {
        elemento = x;
    } else {
        elemento = o;
    }
    return elemento
}

// função para verificar vencedor
function checkWinner() {
    let b1 = document.querySelector('#block-1')
    let b2 = document.querySelector('#block-2')
    let b3 = document.querySelector('#block-3')
    let b4 = document.querySelector('#block-4')
    let b5 = document.querySelector('#block-5')
    let b6 = document.querySelector('#block-6')
    let b7 = document.querySelector('#block-7')
    let b8 = document.querySelector('#block-8')
    let b9 = document.querySelector('#block-9')

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    // Vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }   
    }

    // Diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }

    // deu velha
    let counter = 0;
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter ++;
        }
    }
    if(counter == 9) {
        declareWinner('deu velha');
    }
}

// declara vencedor, limpa jogo e att o placar
function declareWinner(vencedor){
    let placarX = document.querySelector('#scoreboard-1')
    let placarO = document.querySelector('#scoreboard-2')
    let mensagem = ''

    if(vencedor=='x'){
        contagemX = parseInt(placarX.textContent)+1;
        placarX.textContent = contagemX
        mensagem = 'O jogador 1 (X) venceu'
    } else if (vencedor=='o') {
        contagemO = parseInt(placarO.textContent)+1;
        placarO.textContent = contagemO
        mensagem = 'O jogador 2 (O) venceu'
    } else {
        mensagem = 'Deu velha!'
    }
    
    //mostra a mensagem
    messageText.innerHTML = mensagem
    messageContainer.classList.remove('hide');

    setTimeout(() => {
        messageContainer.classList.add('hide')
    }, 2000)

    // zera as jogadas e limpa o jogo
    player1 = 0;
    player2 = 0;
    
    let boxesToRemove = document.querySelectorAll('.box div');

    for(box of boxesToRemove){
        box.parentNode.removeChild(box)
    }

}

// lógica da jogada do CPU
// recursividade posições serem mais aleatórias
function aiPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    preenchidos = 0;
    
    for(let i=0; i<boxes.length; i++){
        // numero pequeno para ser + aleatória e evitar sequencias
        let rand = Math.floor(Math.random()*5) 

        // verificando se a caixa n tá preenchida
        if(boxes[i].childNodes[0] == undefined){
            // também para aumentar a aleatoriedade e evitar sequencias
            if(rand <= 1){ 
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // checagem de quantas box estão preenchidas
        } else {
            preenchidos++
        }
    }

    if(counter==0 && preenchidos<9){
        aiPlay()
    }
}