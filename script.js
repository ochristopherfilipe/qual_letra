// Define the alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Word and image database
const letterWords = {
    'a': [ { word: 'Abacaxi', image: 'images/a/abacaxi.jpg' }, { word: 'Abelha', image: 'images/a/abelha.jpg' }, { word: 'Avião', image: 'images/a/aviao.jpg' } ],
    'b': [ { word: 'Bola', image: 'images/b/bola.jpg' }, { word: 'Banana', image: 'images/b/banana.jpg' }, { word: 'Borboleta', image: 'images/b/borboleta.jpg' } ],
    'c': [ { word: 'Cachorro', image: 'images/c/cachorro.jpg' }, { word: 'Casa', image: 'images/c/casa.jpg' }, { word: 'Coração', image: 'images/c/coracao.jpg' } ],
    'd': [ { word: 'Dente', image: 'images/d/dente.jpg' }, { word: 'Dinossauro', image: 'images/d/dinossauro.jpg' }, { word: 'Dado', image: 'images/d/dado.jpg' } ],
    'e': [ { word: 'Elefante', image: 'images/e/elefante.jpg' }, { word: 'Escova de Dentes', image: 'images/e/escova.jpg' }, { word: 'Estrela', image: 'images/e/estrela.jpg' } ],
    'f': [ { word: 'Flor', image: 'images/f/flor.jpg' }, { word: 'Frutas', image: 'images/f/frutas.jpg' }, { word: 'Fogo', image: 'images/f/fogo.jpg' } ],
    'g': [ { word: 'Gato', image: 'images/g/gato.jpg' }, { word: 'Girafa', image: 'images/g/girafa.jpg' }, { word: 'Gelo', image: 'images/g/gelo.jpg' } ],
    'h': [ { word: 'Helicóptero', image: 'images/h/helicoptero.jpg' }, { word: 'Hambúrguer', image: 'images/h/hamburguer.jpg' }, { word: 'Hipopótamo', image: 'images/h/hipopotamo.jpg' } ],
    'i': [ { word: 'Iglu', image: 'images/i/iglu.jpg' }, { word: 'Igreja', image: 'images/i/igreja.jpg' }, { word: 'Ilha', image: 'images/i/ilha.jpg' } ],
    'j': [ { word: 'Janela', image: 'images/j/janela.jpg' }, { word: 'Jacaré', image: 'images/j/jacare.jpg' }, { word: 'Joaninha', image: 'images/j/joaninha.jpg' } ],
    'k': [ { word: 'Kiwi', image: 'images/k/kiwi.jpg' }, { word: 'Karatê', image: 'images/k/karate.jpg' }, { word: 'Koala', image: 'images/k/koala.jpg' } ],
    'l': [ { word: 'Livro', image: 'images/l/livro.jpg' }, { word: 'Leão', image: 'images/l/leao.jpg' }, { word: 'Lua', image: 'images/l/lua.jpg' } ],
    'm': [ { word: 'Maçã', image: 'images/m/maca.jpg' }, { word: 'Macaco', image: 'images/m/macaco.jpg' }, { word: 'Mão', image: 'images/m/mao.jpg' } ],
    'n': [ { word: 'Navio', image: 'images/n/navio.jpg' }, { word: 'Nuvem', image: 'images/n/nuvem.jpg' }, { word: 'Nariz', image: 'images/n/nariz.jpg' } ],
    'o': [ { word: 'Ovo', image: 'images/o/ovo.jpg' }, { word: 'Ovelha', image: 'images/o/ovelha.jpg' }, { word: 'Olho', image: 'images/o/olho.jpg' } ],
    'p': [ { word: 'Pato', image: 'images/p/pato.jpg' }, { word: 'Peixe', image: 'images/p/peixe.jpg' }, { word: 'Pão', image: 'images/p/pao.jpg' } ],
    'q': [ { word: 'Queijo', image: 'images/q/queijo.jpg' }, { word: 'Quadrado', image: 'images/q/quadrado.jpg' }, { word: 'Quebra-cabeça', image: 'images/q/quebra-cabeca.jpg' } ],
    'r': [ { word: 'Rato', image: 'images/r/rato.jpg' }, { word: 'Relógio', image: 'images/r/relogio.jpg' }, { word: 'Robô', image: 'images/r/robo.jpg' } ],
    's': [ { word: 'Sapo', image: 'images/s/sapo.jpg' }, { word: 'Sol', image: 'images/s/sol.jpg' }, { word: 'Sorvete', image: 'images/s/sorvete.jpg' } ],
    't': [ { word: 'Trem', image: 'images/t/trem.jpg' }, { word: 'Tartaruga', image: 'images/t/tartaruga.jpg' }, { word: 'Tomate', image: 'images/t/tomate.jpg' } ],
    'u': [ { word: 'Uva', image: 'images/u/uva.jpg' }, { word: 'Urso', image: 'images/u/urso.jpg' }, { word: 'Urubu', image: 'images/u/urubu.jpg' } ],
    'v': [ { word: 'Vaca', image: 'images/v/vaca.jpg' }, { word: 'Violão', image: 'images/v/violao.jpg' }, { word: 'Vela', image: 'images/v/vela.jpg' } ],
    'w': [ { word: 'Waffle', image: 'images/w/waffle.jpg' }, { word: 'Woody', image: 'images/w/woody.jpg' }, { word: 'Windsurf', image: 'images/w/windsurf.jpg' } ],
    'x': [ { word: 'Xícara', image: 'images/x/xicara.jpg' }, { word: 'Xadrez', image: 'images/x/xadrez.jpg' }, { word: 'Xilofone', image: 'images/x/xilofone.jpg' } ],
    'y': [ { word: 'Yakisoba', image: 'images/y/yakisoba.jpg' }, { word: 'Yoyo', image: 'images/y/yoyo.jpg' } ],
    'z': [ { word: 'Zebra', image: 'images/z/zebra.jpg' }, { word: 'Zíper', image: 'images/z/ziper.jpg' } ]
};

// --- App State ---
const INITIAL_LIVES = 5;
let lives = INITIAL_LIVES;
let currentLetterIndex = 0;
let isRandomMode = true;
let letterCase = 'upper';
let currentCorrectWord = null;
let currentIncorrectWords = [];
let gameStarted = false;
let showWords = false;
let isGameLocked = false;

// --- Volume State ---
let musicVolume = 0.5; // Default music volume
let effectsVolume = 0.8; // Default effects volume

// --- DOM Elements ---
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const gameOverScreen = document.getElementById('gameOverScreen');
const livesContainer = document.getElementById('livesContainer');
const randomModeBtn = document.getElementById('randomMode');
const orderModeBtn = document.getElementById('orderMode');
const upperCaseBtn = document.getElementById('upperCase');
const lowerCaseBtn = document.getElementById('lowerCase');
const bothCasesBtn = document.getElementById('bothCases');
const prevLetterBtn = document.getElementById('prevLetter');
const nextLetterBtn = document.getElementById('nextLetter');
const currentLetterEl = document.querySelector('.current-letter');
const imageOptions = document.querySelectorAll('.image-option');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalWord = document.getElementById('modalWord');
const modalContent = modal.querySelector('.modal-content');
const closeModalBtn = modal.querySelector('.close-button');
const settingsButton = document.getElementById('settingsButton');
const settingsMenu = document.getElementById('settingsMenu');
const closeSettings = document.getElementById('closeSettings');
const sadFace = document.getElementById('sadFace');
const showWordsButton = document.getElementById('showWordsButton');

// Volume Control Elements
const musicVolumeSlider = document.getElementById('musicVolumeSlider');
const effectsVolumeSlider = document.getElementById('effectsVolumeSlider');
const musicVolumeIcon = document.getElementById('musicVolumeIcon');
const effectsVolumeIcon = document.getElementById('effectsVolumeIcon');

// Audio Elements
const backgroundMusic = document.getElementById('backgroundMusic');
const clickSound = document.getElementById('clickSound');
const correctSound = document.getElementById('correctSound');
const correctSound1 = document.getElementById('correctSound1'); // Added
const eyeSound = document.getElementById('eyeSound');       // Added
const errorSound = document.getElementById('errorSound');
const gameOverSound = document.getElementById('gameOverSound');
const gameStartSound = document.getElementById('gameStartSound');

// --- Utility Functions ---
function playSound(sound) {
    if (sound && effectsVolume > 0) {
        sound.volume = effectsVolume;
        sound.currentTime = 0;
        sound.play().catch(error => console.error(`Error playing sound ${sound.id}:`, error));
    } else if (!sound) {
        console.warn("Attempted to play an undefined sound element.");
    }
}

function setLock(lockState) {
    console.log(`Setting isGameLocked to: ${lockState}`);
    isGameLocked = lockState;
}

function updateVolumeIcon(iconElement, volume) {
    if (!iconElement) return;
    iconElement.classList.remove('fa-volume-xmark', 'fa-volume-low', 'fa-volume-high');
    if (volume <= 0) iconElement.classList.add('fa-volume-xmark');
    else if (volume < 0.5) iconElement.classList.add('fa-volume-low');
    else iconElement.classList.add('fa-volume-high');
}

// --- Lives Functions ---
function initializeLivesDisplay() {
    livesContainer.innerHTML = '';
    for (let i = 0; i < INITIAL_LIVES; i++) {
        const heart = document.createElement('i');
        heart.classList.add('heart', 'fas', 'fa-heart');
        livesContainer.appendChild(heart);
    }
}
function updateLivesDisplay() {
    const heartIcons = livesContainer.querySelectorAll('.heart');
    heartIcons.forEach((heart, index) => {
        if (index < lives) heart.classList.replace('far', 'fas');
        else heart.classList.replace('fas', 'far');
    });
}
// --- End Lives Functions ---

// --- Game Start/End ---
function startGame() {
    console.log("Starting game...");
    gameStarted = true;
    setLock(false);
    lives = INITIAL_LIVES;
    initializeLivesDisplay();
    updateLivesDisplay();

    if (startScreen.style.display !== 'none') {
        startScreen.classList.add('hiding');
        setTimeout(() => {
            startScreen.style.display = 'none';
            startScreen.classList.remove('hiding');
        }, 500);
        playSound(gameStartSound);

        if (backgroundMusic.paused && musicVolume > 0) {
             backgroundMusic.volume = musicVolume;
             setTimeout(() => {
                 backgroundMusic.play().catch(error => {
                     console.error("Background music autoplay failed:", error);
                 });
             }, 100);
        }
    }
     if (gameOverScreen.style.display !== 'none') {
         gameOverScreen.style.display = 'none';
         gameOverScreen.removeEventListener('click', handleGameOverClick);
     }

    updateLetter();
}

const handleGameOverClick = () => {
    console.log("Game Over screen clicked - restarting.");
    gameOverScreen.style.display = 'none';
    startGame();
};
function showGameOver() {
    console.log("Showing Game Over screen.");
    setLock(true);
    playSound(gameOverSound);
    gameOverScreen.style.display = 'flex';
    gameOverScreen.classList.remove('hiding');
    gameOverScreen.removeEventListener('click', handleGameOverClick);
    gameOverScreen.addEventListener('click', handleGameOverClick, { once: true });
}
// --- End Game Start/End ---


// --- Modal Logic ---
const closeModalAndAdvance = () => {
    if (modal.classList.contains('show')) {
        console.log("Closing modal and advancing...");
        modal.classList.remove('show');
        advanceToNextLetter();
    } else {
        console.log("closeModalAndAdvance called but modal not shown.");
    }
};
// --- End Modal Logic ---


// --- Core Game Flow ---
function advanceToNextLetter() {
    console.log("Advancing to next letter...");
    if (isRandomMode) getRandomLetter();
    else currentLetterIndex = (currentLetterIndex + 1) % alphabet.length;
    updateLetter();
}
function updateLetter() {
    console.log("Updating letter...");
    if (isRandomMode) getRandomLetter();
    updateLetterDisplay();
    updateImages();
}
function getRandomLetter() {
    let newIndex;
    do newIndex = Math.floor(Math.random() * alphabet.length);
    while (newIndex === currentLetterIndex && alphabet.length > 1);
    currentLetterIndex = newIndex;
}
function updateLetterDisplay() {
    const currentLetter = alphabet[currentLetterIndex];
    let displayLetter;
    if (letterCase === 'upper') displayLetter = currentLetter.toUpperCase();
    else if (letterCase === 'lower') displayLetter = currentLetter.toLowerCase();
    else displayLetter = Math.random() > 0.5 ? currentLetter.toUpperCase() : currentLetter.toLowerCase();
    currentLetterEl.textContent = displayLetter;
}
function updateImages() {
    console.log("--- Updating images ---");
    setLock(false); // UNLOCK GAME

    const currentLetter = alphabet[currentLetterIndex];
    try {
        const letterData = letterWords[currentLetter];
        if (!letterData || letterData.length === 0) {
            console.error(`No words for "${currentLetter}". Skipping.`);
            setTimeout(advanceToNextLetter, 10); return;
        }
        currentIncorrectWords = getIncorrectImages(currentLetter);
        if (!currentIncorrectWords || currentIncorrectWords.length < 2) {
             console.error(`Could not get 2 incorrect images for "${currentLetter}". Skipping.`);
             setTimeout(advanceToNextLetter, 10); return;
        }
        const correctWordIndexInList = Math.floor(Math.random() * letterData.length);
        currentCorrectWord = letterData[correctWordIndexInList];
         if (!currentCorrectWord) {
            console.error(`Could not get correct word for "${currentLetter}". Skipping.`);
             setTimeout(advanceToNextLetter, 10); return;
         }
        const correctDisplayIndex = Math.floor(Math.random() * 3);
        let displayItems = [];
        displayItems[correctDisplayIndex] = { ...currentCorrectWord, isCorrect: true };
        let incorrectIdx = 0;
        for (let i = 0; i < 3; i++) {
            if (i !== correctDisplayIndex) {
                 if(incorrectIdx < currentIncorrectWords.length) {
                    displayItems[i] = { ...currentIncorrectWords[incorrectIdx], isCorrect: false };
                    incorrectIdx++;
                 } else {
                      console.error("Incorrect images array mismatch during filling.");
                       setTimeout(advanceToNextLetter, 10); return;
                 }
            }
        }
        imageOptions.forEach((option, index) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            const item = displayItems[index];
             if (!item) {
                 console.error(`Display item ${index} missing for ${currentLetter}`);
                 option.innerHTML = `<div class="image-wrapper"><img src="" alt="Error"></div><div class="word-label">Erro</div>`;
                 option.setAttribute('data-correct', 'false'); return;
            }
            option.setAttribute('data-correct', item.isCorrect.toString());
            const imgWrapper = option.querySelector('.image-wrapper');
            const wordLabel = option.querySelector('.word-label');
            let imgElement = option.querySelector('img');
            if (!imgElement && imgWrapper) {
                 imgElement = document.createElement('img');
                 imgWrapper.innerHTML = '';
                 imgWrapper.appendChild(imgElement);
            }
            if (imgElement) {
                imgElement.src = item.image || '';
                imgElement.alt = item.word || `Opção ${index + 1}`;
                imgElement.onerror = function() {
                    this.alt = item.word || 'Imagem não encontrada';
                    this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="%23555" dominant-baseline="middle" text-anchor="middle">${this.alt}</text></svg>`;
                };
            }
            if (wordLabel) {
                 wordLabel.textContent = item.word || '';
            }
        });
        document.body.classList.toggle('show-words', showWords);
        console.log("--- Images updated successfully ---");
    } catch (error) {
        console.error('Error during updateImages:', error);
         setTimeout(advanceToNextLetter, 50);
    }
}
function getIncorrectImages(currentLetter) {
    const incorrectImages = [];
    const availableLetters = Object.keys(letterWords).filter(letter => letter !== currentLetter && letterWords[letter]?.length > 0);
    let attempts = 0; const maxAttempts = 50;
    while (incorrectImages.length < 2 && attempts < maxAttempts && availableLetters.length > 0) {
        attempts++;
        const randomLetterIndex = Math.floor(Math.random() * availableLetters.length);
        const randomLetter = availableLetters[randomLetterIndex];
        const wordsFromLetter = letterWords[randomLetter];
        if (wordsFromLetter && wordsFromLetter.length > 0) {
            const randomWordIndex = Math.floor(Math.random() * wordsFromLetter.length);
            const potentialWord = wordsFromLetter[randomWordIndex];
            const alreadySelected = incorrectImages.some(img => img.word === potentialWord.word || img.image === potentialWord.image);
            if (!alreadySelected) incorrectImages.push(potentialWord);
            else availableLetters.splice(randomLetterIndex, 1);
        } else availableLetters.splice(randomLetterIndex, 1);
    }
     if(incorrectImages.length < 2) console.warn(`Could only find ${incorrectImages.length} incorrect images.`);
    return incorrectImages;
}
// --- End Core Game Flow ---


// --- Event Listeners Setup ---
function setEventListeners() {
    console.log("Setting event listeners...");

    // Start button
    startButton.addEventListener('click', startGame);

    // Settings
    settingsButton.addEventListener('click', () => {
        if (isGameLocked) { console.log("Settings button blocked by lock"); return; }
        playSound(clickSound);
        settingsMenu.classList.add('show');
    });
    closeSettings.addEventListener('click', () => settingsMenu.classList.remove('show'));
    settingsMenu.addEventListener('click', (e) => {
        if (e.target === settingsMenu) settingsMenu.classList.remove('show');
    });

    // Mode buttons
    randomModeBtn.addEventListener('click', () => { if (!isGameLocked) { isRandomMode = true; toggleActiveButton(randomModeBtn, orderModeBtn); updateLetter(); }});
    orderModeBtn.addEventListener('click', () => { if (!isGameLocked) { isRandomMode = false; toggleActiveButton(orderModeBtn, randomModeBtn); updateLetter(); }});

    // Case buttons
    upperCaseBtn.addEventListener('click', () => { if (!isGameLocked) { letterCase = 'upper'; toggleActiveButton(upperCaseBtn, [lowerCaseBtn, bothCasesBtn]); updateLetterDisplay(); }});
    lowerCaseBtn.addEventListener('click', () => { if (!isGameLocked) { letterCase = 'lower'; toggleActiveButton(lowerCaseBtn, [upperCaseBtn, bothCasesBtn]); updateLetterDisplay(); }});
    bothCasesBtn.addEventListener('click', () => { if (!isGameLocked) { letterCase = 'both'; toggleActiveButton(bothCasesBtn, [upperCaseBtn, lowerCaseBtn]); updateLetterDisplay(); }});

    // Volume Sliders
    musicVolumeSlider.addEventListener('input', (e) => {
        musicVolume = parseFloat(e.target.value);
        backgroundMusic.volume = musicVolume;
        updateVolumeIcon(musicVolumeIcon, musicVolume);
        if (musicVolume > 0 && backgroundMusic.paused && gameStarted) {
             backgroundMusic.play().catch(e => console.error("Error resuming music:", e));
        } else if (musicVolume <= 0) {
             backgroundMusic.pause();
        }
    });
    effectsVolumeSlider.addEventListener('input', (e) => {
        effectsVolume = parseFloat(e.target.value);
        updateVolumeIcon(effectsVolumeIcon, effectsVolume);
    });

    // Navigation buttons
    prevLetterBtn.addEventListener('click', () => { if (!isGameLocked) { playSound(clickSound); if (!isRandomMode) { currentLetterIndex = (currentLetterIndex - 1 + alphabet.length) % alphabet.length; updateLetter(); } else { getRandomLetter(); updateLetterDisplay(); updateImages(); } }});
    nextLetterBtn.addEventListener('click', () => { if (!isGameLocked) { playSound(clickSound); if (!isRandomMode) { currentLetterIndex = (currentLetterIndex + 1) % alphabet.length; updateLetter(); } else { getRandomLetter(); updateLetterDisplay(); updateImages(); } }});

    // Show/Hide Words Button
    showWordsButton.addEventListener('click', () => {
        if (isGameLocked) { console.log("Show words blocked by lock"); return; }
        playSound(eyeSound); // Play specific eye sound <--- CHANGE HERE
        showWords = !showWords;
        showWordsButton.classList.add('bouncing');
        showWordsButton.addEventListener('animationend', () => showWordsButton.classList.remove('bouncing'), { once: true });
        showWordsButton.innerHTML = showWords ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
        document.body.classList.toggle('show-words', showWords);
    });

    // --- Image Option Click (Interaction Logic) ---
    imageOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (isGameLocked) { console.log("Image click blocked by lock"); return; }
            console.log("Image clicked.");
            setLock(true); // LOCK GAME

            const isCorrect = option.getAttribute('data-correct') === 'true';
            imageOptions.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));

            if (isCorrect) {
                console.log("Correct answer.");
                option.classList.add('correct');
                playSound(correctSound); // Play original correct sound
                playSound(correctSound1); // Play NEW correct sound 1 <--- CHANGE HERE

                const imgElement = option.querySelector('img');
                const wordText = option.querySelector('.word-label')?.textContent || 'Palavra';
                modalImage.src = imgElement?.src || '';
                modalWord.textContent = wordText;
                modalImage.onerror = function() { /* fallback */ };
                modalWord.innerHTML = wordText + '<div class="click-instruction">Clique para continuar</div>';
                modal.classList.add('show');
                console.log("Modal shown. Game locked.");

            } else {
                console.log("Incorrect answer.");
                option.classList.add('incorrect');
                playSound(errorSound);
                lives--;
                updateLivesDisplay();

                if (lives <= 0) {
                    console.log("No lives left. Triggering Game Over.");
                    setTimeout(showGameOver, 500);
                } else {
                    console.log(`Lives remaining: ${lives}. Showing feedback.`);
                    sadFace.classList.add('show');
                    setTimeout(() => {
                        console.log("Incorrect feedback timeout ended. Advancing.");
                        sadFace.classList.remove('show');
                        advanceToNextLetter(); // This unlocks via updateImages
                    }, 2000);
                }
            }
        });
    }); // End imageOptions forEach

    // --- Modal Event Listeners ---
    closeModalBtn.addEventListener('click', (e) => { e.stopPropagation(); console.log("Modal close button."); closeModalAndAdvance(); });
    modal.addEventListener('click', (e) => { if (e.target === modal) { console.log("Modal background."); closeModalAndAdvance(); } });
    modalContent.addEventListener('click', (e) => { if (!e.target.classList.contains('close-button')) { console.log("Modal content."); closeModalAndAdvance(); } });
    // --- End Modal Listeners ---

    console.log("Event listeners set.");

} // End setEventListeners

// Toggle active button helper
function toggleActiveButton(activeBtn, inactiveBtns) {
    if (!Array.isArray(inactiveBtns)) inactiveBtns = [inactiveBtns];
    activeBtn.classList.add('active');
    inactiveBtns.forEach(btn => btn?.classList.remove('active'));
}

// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Set initial UI from variables
    musicVolumeSlider.value = musicVolume;
    effectsVolumeSlider.value = effectsVolume;
    updateVolumeIcon(musicVolumeIcon, musicVolume);
    updateVolumeIcon(effectsVolumeIcon, effectsVolume);
    backgroundMusic.volume = musicVolume;

    setEventListeners(); // Setup interactions
    console.log("DOM Loaded and Initial Setup Complete.");
});