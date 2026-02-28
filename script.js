const pesquisa = document.getElementById("pesquisa")
const button = document.getElementById("button")
const display = document.getElementById("display")

const search = async () => {
    const acao = pesquisa.value 
    const dado = await fetch(`https://rickandmortyapi.com/api/character/${acao}`)
    const dadoJson = await dado.json()
    const resultado = dadoJson

    const name = resultado.name
    const img = resultado.image
    const status = resultado.status
    const genero = resultado.gender

    display.innerHTML=`
    <p><h1 class="name">${name}</h1></p>
    <p><img src="${img}" class="img"></p>
    <h1 class="status">${status}</h1>
    <h1 class="gender">${genero}</h1>
    `

}

button.addEventListener("click", search)
