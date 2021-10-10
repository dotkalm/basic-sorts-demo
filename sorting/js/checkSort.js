function checkSort(){
	for(let i = 1; i < deck.length ; i += 1){
		const previous = deck[i -1] 
		const current = deck[i]
		const previousIndex = getIndex(previous)
		const currentIndex = getIndex(current)
		if(previousIndex > currentIndex){
			return false
		}
	}
	return true
}
