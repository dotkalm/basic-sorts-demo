loadDeck()

function loadDeck(){
	const deckZone = document.querySelector(".deck-zone")
	for(const i in deck){
		const { rank, suit } = deck[i]
		const card = document.createElement("div")
		card.setAttribute("class", `card ${suit}`)
		card.setAttribute("draggable", true)
		card.setAttribute("id", i)
		const rankCard = document.createElement("div")
		rankCard.setAttribute("class", "rank")
		rankCard.setAttribute("draggable", false)
		const suitCard = document.createElement("div")
		suitCard.setAttribute("class", "suit")
		const image = document.createElement("img")
		image.setAttribute("draggable", false)
		image.setAttribute("src", `assets/${suit}.svg`)
		image.style.zIndex = 0
		rankCard.innerText = isNaN(Number(rank)) ? rank[0] : rank
		suitCard.innerText = suit 
		card.appendChild(image)
		card.appendChild(rankCard)
		deckZone.appendChild(card)
	}
}
function makeSwap(from, to){
	const deckZone = document.querySelector(".deck-zone")
	const fromElement = deck[from]
	const toElement = deck[to]
	deck[from] = toElement 
	deck[to] = fromElement 
	deckZone.innerHTML = ''
	loadDeck()
}

