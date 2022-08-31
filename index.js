
 const message = document.querySelector('#message')

const addMovie = (event)=>{
    event.preventDefault()
    const inputField = document.querySelector('input').value
    let movie = document.createElement('li')
   const movieTitle= document.createElement('span')
   movieTitle.textContent = inputField
   movieTitle.addEventListener('click',crossOffMovie)
   movie.appendChild(movieTitle)
   const deleteBtn = document.createElement('button')
   deleteBtn.textContent= 'x'
   deleteBtn.addEventListener('click',deleteMovie)
   movie.appendChild(deleteBtn)
   document.querySelector('ul').appendChild(movie)
 inputField = ''
}
const form =document.querySelector('form')
form.addEventListener('submit', addMovie)

const deleteMovie = (event)=>{
    event.target.parentNode.remove()
    message.textContent= `${event.target.parentNode.firstChild.textContent} was deleted`
    revealMessage()
}

const crossOffMovie = (event)=>{
event.target.classList.toggle('checked')
if(event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched`
    }else{
        message.textContent=  `${event.target.textContent} re added`
    }revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
}