function loadDeck(){
	const deckZone = document.querySelector(".deck-zone")
	for(const i in deck){
		if(!deck[i]){
			return
		}
		const { rank, suit } = deck[i]
		const card = document.createElement("div")
		card.setAttribute("class", `card ${suit}`)
		card.setAttribute("draggable", true)
		card.style.backgroundColor = "antiquewhite"
		card.style.borderColor = "antiquewhite"
		card.setAttribute("id", i)
		const rankCard = document.createElement("div")
		rankCard.setAttribute("class", "rank")
		const suitCard = document.createElement("div")
		suitCard.setAttribute("class", "suit")
		card.style.backgroundImage = `url("assets/${suit}.svg")`
		rankCard.innerText = isNaN(Number(rank)) ? rank[0] : rank
		card.appendChild(rankCard)
		card.appendChild(suitCard)
		deckZone.appendChild(card)
	}
}
function makeSwap(from, to){
	const deckZone = document.querySelector(".deck-zone")
	const [ current ] = deck.splice(from, 1)
	deck.splice(to, 0, current)
	const currentPair = [ dropHandlerIndex, currentIndex ]
	const [ left, right ] = currentPair
	if(right === 0){
		const currentRank = getIndex(deck[currentIndex])
	}else{
		currentIndex = right + 1
		if(currentIndex <= deck.length){
			deckZone.innerHTML = ''
			loadDeck()
		}
	}
	const sortedCorrectly = checkSort()
	if(sortedCorrectly){
		const header = document.querySelector("header")
		const statusLabel = document.querySelector("h1")
		statusLabel.innerText = "SORTED!"
	}
	return true
}

window.onload = async () => {
	loadDeck()
	checkStatus('Insertion Sort')
}

