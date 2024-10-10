/****************************************************
 * Objetivo: MAnipular dados de um array de livros, utilizando conceito de API
 * Data: 02/10/2024
 * autor: Raphael
 * versão: 1.0 
 */

// import { livros } from './livros.js';


// const setCreateCard = function (dadosLivros) {
//     console.log(livros)

//     // recebe o elemento pricipal do html para colocar mos as caixas dos produtos 
//     let divCardProdutos = document.getElementById('cardProdutos')

//     // forEach(para cada um) - percorre por todo o array do livros.js
//     dadosLivros[0].books.forEach(function (item) {



//         //Cria um elemento html  pelo JavaScript <div> </div>
//         let divCaixaProduto = document.createElement('div')
//         let h2CaixaTitulo = document.createElement('h2')
//         let figureCaixaImagem = document.createElement('figure')
//         let img = document.createElement('img')
//         let divCaixaTexto = document.createElement('div')
//         let pCaixaTexto = document.createElement('p')
//         let h2CaixaPreco = document.createElement('h2')



//         //cria um bloco de texto para ser inserido em um elemento html  
//         let textoTitulo = document.createTextNode(item.title)
//         let textoParagrafo = document.createTextNode(item.subtitle)
//         let PrecoProduto = document.createTextNode(item.price)


//         //permite criar um atributo mo html pelo js 
//         // setatribute coloca alguma coisa getattribute pega alguma coisa 
//         divCaixaProduto.setAttribute('class', 'caixa_produto')
//         h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
//         figureCaixaImagem.setAttribute('class', 'caixa_imagem')
//         img.setAttribute('src', item.image)
//         img.setAttribute('alt', 'imagem do livro 01')
//         img.setAttribute('title', item.title)
//         divCaixaTexto.setAttribute('class', 'caixa_texto')
//         h2CaixaPreco.setAttribute('class', 'caixa_preco' )


//         //o permite associar o elemento filho ao elemento pai 
//         divCardProdutos.appendChild(divCaixaProduto)
//         divCaixaProduto.appendChild(h2CaixaTitulo)
//         h2CaixaTitulo.appendChild(textoTitulo)
//         divCaixaProduto.appendChild(figureCaixaImagem)
//         figureCaixaImagem.appendChild(img)
//         divCaixaProduto.appendChild(divCaixaTexto)
//         divCaixaTexto.appendChild(pCaixaTexto)
//         pCaixaTexto/*pCaixaTexto*/.appendChild(textoParagrafo)
//         divCaixaProduto.appendChild(h2CaixaPreco)
//         h2CaixaPreco.appendChild(PrecoProduto)
//     })
// }


// // Criando um evento de escuta para a ação de carregar(load) do site
// window.addEventListener('load', function () {
//     setCreateCard(livros[0])
// })


import { livros } from './livros.js';

//retornar os livros da biblioteca de livros 
const setCreateCard = function (dadosLivros) {
    console.log(livros)

    // recebe o elemento pricipal do html para colocar mos as caixas dos produtos 
    let divCardProdutos = document.getElementById('cardProdutos')

    //for each, "para cada um" percorre toda array de livros 
    dadosLivros.books.forEach(function (item) {



        //Cria um elemento html  pelo JavaScript <div> </div>
        let divCaixaProduto = document.createElement('div')
        let h2CaixaTitulo = document.createElement('h2')
        let figureCaixaImagem = document.createElement('figure')
        let img = document.createElement('img')
        let divCaixaTexto = document.createElement('div')
        let pCaixaTexto = document.createElement('p')
        let h2CaixaPreco = document.createElement('h2')



        //cria um bloco de texto para ser inserido em um elemento html  
        let textoTitulo = document.createTextNode(item.title)
        let textoParagrafo = document.createTextNode(item.subtitle)
        let PrecoProduto = document.createTextNode(item.price)


        //permite criar um atributo mo html pelo js 
        // setatribute coloca alguma coisa getattribute pega alguma coisa 
        divCaixaProduto.setAttribute('class', 'caixa_produto')
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
        figureCaixaImagem.setAttribute('class', 'caixa_imagem')
        img.setAttribute('src', item.image)
        img.setAttribute('alt', 'imagem do livro 01')
        img.setAttribute('title', item.title)
        divCaixaTexto.setAttribute('class', 'caixa_texto')
        h2CaixaPreco.setAttribute('class', 'caixa_preco')


        //o permite associar o elemento filho ao elemento pai 
        divCardProdutos.appendChild(divCaixaProduto)
        divCaixaProduto.appendChild(h2CaixaTitulo)
        h2CaixaTitulo.appendChild(textoTitulo)
        divCaixaProduto.appendChild(figureCaixaImagem)
        figureCaixaImagem.appendChild(img)
        divCaixaProduto.appendChild(divCaixaTexto)
        divCaixaTexto.appendChild(pCaixaTexto)
        pCaixaTexto/*pCaixaTexto*/.appendChild(textoParagrafo)
        divCaixaProduto.appendChild(h2CaixaPreco)
        h2CaixaPreco.appendChild(PrecoProduto)
    })
}

const getDadosLivrosApi = async function () {
    let url = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros'
    let response = await fetch(url)
    let dados = await response.json()
    setCreateCard(dados)
    console.log(dados)
}

// Criando um evento de escuta para a ação de carregar(load) do site
window.addEventListener('load', function () {
    // setCreateCard(livros[0])
    getDadosLivrosApi()
})
