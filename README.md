# Qual é a Letra?

Um aplicativo educacional para crianças de 3 a 7 anos que estão aprendendo o alfabeto.

## Sobre o Aplicativo

"Qual é a Letra?" é um aplicativo web minimalista e responsivo projetado para ajudar crianças a aprenderem as letras do alfabeto de forma interativa e divertida. O aplicativo apresenta uma letra e três imagens, sendo que apenas uma delas começa com a letra exibida.

## Funcionalidades

- **Exibição de Letras**: Uma grande letra é mostrada na parte superior da tela.
- **Modos de Exibição**: 
  - Aleatório: exibe letras aleatoriamente
  - Alfabético: exibe letras em ordem alfabética
- **Opções de Letra**:
  - MAIÚSCULAS apenas
  - minúsculas apenas
  - Ambas (alternando aleatoriamente)
- **Jogo de Imagens**: Três imagens são mostradas, e a criança deve identificar qual começa com a letra exibida.
- **Feedback Visual**: 
  - Quando acerta, a imagem fica destacada em verde
  - Quando erra, a imagem fica destacada em vermelho
  - Após clicar, automaticamente avança para uma nova letra e novas imagens

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador web moderno.
2. Use os botões na parte superior para escolher o modo de exibição das letras e o tipo de letra.
3. Use os botões "Anterior" e "Próxima" para navegar entre as letras.
4. Clique nas imagens para verificar se correspondem à letra exibida.

## Como Adicionar Suas Próprias Imagens

O aplicativo usa uma estrutura de pastas para organizar as imagens:

1. Na pasta raiz do projeto, existe uma pasta `images/`.
2. Dentro da pasta `images/`, existem 26 subpastas, uma para cada letra do alfabeto (a-z).
3. Para adicionar suas próprias imagens:
   - Navegue até a pasta da letra correspondente (por exemplo `images/a/` para imagens que começam com A)
   - Adicione suas imagens com nomes descritivos (como `abacaxi.jpg`, `abelha.jpg`, etc.)
   - Certifique-se de que os nomes dos arquivos correspondam aos que estão no arquivo `script.js`
   - Formatos recomendados: JPG, PNG (certifique-se de que as imagens não são muito grandes, tamanho ideal é cerca de 500-800 pixels)

Exemplo para a letra 'A':
```
images/
└── a/
    ├── abacaxi.jpg
    ├── abelha.jpg
    └── aviao.jpg
```

## Design

O aplicativo usa uma paleta de cores vibrante e amigável para crianças:
- #d2fae2 (verde claro)
- #e6f8b1 (amarelo claro)
- #f6d5ad (laranja claro)
- #f6b794 (pêssego)
- #e59da0 (rosa claro)

A fonte Comic Neue foi escolhida por sua aparência amigável e fácil legibilidade para crianças.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Fonte: Comic Neue via Google Fonts

## Compatibilidade

O aplicativo é totalmente responsivo e funciona em computadores, tablets e smartphones. 