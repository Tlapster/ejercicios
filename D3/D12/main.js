const URL = `https://quote-garden.herokuapp.com/api/v3/quotes`;
const container =document.getElementById("container");

fetch(URL)
.then(promise => promise.json())
.then( response =>{
    console.log(response.data);
    
    response.data.forEach(quote => {
        let nodo =newQuote(quote);
        container.appendChild(nodo);
    });
    console.log(container);
})

const newQuote = (quote) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `

    <p>"${quote.quoteText}"</p>

    <small><i>${quote.quoteAuthor}</i></small>
    `
    return newDiv

}
