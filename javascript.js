var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var playerPopped = [];
var computerPopped = [];

var game = {
  deck: [],
  player: "John",
  hands: [],
  playerDeck: [],
  computerDeck: [],




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
        this.playerDeck = playerDeal;
        this.computerDeck = computerDeal;
        console.log(this.playerDeck);
        console.log(this.computerDeck);
  },


//push an object into 'hands', object must contain player name and cards. object is name: player, cards: [] in hands

    play: function(){
      var playerPopped = this.playerDeck.pop();
      var computerPopped = this.computerDeck.pop();

          if (playerPopped > computerPopped){
            console.log("Player wins");
            console.log(playerPopped);
            console.log(computerPopped);
            game.playerDeck.push(playerPopped, computerPopped);

          } else {
            console.log("Computer wins");
            console.log(playerPopped);
            console.log(computerPopped);
            game.playerDeck.push(playerPopped, computerPopped);
            }
      console.log(this.computerDeck.length);
      console.log(this.playerDeck.length);
      // display who won, and show the cards as an alert maybe

    }


  };


game.buildDeck();
game.shuffleDeck();
game.buildHands();
do{
  game.play();
}
while(game.playerDeck.length>0 && game.computerDeck.length>0);
