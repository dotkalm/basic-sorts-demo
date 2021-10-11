function shuffleDeck(){
	const deck = generateDeck()
	const newDeck = []
	while(deck.length > 0){
		const index = Math.floor(Math.random() * deck.length)
		newDeck.push(deck[index])
		deck.splice(index,1)
	}
	return newDeck
}
function ranking(){
	const array = new Array(13)
	for (let index = 1; index <= 13; index += 1) {
		switch (index) {
			case 10:
				array[index] = 'Jack';
				break;
			case 11:
				array[index] = 'Queen';
				break;
			case 12:
				array[index] = 'King';
				break;
			case 13:
				array[index] = 'Ace';
				break;
			default:
				array[index] = String(index);
		}
	}
	return array
}
function generateDeck(){
  const deck = new Array(52).fill({ suit: '', rank: '' });
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (let i = 0; i < suits.length; i += 1) {
    const suit = suits[i];
    for (let index = 1; index <= 13; index += 1) {
      const num = i * 13 + index - 1;
      const element = { suit: '', rank: '' };
      element.suit = suit;
      switch (index) {
        case 10:
          element.rank = 'Jack';
          break;
        case 11:
          element.rank = 'Queen';
          break;
        case 12:
          element.rank = 'King';
          break;
        case 13:
          element.rank = 'Ace';
          break;
        default:
          element.rank = String(index + 1);
      }
      deck[num] = element;
    }
  }
  return deck;
};
