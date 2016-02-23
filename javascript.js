var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var playerPopped = [];
var computerPopped = [];



var game = {
  deck: [],
  player: [],
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
    var playerDeal = this.deck.slice(0, this.deck.length / 2);
    var computerDeal = this.deck.slice(this.deck.length / 2,this.deck.length);

    console.log("Player Deal " + playerDeal.length);
    console.log("Computer Deal " + computerDeal.length);
    this.playerDeck = playerDeal;
    this.computerDeck = computerDeal;
    console.log(this.playerDeck);
    console.log(this.computerDeck);
  },

  play: function(){
    var playerPopped = this.playerDeck.pop();
    var computerPopped = this.computerDeck.pop();
    if (playerPopped.worth > computerPopped.worth){
      showMe("Player wins");
      console.log(playerPopped);
      console.log(computerPopped);
      game.playerDeck.unshift(playerPopped);
      game.playerDeck.unshift(computerPopped);
      console.log(this.playerDeck.length);
      console.log(this.computerDeck.length);

    }
    else if(playerPopped.worth == computerPopped.worth){
      console.log("its a tie!");
      //eventually play war here//
    }


     else {
      showMe("Computer wins");
      console.log(playerPopped);
      console.log(computerPopped);
      game.computerDeck.unshift(computerPopped);
      game.computerDeck.unshift(playerPopped);
      console.log("computer wins with", computerPopped);
      console.log("player loses with", playerPopped);

    }
}
};

game.buildDeck();
game.shuffleDeck();
game.buildHands();

var button= document.querySelector("button");
button.addEventListener("click", function() {
  for (var i = 0; i <100000; i++){


  if(game.playerDeck.length === 0 || game.computerDeck.length === 0){
    console.log("game over");
    return;

}
  else {
    game.play();
  }
}
console.log("done");
});



function showMe(message){
  var div = document.getElementById('message');
  div.textContent= message;
  div.style.color= "red";
}
