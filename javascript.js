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

    //console.log("Player Deal " + playerDeal.length);
    //console.log("Computer Deal " + computerDeal.length);
    this.playerDeck = playerDeal;
    this.computerDeck = computerDeal;
  },

  play: function(){

    var playerPopped = this.playerDeck.pop();
    var computerPopped = this.computerDeck.pop();
    if (playerPopped.worth > computerPopped.worth){
      showMe("Player wins");
      showPW(playerPopped);
      showCL(computerPopped);
      //this is where the function for innerHTML will go.
      console.log("Player wins with ", playerPopped);
      console.log("Computer loses with ", computerPopped);
      game.playerDeck.unshift(playerPopped);
      game.playerDeck.unshift(computerPopped);

    }
    else if(playerPopped.worth == computerPopped.worth){
      console.log("its a tie!");
      alert("It's a tie! This is real war, the game is over. Now have a real fight");
      return;
      //eventually play war here//
    }


    else {
      showMe("Computer wins");
      showCW(computerPopped);
      showPL(playerPopped);
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
  if(game.playerDeck.length === 0 || game.computerDeck.length === 0){
    console.log("game over");
    return;
  }
  else {
    game.play();

  }
  console.log("done");
});

function showMe(message){
  var thisIs = document.getElementById('message');
  thisIs.textContent= message;
  thisIs.style.color= "red";
}
function showCW(card){
  var butt = document.querySelector(".computerHand");
  var hole = document.createElement('p');
  butt.appendChild(hole);
  hole.innerText =  card.value + " of " + card.suit;

}

function showCL(card){
  var dong = document.querySelector(".computerHand");
  var face = document.createElement('p');
  dong.appendChild(face);
  face.innerText = card.value + " of " + card.suit;
}

function showPW(card){
  var anus = document.querySelector(".playerHand");
  var chasm =  document.createElement('p');
  anus.appendChild(chasm);
  chasm.innerText = card.value + " of" + card.suit;
}

function showPL(card){
  var vag = document.querySelector(".playerHand");
  var sauce = document.createElement('p');
  vag.appendChild(sauce);
  sauce.innerText = card.value + " of " + card.suit;
}
