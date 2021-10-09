const deck = shuffleDeck()
let swapHappened = null
const currentPair = [ 0, 1 ]
function checkStatus(){
	console.log(deck)
	if(swapHappened === null){
		const [ left, right ] = currentPair
		const header = document.querySelector("header")
		let swapHappenedLabel = document.querySelector("h1")
		if(!swapHappenedLabel){
			swapHappenedLabel = document.createElement("h1")
			header.appendChild(swapHappenedLabel)
		}
		if(left >= 0){
			swapHappenedLabel.innerText = "Bubbling BRB..."
		}
		if(deck && right === deck.length - 1){
			swapHappenedLabel.innerText = "SORTED!"
		}
	}
}
