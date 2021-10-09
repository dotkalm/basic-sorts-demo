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
        case 1:
          element.rank = 'Ace';
          break;
        case 11:
          element.rank = 'Jack';
          break;
        case 12:
          element.rank = 'Queen';
          break;
        case 13:
          element.rank = 'King';
          break;
        default:
          element.rank = String(index);
      }
      deck[num] = element;
    }
  }
  return deck;
};
