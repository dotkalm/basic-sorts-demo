loadDeck()
function loadDeck(){
	const suitMap = { 
		spades: "\u2660",
		diamonds: "\u2666",
		clubs: "\u2663",
		hearts: "\u2665", 
	}
	const deckZone = document.querySelector(".deck-zone")
	checkStatus()
	for(const i in deck){
		const { rank, suit } = deck[i]
		const card = document.createElement("div")
		card.setAttribute("class", `card ${suit}`)
		if(currentPair.includes(Number(i))){
			card.setAttribute("draggable", true)
			card.style.backgroundColor = "antiquewhite"
			card.style.borderColor = "antiquewhite"
		}
		card.setAttribute("id", i)
		const rankCard = document.createElement("div")
		rankCard.setAttribute("class", "rank")
		const suitCard = document.createElement("div")
		suitCard.setAttribute("class", "suit")
		const suitCardFace = document.createElement("div")
		suitCardFace.setAttribute("class", "suit-face")
		card.style.backgroundImage = `url("assets/${suit}.svg")`
		rankCard.innerText = isNaN(Number(rank)) ? rank[0] : rank
		suitCard.innerText = suitMap[suit] 
		suitCardFace.innerText = suitMap[suit] 
		card.appendChild(rankCard)
		card.appendChild(suitCard)
		//card.appendChild(suitCardFace)
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
	const [ left, right ] = currentPair
	if(left !== from){
		swapHappened = true
	}
	if(right === 51){
		currentPair[0] = 0
		currentPair[1] = 1
		if(swapHappened === null){
			swapHappened = false 
			return
		}
		swapHappened = null 
	}else{
		currentPair[0] = right 
		currentPair[1] = right + 1 
	}
	loadDeck()
}
function automateBubble(){
	//while(swapHappened !== false){ }
	const [ left, right ] = currentPair
	const leftCard = deck[left]
	const rightCard = deck[right]
	console.log(leftCard, rightCard)
}
automateBubble()
