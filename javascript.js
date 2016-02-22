var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];


var game = {
  deck: [],
  players: [Player, Computer],
  hands: [],
  playerDeck: [],
  computerDeck: []


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
  }, //close build deck

  shuffleDeck: function(){
    game.deck.sort(function(){
      var randomValue = Math.random();
        if (randomValue > 0.5){
          return 1;
        }
          else{
            return -1;
          }
    });
  },

  buildHands: function(){
      var computerDeck = this.deck.slice(0,52);
      var playerDeal = this.deck.splice(0, 25);
        game.playerDeck.push(playerDeal);
        console.log(buildHands);
  }









}//close var game
