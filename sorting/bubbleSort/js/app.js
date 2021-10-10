const speeds = [
	{
		label: 'fastest',
		ms: 2
	},
	{
		label: 'faster',
		ms: 25
	},
	{
		label: 'fast',
		ms: 250
	},
	{
		label: 'slow',
		ms: 500
	},
	{
		label: 'slower',
		ms: 1000 
	},
	{
		label: 'slowest',
		ms: 2000 
	},
]
let speedSelection = 2
function loadDeck(){
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
			return false
		}
		swapHappened = null 
	}else{
		currentPair[0] = right 
		currentPair[1] = right + 1 
	}
	loadDeck()
	return true
}
function automateBubble(){
	if(pauseDemo){
		return
	}
	const rankingArray = ranking()
	const [ left, right ] = currentPair
	const leftCard = deck[Number(left)]
	const rightCard = deck[right]
	function getIndex({rank}){
		return rankingArray.indexOf(rank)
	}
	const leftIndex = getIndex(leftCard)
	const rightIndex = getIndex(rightCard)
	const statusText = document.querySelector("h2")
	let keepSorting = true
	if(leftIndex > rightIndex){
		statusText.innerText = `${leftIndex} > ${rightIndex}: swapping` 
		keepSorting = makeSwap(right, left)
	}else{
		statusText.innerText = `${leftIndex} <= ${rightIndex}: not swapping` 
		keepSorting = makeSwap(left, left)
	}
	if(keepSorting){
		setTimeout(() => automateBubble(), speeds[speedSelection].ms)
	}else{
		loadDeck()
	}
}

function buildSelector(){
	const selectElement = document.querySelector('#demo-speed');
	selectElement.innerHTML = ``
	for(const index in speeds){
		const { label, ms } = speeds[index]
		const opt = document.createElement('option')
		opt.setAttribute('value', index)
		opt.innerText = label
		if(speeds[speedSelection].ms === ms){
			opt.setAttribute('selected', true)
		}
		selectElement.appendChild(opt)
	}
}
window.onload = () => {
	loadDeck()
	buildSelector()
	const selectElement = document.querySelector('option');
}
