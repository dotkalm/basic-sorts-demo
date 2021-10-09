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
		card.style.backgroundImage = `url("assets/${suit}.svg")`
		rankCard.innerText = isNaN(Number(rank)) ? rank[0] : rank
		suitCard.innerText = suitMap[suit] 
		card.appendChild(rankCard)
		card.appendChild(suitCard)
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
		}
		swapHappened = null 
	}else{
		currentPair[0] = right 
		currentPair[1] = right + 1 
	}
	loadDeck()
}
function automateBubble(){
	const rankingArray = ranking()
	//while(swapHappened !== false){ }
	const [ left, right ] = currentPair
	const leftCard = deck[Number(left)]
	const rightCard = deck[right]
	function getIndex({rank}){
		return rankingArray.indexOf(rank)
	}
	const leftIndex = getIndex(leftCard)
	const rightIndex = getIndex(rightCard)
	console.log(leftCard, rightCard)
	console.log(leftIndex, rightIndex)
	if(leftIndex <= rightIndex){
		makeSwap(left, right)
	}else{
		makeSwap(right, left)
	}
}
window.onload = () => {
	loadDeck()
	automateBubble()
}
