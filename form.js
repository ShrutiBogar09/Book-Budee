

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnbaScHKBd9a393fw2W7yDHRSX4FnrzXpIxRgFoF6Yrk3735LN5fARdg/exec'             
const form = document.forms['google-sheet']   
                     
form.addEventListener('submit', e => {               
e.preventDefault()               
fetch(scriptURL, { method: 'POST', body: new FormData(form)})                 
.then(response => alert("You are Signed in now..."))                 
.catch(error => console.error('Error!', error.message))             
})