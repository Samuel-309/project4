const hamburger = document.querySelector(`.hamburger`)
const nav = document.querySelector('#navis')

hamburger,addEventListener('click', ()=> {
          nav.classList.toggle('visible')
})