let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
// add Bootstrap classes to the container
container.classList.add("d-flex");
container.classList.add("flex-wrap");
container.classList.add("justify-content-center");
container.classList.add("align-items-center");
container.classList.add("gap-3");
container.classList.add("mt-5");
console.log(container);

let card = document.createElement("div");
card.className = "card";

let cardName = document.createElement("h2");

let cardImg = document.createElement("img");


fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let characters = data.results;
        characters.map((item) => {

            //create a card for each character- when i created it outside the map function it only created one card
            let card = document.createElement("div");
            card.className = "card";
            let cardName = document.createElement("h2");
            let cardImg = document.createElement("img");

            cardName.innerText = item.name;
            cardImg.src = item.image;
            // add  Bootstrap classes to the card and image
            cardImg.classList.add("img-fluid");
            cardImg.classList.add("rounded");
            cardImg.classList.add("mb-3");
            cardImg.classList.add("w-100");
            cardImg.classList.add("h-75");
            card.classList.add("text-center");
            card.classList.add("bg-light");
            card.classList.add("rounded");
            card.classList.add("shadow");
            card.classList.add("p-3");
            card.classList.add("m-2");
            card.classList.add("col-3");
        
            card.appendChild(cardName);
            card.appendChild(cardImg);
            container.appendChild(card);
            

        });


    });



