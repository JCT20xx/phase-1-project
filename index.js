const site = 'https://api.jikan.moe/v4/anime'
document.addEventListener('DOMContentLoaded', () => {
    loadAnime()
})

let animes

function loadAnime(){
    fetch(site)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        animes = data
        listShows()
    })}

function listShows(){
    const ul = document.getElementById('show-listing')
    animes.data.forEach(anime => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const a = document.createElement('a')
        a.innerText = anime.title
        a.id = anime.mal_id
        a.href='#'
        li.appendChild(a)
    })
}

