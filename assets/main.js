const rowEl = document.querySelector('.row')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const cards = response.data
        console.log(cards);
        let cardElement = ''
        cards.forEach(card => {
            const { title, url } = card
            console.log(card);
            const markup = `
            <div class="col-12 col-md-5 col-lg-3 m-3 photo">
                <div class="image">
                    <img class="card-img" src="${url}" alt="">    
                    <img class="pin" src="./img/pin.svg" alt="">
                </div>
                <div class="description">
                    ${title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
                </div>
                </div>
            `
            cardElement += markup
            console.log(cardElement);

            rowEl.innerHTML = cardElement

            
        })

        const overlayEl = document.getElementById('overlay')
        const buttonEl = document.querySelector('button')
        const imgEl = document.querySelectorAll('.card-img')

        for (let i = 0; i < imgEl.length; i++) {
            const singleImg = imgEl[i];
            console.log(singleImg);
            singleImg.addEventListener("click", () => {
                overlayEl.classList.remove('d-none')
            }) 
            buttonEl, overlayEl.addEventListener('click', () => {
                overlayEl.classList.add('d-none')
            })
        }

 
        


        

        


    }).catch(error => console.error(error))

