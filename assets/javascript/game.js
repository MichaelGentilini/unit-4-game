$(document).ready(function () {
  // declare arrays

  var wins = 0,
    losses = 0,
    totalScore = 0;
  // var audio = new Audio("assets//music/money.mp3"),
  var boo = new Audio("./assets//music/heckles.mp3"),
    lion = new Audio("../assets//music/lion.mp3"),
    yay = new Audio("../assets//music/applause.mp3");

  var images = [
    "./assets/images/undecided.jpg",
    "./assets/images/thumbs-up.jpg",
    "./assets/images/thumbs-down.jpg"
  ];

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

  // Clear all and generate new numbers

  function resetAll() {
    totalScore = 0;
    randomNumber = parseInt(getRandomNumber(19, 120));
    coinValues = {
      coin1: parseInt(getRandomNumber(1, 12)),
      coin2: parseInt(getRandomNumber(1, 12)),
      coin3: parseInt(getRandomNumber(1, 12)),
      coin4: parseInt(getRandomNumber(1, 12))
    };

    $(".random").text(randomNumber);
    $(".score").text(totalScore);
    boo.pause();
    lion.pause();
    yay.pause();
  }

  // Add random value to coins
  $(".coin-image").on("click", function () {
    var id = $(this).attr("id");
    totalScore += coinValues["coin" + id];
    // audio.play();
    $(".score").text(totalScore);
    updateUser(randomNumber, totalScore);
  });

  // Track wins and losses
  function updateUser(randomNumber, totalScore) {
    if (randomNumber > totalScore) {
      $("#image-holder").html("<img src=" + images[0] + " width='440px'>");
    } else if (randomNumber < totalScore) {
      losses++;
      boo.play();
      $(".loser").text(losses);
      $("#image-holder").html("<img src=" + images[2] + " width='440px'>");
      alert("You have made the Gods angry!");
      resetAll();

    } else {
      wins++;
      yay.play();
      $(".winner").text(wins);
      $("#image-holder").html("<img src=" + images[1] + " width='440px'>");
      alert("Great Job, you shall not be fed to the lions!");
      resetAll();
    }
  }

  //                      Music Buttons

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "./assets/music/epic.mp3");

  // Theme Button
  $(".btn-on").on("click", function () {
    audioElement.play();
  });
  $(".btn-off").on("click", function () {
    audioElement.pause();
  });

  // Play sound for Wins/Losses

  function preload() {
    soundFormats("mp3", "ogg");
    mySound = loadSound("./assets/music/Applause.mp3");
  }

  function setup() {
    mySound.setVolume(1);
    mySound.play();
  }

  $(".random").text(randomNumber);
});