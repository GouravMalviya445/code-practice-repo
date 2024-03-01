const form = document.querySelector('form')
let query = document.querySelector('#query')

function handleSubmit(e){
  e.preventDefault();
  let url = 'https://www.google.com/search?q='
  query = `${url}${query.value}`
  window.open(query)
}

form.addEventListener('submit', handleSubmit)