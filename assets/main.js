const rowEl = document.querySelector('.row')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const cards = response.data
        console.log(cards);
        let cardElement = ''
        cards.forEach(card => {
            const {title, url} = card

            const markup = `
            <div class="col-3 m-3 photo">
                <div class="image">
                    <img src="${url}" alt="">    
                </div>
                <div class="description">
                    ${title}
                </div>
            </div>
            `
            cardElement += markup
        })

        rowEl.innerHTML = cardElement
    })