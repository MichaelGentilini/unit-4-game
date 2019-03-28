$(document).ready(function () {

  // declare arrays

  var wins = 0,
    losses = 0,
    totalScore = 0;
  var audio = new Audio('assets//music/money.mp3'),
    boo = new Audio('assets//music/heckles.mp3'),
    lion = new Audio('assets//music/lion.mp3'),
    yay = new Audio('assets//music/applause.mp3');

  function resetAll() {


    totalScore = 0;
    randomNumber = parseInt(getRandomNumber(19, 120));
    coin1 = parseInt(getRandomNumber(1, 12));
    coin2 = parseInt(getRandomNumber(1, 12));
    coin3 = parseInt(getRandomNumber(1, 12));
    coin4 = parseInt(getRandomNumber(1, 12));
    $(".random").text(randomNumber);
    $(".score").text(totalScore);
    boo.pause();
    lion.pause();
    yay.pause();
  };

  // Generate random numbers
  var randomNumber = parseInt(getRandomNumber(19, 120)),
    coinValues = {
      coin1: parseInt(getRandomNumber(1, 12)),
      coin2: parseInt(getRandomNumber(1, 12)),
      coin3: parseInt(getRandomNumber(1, 12)),
      coin4: parseInt(getRandomNumber(1, 12))
    };

  function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (1 + a - b)) + b;
  }


  // Add random value to coins
  $(".coin-image").on("click", function () {
    var id = $(this).attr("id");
    totalScore += coinValues["coin" + id];
    audio.play();
    $(".score").text(totalScore);
    updateUser(randomNumber, totalScore);
  });

  // Track wins and losses
  function updateUser(randomNumber, totalScore) {
    if (randomNumber > totalScore) {

      console.log("totalScore: " + totalScore);

    } else if (randomNumber < totalScore) {
      losses++
      $(".loser").text(losses);


      if (losses === 5) {
        lion.play();
        alert("Better luck next time!");
        resetAll();
      } else {
        boo.play();
        alert("The crowd is not happy!");
        resetAll();
      }
    } else {
      wins++
      yay.play();
      $(".winner").text(wins);
      alert("Great Job, you shall be free with your score of " + totalScore)
      resetAll();
    }
  }

  //                      Music Buttons

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio")
  audioElement.setAttribute("src", "./assets/music/epic.mp3");

  // Theme Button
  $(".btn-on").on("click", function () {
    audioElement.play();
  })
  $(".btn-off").on("click", function () {
    audioElement.pause();
  });

  // Play sound for Wins/Losses

  function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('./assets/music/Applause.mp3');
  }

  function setup() {
    mySound.setVolume(1);
    mySound.play();
  }

  $(".random").text(randomNumber);
});