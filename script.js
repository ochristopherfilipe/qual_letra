// Define the alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Word and image database for each letter
const letterWords = {
    'a': [
        { word: 'Abacaxi', image: 'images/a/abacaxi.jpg' },
        { word: 'Abelha', image: 'images/a/abelha.jpg' },
        { word: 'Avião', image: 'images/a/aviao.jpg' }
    ],
    'b': [
        { word: 'Bola', image: 'images/b/bola.jpg' },
        { word: 'Banana', image: 'images/b/banana.jpg' },
        { word: 'Borboleta', image: 'images/b/borboleta.jpg' }
    ],
    'c': [
        { word: 'Cachorro', image: 'images/c/cachorro.jpg' },
        { word: 'Casa', image: 'images/c/casa.jpg' },
        { word: 'Coração', image: 'images/c/coracao.jpg' }
    ],
    'd': [
        { word: 'Dente', image: 'images/d/dente.jpg' },
        { word: 'Dinossauro', image: 'images/d/dinossauro.jpg' },
        { word: 'Dado', image: 'images/d/dado.jpg' }
    ],
    'e': [
        { word: 'Elefante', image: 'images/e/elefante.jpg' },
        { word: 'Escova de Dentes', image: 'images/e/escova.jpg' },
        { word: 'Estrela', image: 'images/e/estrela.jpg' }
    ],
    'f': [
        { word: 'Flor', image: 'images/f/flor.jpg' },
        { word: 'Frutas', image: 'images/f/frutas.jpg' },
        { word: 'Fogo', image: 'images/f/fogo.jpg' }
    ],
    'g': [
        { word: 'Gato', image: 'images/g/gato.jpg' },
        { word: 'Girafa', image: 'images/g/girafa.jpg' },
        { word: 'Gelo', image: 'images/g/gelo.jpg' }
    ],
    'h': [
        { word: 'Helicóptero', image: 'images/h/helicoptero.jpg' },
        { word: 'Hambúrguer', image: 'images/h/hamburguer.jpg' },
        { word: 'Hipopótamo', image: 'images/h/hipopotamo.jpg' }
    ],
    'i': [
        { word: 'Iglu', image: 'images/i/iglu.jpg' },
        { word: 'Igreja', image: 'images/i/igreja.jpg' },
        { word: 'Ilha', image: 'images/i/ilha.jpg' }
    ],
    'j': [
        { word: 'Janela', image: 'images/j/janela.jpg' },
        { word: 'Jacaré', image: 'images/j/jacare.jpg' },
        { word: 'Joaninha', image: 'images/j/joaninha.jpg' }
    ],
    'k': [
        { word: 'Kiwi', image: 'images/k/kiwi.jpg' },
        { word: 'Karatê', image: 'images/k/karate.jpg' },
        { word: 'Koala', image: 'images/k/koala.jpg' }
    ],
    'l': [
        { word: 'Livro', image: 'images/l/livro.jpg' },
        { word: 'Leão', image: 'images/l/leao.jpg' },
        { word: 'Lua', image: 'images/l/lua.jpg' }
    ],
    'm': [
        { word: 'Maçã', image: 'images/m/maca.jpg' },
        { word: 'Macaco', image: 'images/m/macaco.jpg' },
        { word: 'Mão', image: 'images/m/mao.jpg' }
    ],
    'n': [
        { word: 'Navio', image: 'images/n/navio.jpg' },
        { word: 'Nuvem', image: 'images/n/nuvem.jpg' },
        { word: 'Nariz', image: 'images/n/nariz.jpg' }
    ],
    'o': [
        { word: 'Ovo', image: 'images/o/ovo.jpg' },
        { word: 'Ovelha', image: 'images/o/ovelha.jpg' },
        { word: 'Olho', image: 'images/o/olho.jpg' }
    ],
    'p': [
        { word: 'Pato', image: 'images/p/pato.jpg' },
        { word: 'Peixe', image: 'images/p/peixe.jpg' },
        { word: 'Pão', image: 'images/p/pao.jpg' }
    ],
    'q': [
        { word: 'Queijo', image: 'images/q/queijo.jpg' },
        { word: 'Quadrado', image: 'images/q/quadrado.jpg' },
        { word: 'Quebra-cabeça', image: 'images/q/quebra-cabeca.jpg' }
    ],
    'r': [
        { word: 'Rato', image: 'images/r/rato.jpg' },
        { word: 'Relógio', image: 'images/r/relogio.jpg' },
        { word: 'Robô', image: 'images/r/robo.jpg' }
    ],
    's': [
        { word: 'Sapo', image: 'images/s/sapo.jpg' },
        { word: 'Sol', image: 'images/s/sol.jpg' },
        { word: 'Sorvete', image: 'images/s/sorvete.jpg' }
    ],
    't': [
        { word: 'Trem', image: 'images/t/trem.jpg' },
        { word: 'Tartaruga', image: 'images/t/tartaruga.jpg' },
        { word: 'Tomate', image: 'images/t/tomate.jpg' }
    ],
    'u': [
        { word: 'Uva', image: 'images/u/uva.jpg' },
        { word: 'Urso', image: 'images/u/urso.jpg' },
        { word: 'Urubu', image: 'images/u/urubu.jpg' }
    ],
    'v': [
        { word: 'Vaca', image: 'images/v/vaca.jpg' },
        { word: 'Violão', image: 'images/v/violao.jpg' },
        { word: 'Vela', image: 'images/v/vela.jpg' }
    ],
    'w': [
        { word: 'Waffle', image: 'images/w/waffle.jpg' },
        { word: 'Woody', image: 'images/w/woody.jpg' },
        { word: 'Windsurf', image: 'images/w/windsurf.jpg' }
    ],
    'x': [
        { word: 'Xícara', image: 'images/x/xicara.jpg' },
        { word: 'Xadrez', image: 'images/x/xadrez.jpg' },
        { word: 'Xilofone', image: 'images/x/xilofone.jpg' }
    ],
    'y': [
        { word: 'Yakisoba', image: 'images/y/yakisoba.jpg' },
        { word: 'Yoyo', image: 'images/y/yoyo.jpg' }
    ],
    'z': [
        { word: 'Zebra', image: 'images/z/zebra.jpg' },
        { word: 'Zíper', image: 'images/z/ziper.jpg' }
    ]
};

// App state
let currentLetterIndex = 0;
let isRandomMode = true;
let letterCase = 'upper'; // 'upper', 'lower', or 'both'
let correctImageIndex = 0;
let currentCorrectWord = null;  // Armazena a palavra correta atual
let currentIncorrectWords = []; // Armazena as palavras incorretas atuais
let consecutiveErrors = 0;      // Contador de erros consecutivos
let soundEnabled = true;        // Som habilitado por padrão
let gameStarted = false;        // Indica se o jogo foi iniciado
let showWords = false;          // Indica se as palavras devem ser mostradas
let isGameLocked = false;       // Impede cliques durante transições

// DOM Elements
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const gameOverScreen = document.getElementById('gameOverScreen');
const randomModeBtn = document.getElementById('randomMode');
const orderModeBtn = document.getElementById('orderMode');
const upperCaseBtn = document.getElementById('upperCase');
const lowerCaseBtn = document.getElementById('lowerCase');
const bothCasesBtn = document.getElementById('bothCases');
const soundOnBtn = document.getElementById('soundOn');
const soundOffBtn = document.getElementById('soundOff');
const prevLetterBtn = document.getElementById('prevLetter');
const nextLetterBtn = document.getElementById('nextLetter');
const currentLetterEl = document.querySelector('.current-letter');
const imageOptions = document.querySelectorAll('.image-option');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalWord = document.getElementById('modalWord');
const closeModal = document.querySelector('.close-button');
const settingsButton = document.getElementById('settingsButton');
const settingsMenu = document.getElementById('settingsMenu');
const closeSettings = document.getElementById('closeSettings');
const sadFace = document.getElementById('sadFace');
const showWordsButton = document.getElementById('showWordsButton');

// Audio Elements
const clickSound = document.getElementById('clickSound');
const correctSound = document.getElementById('correctSound');
const gameOverSound = document.getElementById('gameOverSound');
const gameStartSound = document.getElementById('gameStartSound');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setEventListeners();
    // Não inicializamos o jogo aqui, apenas aguardamos o clique no botão JOGAR
});

// Function to play sound if enabled
function playSound(sound) {
    if (soundEnabled) {
        sound.currentTime = 0; // Reinicia o som caso esteja tocando
        sound.play();
    }
}

// Function to start the game
function startGame() {
    gameStarted = true;
    startScreen.classList.add('hiding');
    
    // Esconder a tela inicial após a animação
    setTimeout(() => {
        startScreen.style.display = 'none';
    }, 500);
    
    // Tocar som de início do jogo
    playSound(gameStartSound);
    
    // Inicializar o jogo
    resetConsecutiveErrors();
    updateLetter();
}

// Function to show game over screen
function showGameOver() {
    playSound(gameOverSound);
    
    gameOverScreen.style.display = 'flex';
    
    // Esconder tela de game over após 4 segundos
    setTimeout(() => {
        gameOverScreen.classList.add('hiding');
        
        setTimeout(() => {
            gameOverScreen.style.display = 'none';
            gameOverScreen.classList.remove('hiding');
            resetConsecutiveErrors();
        }, 500);
    }, 4000);
}

// Reset consecutive errors counter
function resetConsecutiveErrors() {
    consecutiveErrors = 0;
}

// Set event listeners
function setEventListeners() {
    // Start button
    startButton.addEventListener('click', () => {
        startGame();
    });
    
    // Settings menu
    settingsButton.addEventListener('click', () => {
        playSound(clickSound);
        settingsMenu.classList.add('show');
    });
    
    closeSettings.addEventListener('click', () => {
        settingsMenu.classList.remove('show');
    });
    
    // Close settings when clicking outside the content
    settingsMenu.addEventListener('click', (e) => {
        if (e.target === settingsMenu) {
            settingsMenu.classList.remove('show');
        }
    });

    // Mode buttons
    randomModeBtn.addEventListener('click', () => {
        isRandomMode = true;
        toggleActiveButton(randomModeBtn, orderModeBtn);
        updateLetter();
    });

    orderModeBtn.addEventListener('click', () => {
        isRandomMode = false;
        toggleActiveButton(orderModeBtn, randomModeBtn);
        updateLetter();
    });

    // Case buttons
    upperCaseBtn.addEventListener('click', () => {
        letterCase = 'upper';
        toggleActiveButton(upperCaseBtn, [lowerCaseBtn, bothCasesBtn]);
        updateLetterDisplay();
    });

    lowerCaseBtn.addEventListener('click', () => {
        letterCase = 'lower';
        toggleActiveButton(lowerCaseBtn, [upperCaseBtn, bothCasesBtn]);
        updateLetterDisplay();
    });

    bothCasesBtn.addEventListener('click', () => {
        letterCase = 'both';
        toggleActiveButton(bothCasesBtn, [upperCaseBtn, lowerCaseBtn]);
        updateLetterDisplay();
    });
    
    // Sound buttons
    soundOnBtn.addEventListener('click', () => {
        soundEnabled = true;
        toggleActiveButton(soundOnBtn, soundOffBtn);
    });
    
    soundOffBtn.addEventListener('click', () => {
        soundEnabled = false;
        toggleActiveButton(soundOffBtn, soundOnBtn);
        // Não tocamos som aqui porque o som foi desativado
    });

    // Navigation buttons
    prevLetterBtn.addEventListener('click', () => {
        if (!isRandomMode) {
            currentLetterIndex = (currentLetterIndex - 1 + alphabet.length) % alphabet.length;
            updateLetter();
        } else {
            getRandomLetter();
            updateLetterDisplay();
            updateImages();
        }
    });

    nextLetterBtn.addEventListener('click', () => {
        if (!isRandomMode) {
            currentLetterIndex = (currentLetterIndex + 1) % alphabet.length;
            updateLetter();
        } else {
            getRandomLetter();
            updateLetterDisplay();
            updateImages();
        }
    });

    // Show/Hide Words Button
    showWordsButton.addEventListener('click', () => {
        playSound(clickSound);
        showWords = !showWords;
        
        // Atualizar ícone
        if (showWords) {
            showWordsButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
            document.body.classList.add('show-words');
        } else {
            showWordsButton.innerHTML = '<i class="fas fa-eye"></i>';
            document.body.classList.remove('show-words');
        }
    });

    // Image options
    imageOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Se o jogo estiver bloqueado, não fazer nada
            if (isGameLocked) return;
            
            const isCorrect = option.getAttribute('data-correct') === 'true';
            const wordIndex = parseInt(option.getAttribute('data-word-index'));
            
            // Remove any previous selections and feedback
            imageOptions.forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Apply appropriate feedback class
            if (isCorrect) {
                // Resposta correta
                option.classList.add('correct');
                playSound(correctSound);
                resetConsecutiveErrors(); // Resetar erros consecutivos quando acertar
                
                // Show modal for correct answer
                const imgElement = option.querySelector('img');
                modalImage.src = imgElement.src;
                modalWord.textContent = currentCorrectWord.word;
                
                // Fallback para imagem não encontrada no modal
                modalImage.onerror = function() {
                    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="32" fill="%23333" dominant-baseline="middle" text-anchor="middle">' + modalWord.textContent + '</text></svg>';
                };
                
                // Adicionar instrução para clicar e continuar
                modalWord.innerHTML = currentCorrectWord.word + '<div class="click-instruction">Clique para continuar</div>';
                
                modal.classList.add('show');
                
                // Não avançar automaticamente - aguardar clique do usuário
            } else {
                // Resposta incorreta
                option.classList.add('incorrect');
                
                // Bloquear o jogo para impedir cliques
                isGameLocked = true;
                
                // Incrementar contador de erros consecutivos
                consecutiveErrors++;
                
                // Se atingiu 4 erros consecutivos, mostrar tela de game over
                if (consecutiveErrors >= 4) {
                    showGameOver();
                    return; // Sair da função para não continuar com o rosto triste normal
                }
                
                // Mostrar o rosto triste
                sadFace.classList.add('show');
                
                // Avançar para a próxima letra após 3 segundos
                setTimeout(() => {
                    sadFace.classList.remove('show');
                    advanceToNextLetter();
                }, 3000); // 3 segundos para respostas incorretas
            }
        });
    });

    // Function to advance to next letter
    function advanceToNextLetter() {
        if (isRandomMode) {
            getRandomLetter();
        } else {
            currentLetterIndex = (currentLetterIndex + 1) % alphabet.length;
        }
        
        updateLetter();
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        advanceToNextLetter(); // Avançar para a próxima letra quando fechar o modal
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            advanceToNextLetter(); // Avançar para a próxima letra quando fechar o modal
        }
    });
    
    // Adicionar evento de clique na imagem do modal e palavra para avançar
    modalImage.addEventListener('click', () => {
        modal.classList.remove('show');
        advanceToNextLetter();
    });
    
    modalWord.addEventListener('click', () => {
        modal.classList.remove('show');
        advanceToNextLetter();
    });
}

// Toggle active button
function toggleActiveButton(activeBtn, inactiveBtns) {
    if (!Array.isArray(inactiveBtns)) {
        inactiveBtns = [inactiveBtns];
    }
    
    activeBtn.classList.add('active');
    inactiveBtns.forEach(btn => btn.classList.remove('active'));
}

// Update current letter
function updateLetter() {
    if (isRandomMode) {
        getRandomLetter();
    }
    
    // Atualizar a exibição da letra atual
    updateLetterDisplay();
    
    // Garantir que as imagens correspondam à letra atual
    updateImages();
}

// Get random letter
function getRandomLetter() {
    const newIndex = Math.floor(Math.random() * alphabet.length);
    // Ensure we don't get the same letter twice in a row
    currentLetterIndex = newIndex === currentLetterIndex ? 
        (newIndex + 1) % alphabet.length : newIndex;
}

// Update letter display based on case setting
function updateLetterDisplay() {
    const currentLetter = alphabet[currentLetterIndex];
    
    let displayLetter;
    if (letterCase === 'upper') {
        displayLetter = currentLetter.toUpperCase();
    } else if (letterCase === 'lower') {
        displayLetter = currentLetter.toLowerCase();
    } else { // both
        displayLetter = Math.random() > 0.5 ? 
            currentLetter.toUpperCase() : currentLetter.toLowerCase();
    }
    
    currentLetterEl.textContent = displayLetter;
}

// Update images based on current letter
function updateImages() {
    // Desbloqueamos o jogo quando atualizamos as imagens
    isGameLocked = false;
    
    const currentLetter = alphabet[currentLetterIndex];
    
    try {
        // Verificar se existem palavras para a letra atual
        if (!letterWords[currentLetter] || letterWords[currentLetter].length === 0) {
            console.error(`Erro: Não há palavras definidas para a letra "${currentLetter}"`);
            // Se por algum motivo não houver palavras definidas, avançar para próxima letra
            if (isRandomMode) {
                getRandomLetter();
            } else {
                currentLetterIndex = (currentLetterIndex + 1) % alphabet.length;
            }
            // Chamamos updateLetter recursivamente, mas com proteção
            setTimeout(() => updateLetter(), 0);
            return; // Sair da função atual
        }
        
        // Get two random words not starting with current letter
        currentIncorrectWords = getIncorrectImages(currentLetter);
        
        // Verificar se conseguimos obter imagens incorretas
        if (!currentIncorrectWords || currentIncorrectWords.length < 2) {
            console.error(`Erro: Não foi possível obter imagens incorretas para a letra "${currentLetter}"`);
            // Tentar com outra letra
            getRandomLetter();
            setTimeout(() => updateLetter(), 0);
            return;
        }
        
        // Get a random word starting with current letter
        const letterWordsForCurrentLetter = letterWords[currentLetter];
        // Selecionar palavra aleatória da lista de palavras para a letra atual
        const correctWordIndex = Math.floor(Math.random() * letterWordsForCurrentLetter.length);
        currentCorrectWord = letterWordsForCurrentLetter[correctWordIndex];
        
        // Se não conseguimos obter uma palavra correta, tentar com outra letra
        if (!currentCorrectWord) {
            console.error(`Erro: Não foi possível obter palavra correta para a letra "${currentLetter}"`);
            getRandomLetter();
            setTimeout(() => updateLetter(), 0);
            return;
        }
        
        // Randomly select which position (0, 1, or 2) will show the correct image
        correctImageIndex = Math.floor(Math.random() * 3);
        
        // Criar um array com todas as três imagens na ordem que serão exibidas
        let allImages = Array(3).fill(null);
        
        // Primeiro, colocamos a imagem correta na posição correta
        allImages[correctImageIndex] = {
            word: currentCorrectWord.word,
            image: currentCorrectWord.image,
            isCorrect: true,
            wordIndex: 0
        };
        
        // Agora, preenchemos as posições restantes com as imagens incorretas
        let incorrectCounter = 0;
        for (let i = 0; i < 3; i++) {
            if (i !== correctImageIndex) {
                if (incorrectCounter < currentIncorrectWords.length) {
                    allImages[i] = {
                        word: currentIncorrectWords[incorrectCounter].word,
                        image: currentIncorrectWords[incorrectCounter].image,
                        isCorrect: false,
                        wordIndex: incorrectCounter
                    };
                    incorrectCounter++;
                } else {
                    // Caso de erro: não há imagens incorretas suficientes
                    console.error('Erro: Não há imagens incorretas suficientes');
                    getRandomLetter();
                    setTimeout(() => updateLetter(), 0);
                    return;
                }
            }
        }
        
        // Verificar se todas as posições foram preenchidas
        const allFilled = allImages.every(img => img !== null);
        if (!allFilled) {
            console.error('Erro: Nem todas as posições de imagem foram preenchidas');
            getRandomLetter();
            setTimeout(() => updateLetter(), 0);
            return; // Sair da função se houver erro
        }
        
        // Update image elements
        imageOptions.forEach((option, index) => {
            // Remove any previous feedback classes
            option.classList.remove('selected', 'correct', 'incorrect');
            
            const currentImage = allImages[index];
            
            // Atualizar estrutura HTML para acomodar a palavra abaixo da imagem
            option.innerHTML = `
                <div class="image-wrapper">
                    <img src="${currentImage.image}" alt="${currentImage.word}">
                </div>
                <div class="word-label">${currentImage.word}</div>
            `;
            
            option.setAttribute('data-correct', currentImage.isCorrect.toString());
            option.setAttribute('data-word-index', currentImage.wordIndex.toString());
            
            // Fallback para imagens não encontradas
            const imgElement = option.querySelector('img');
            imgElement.onerror = function() {
                this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="%23333" dominant-baseline="middle" text-anchor="middle">' + currentImage.word + '</text></svg>';
            };
        });
        
        // Verificação final: garantir que pelo menos uma opção é a correta
        const correctOption = document.querySelector('.image-option[data-correct="true"]');
        if (!correctOption) {
            console.error('Erro crítico: Nenhuma opção marcada como correta após a atualização');
            // Tentar novamente com uma nova letra
            getRandomLetter();
            setTimeout(() => updateLetter(), 0);
            return;
        }
        
        // Aplicar a classe show-words se necessário
        if (showWords) {
            document.body.classList.add('show-words');
        } else {
            document.body.classList.remove('show-words');
        }
        
    } catch (error) {
        console.error('Erro ao atualizar imagens:', error);
        // Em caso de erro, tentar com outra letra
        getRandomLetter();
        setTimeout(() => updateLetter(), 0);
    }
}

// Get two incorrect images (not starting with current letter)
function getIncorrectImages(currentLetter) {
    const allLetters = Object.keys(letterWords).filter(letter => letter !== currentLetter);
    
    // Pick two random letters
    const randomLetters = [];
    while (randomLetters.length < 2) {
        const randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        if (!randomLetters.includes(randomLetter)) {
            randomLetters.push(randomLetter);
        }
    }
    
    // Pick a random word from each letter
    const incorrectImages = [];
    
    // Primeira imagem incorreta
    const firstLetterWords = letterWords[randomLetters[0]];
    const firstWordIndex = Math.floor(Math.random() * firstLetterWords.length);
    incorrectImages.push(firstLetterWords[firstWordIndex]);
    
    // Segunda imagem incorreta (garantindo que seja diferente da primeira)
    const secondLetterWords = letterWords[randomLetters[1]];
    let secondWordIndex;
    let secondWord;
    let attempts = 0;
    const maxAttempts = 10; // Limite de tentativas para evitar loop infinito
    
    do {
        secondWordIndex = Math.floor(Math.random() * secondLetterWords.length);
        secondWord = secondLetterWords[secondWordIndex];
        attempts++;
        
        // Se já tentamos muitas vezes ou as letras são diferentes, podemos sair do loop
        // Letras diferentes já garantem imagens diferentes na maioria dos casos
        if (attempts >= maxAttempts || randomLetters[0] !== randomLetters[1]) {
            break;
        }
    } while (secondWord.word === incorrectImages[0].word || secondWord.image === incorrectImages[0].image);
    
    incorrectImages.push(secondWord);
    
    return incorrectImages;
} 