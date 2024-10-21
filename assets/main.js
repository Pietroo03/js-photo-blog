const rowEl = document.querySelector('.row')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const cards = response.data
        console.log(cards);
        let cardElement = ''
        cards.forEach(card => {
            const {title, url} = card
            console.log(card);
            
            const markup = `
            <div class="col-12 col-md-5 col-lg-3 m-3 photo">
                <div class="image">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <img class="card-img" type="button" src="${url}" alt="">    
                </div>
                <div class="description">
                    ${title}
                </div>
                </div>
            `
            cardElement += markup
            console.log(cardElement);
            
        })

        rowEl.innerHTML = cardElement
    }) .catch(error => console.error(error)) 
