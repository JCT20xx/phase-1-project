const site = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.'
document.addEventListener('DOMContentLoaded', () => {
    loadPokemon()
})

let pokemon

function loadPokemon(){
    const div = document.querySelector('div')
    div.innerHTML = ''
    fetch(site)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        pokemon = data
        listPokemon()
    })}

function listPokemon(){
    const ul = document.getElementById('pokemon_list')
    pokemon.results.forEach(mon => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const a = document.createElement('a')
        a.innerText = mon.name
        a.id = mon.url
        a.className = 'monsters'
        a.href='#'
        li.appendChild(a)
    })
    ul.addEventListener('click', whoseThatPokemon)
}

function whoseThatPokemon(e){
    const pokemon = e.target.innerText
    const ul = document.getElementById('pokemon_list')
    ul.innerHTML = ''
    fetch(e.target.id)
    .then(resp => resp.json())
    .then(data => console.log(data))
    const div = document.querySelector('div')
    
    
    
    
    const back = document.createElement('form')
    back.innerHTML = '<form><input type="button" value="Main List"></form>'
    div.appendChild(back)  
    back.addEventListener('click', loadPokemon)
}

