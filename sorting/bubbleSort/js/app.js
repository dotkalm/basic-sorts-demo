console.log('inside the console')

const deckZone = document.querySelector(".deck-zone")
function loadDeck(){
	console.log(deck)
	for(const i in deck){
		const { rank, suit } = deck[i]
		const card = document.createElement("div")
		card.setAttribute("id", Number(i)+1)
		card.setAttribute("draggable", true)
		card.setAttribute("class", `card ${suit}`)
		const rankCard = document.createElement("div")
		rankCard.setAttribute("class", "rank")
		rankCard.setAttribute("draggable", false)
		const suitCard = document.createElement("div")
		suitCard.setAttribute("class", "suit")
		const image = document.createElement("img")
		image.setAttribute("src", `assets/${suit}.svg`)
		image.setAttribute("draggable", false)
		rankCard.innerText = isNaN(Number(rank)) ? rank[0] : rank
		suitCard.innerText = suit 
		card.appendChild(rankCard)
		//card.appendChild(suitCard)
		card.appendChild(image)
		deckZone.appendChild(card)
	}
}
loadDeck()

