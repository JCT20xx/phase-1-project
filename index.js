const site = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.'
document.addEventListener('DOMContentLoaded', () => {
    loadPokemon()
})

let pokemon

function loadPokemon(){
    const div = document.querySelectorAll('div')
    div.forEach(div => div.innerText = '')
    fetch(site)
    .then(resp => resp.json())
    .then(data => {
        pokemon = data
        listPokemon()
    })}

function listPokemon(){
    const ol = document.querySelector('ol')
    pokemon.results.forEach(mon => {
        const li = document.createElement('li')
        ol.appendChild(li)
        const a = document.createElement('a')
        a.innerText = mon.name
        a.id = mon.url
        a.className = 'monsters'
        a.href='#'
        li.appendChild(a)
    })
    ol.addEventListener('click', whoseThatPokemon)
}

function whoseThatPokemon(e){
    const pokemon = e.target.id
    const ol = document.querySelector('ol')
    if (pokemon != ''){
    ol.innerHTML = ''
    fetch(e.target.id)
    .then(resp => resp.json())
    .then(data => {
    
    const div_info = document.getElementById('info')
    const div_movelist = document.getElementById('movelist')
    const div_stats = document.getElementById('stats')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const back = document.createElement('form')
    
    h1.id = "NAME"
    h1.innerText = `${data.name} #${data.id}`
    img.src = data.sprites.front_default
    img.alt = data.name
    back.innerHTML = '<form><input type="button" value="Main List"></form>'

    div_info.appendChild(h1)
    div_info.appendChild(back) 
    div_info.appendChild(img)

    div_stats.innerHTML = '<div id="stats"> <ul id="type"> <li></li> </ul>    <ul id="hw"> <li id="height"></li> <li id= "weight"></li> </ul>  </div>     <div id="movelist"></div>'
   
    const ul_types = document.getElementById('type')
    const ul_hw = document.getElementById('hw')
    const height = document.getElementById('height')
    const weight = document.getElementById('weight')
    height.innerText= `Height: ${data.height} DeciMeters`
    weight.innerText= `Weight: ${data.weight} HectoGrams`

    data.types.forEach(type => {
    const li = document.createElement('li')
    li.id = 'slot'
    li.innerText = `Type:${type.type.name}`
    ul_types.appendChild(li)
})

div_movelist.innerHTML= '<div id="movelist"> <ul id=moves></ul></div>'
const ul_moves = document.getElementById('moves')
data.moves.forEach(move => {
    const li = document.createElement('li')
    li.id = 'move'
    li.innerText = `Move: ${move.move.name}`
    ul_moves.appendChild(li)
})
   

    back.addEventListener('click', loadPokemon)
})}}

