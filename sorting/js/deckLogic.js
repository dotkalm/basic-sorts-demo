const deck = shuffleDeck()
let currentIndex = 1
let indexChecking = null 
const currentPair = [0,1]

function getIndex({rank}){
	return ranking().indexOf(rank)
}
function compareCurrentToSort(){
	const currentRank = deck[currentIndex] && getIndex(deck[currentIndex])
	const closestMatch = [Infinity, Infinity]
	for(let i = currentIndex -1; i >= 0; i -= 1){
		indexChecking = i
		const previousRank = deck[i] && getIndex(deck[i])
		const [ closestIndex, closestDiff ] = closestMatch
		const currentDiff = previousRank - currentRank
		if(currentDiff > 0 && closestDiff >= currentDiff){
			closestMatch[0] = i 
			closestMatch[1] = currentDiff 
		}
	}
	const [ closestIndex, closestDiff ] = closestMatch
	indexChecking = null 
	if(closestDiff === Infinity){
		return null 
	}
	return closestIndex
}
function checkStatus(label){
	const header = document.querySelector("header")
	let statusLabel = document.querySelector("h1")
	if(!statusLabel){
		statusLabel = document.createElement("h1")
		statusLabel.innerText = label 
		header.prepend(statusLabel)
	}
	if(currentIndex === deck.length - 1){
		statusLabel.innerText = "SORTED!"
	}
}
