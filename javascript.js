var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

var game = {
  deck: [],
  player: [],
  hands: [],

  buildDeck: function(){
    values.forEach(function(cardValue){
        var cardWorth =  values.indexOf(cardValue);

        suits.forEach(function(cardSuit){
            var playingCard= {
                value: cardValue,
                suit: cardSuit,
                worth: cardWorth,
            };
            game.deck.push(playingCard);

      });//bracker close cardSuit.
    });
  } //close build deck









};//close var game
