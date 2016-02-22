var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];


var game = {
  deck: [],
  player: "John",
  hands: [],
  playerDeck: [],
  computerDeck: [],

  getPlayer: function(){
    var userInput = prompt("Enter your name.");
    this.player = userInput;
    console.log("welcome " + this.player);
  },

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
      var playerDeal = this.deck.slice(0, 26);
      var computerDeal = this.deck.slice(26,52);
        this.playerDeck.push(playerDeal);
        this.computerDeck.push(computerDeal);
        console.log(this.playerDeck);
        console.log(this.computerDeck);
  },
};

game.buildDeck();
game.shuffleDeck();
game.buildHands();
