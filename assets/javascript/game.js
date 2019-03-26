$(document).ready(function () {

  // declare arrays
  var numberToGuess = 0,
    wins = 0,
    losses = 0,
    totalScore = 0;

  function resetAll() {
    numberToGuess = "";
    //  ?$("#numberToGuess, #wins, #losses, #totalScore").empty();
  }

  var randomNumber = parseInt(getRandomNumber(19, 120)),
    coinValues = {
      coin1: parseInt(getRandomNumber(1, 12)),
      coin2: parseInt(getRandomNumber(1, 12)),
      coin3: parseInt(getRandomNumber(1, 12)),
      coin4: parseInt(getRandomNumber(1, 12))
    };
  console.log("radom number is " + randomNumber);

  function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (1 + a - b)) + b;
  }

  // Add random value to coins
  $(".coin-image").on("click", function () {
    var id = $(this).attr("id");
    totalScore += coinValues["coin" + id];
    $(".score").text(totalScore);
    updateUser(randomNumber, totalScore);
  });

  // $(".coin-image.coin1").on("click", function () {
  //   totalScore = totalScore += coinValue1;
  //   $(".score").text(totalScore);
  //   updateUser(randomNumber, totalScore);
  // });

  // $(".coin-image.coin2").on("click", function () {
  //   totalScore = (totalScore += coinValue2);
  //   $(".score").text(totalScore);
  //   updateUser(randomNumber, totalScore);
  // });

  // $(".coin-image.coin3").on("click", function () {
  //   totalScore = (totalScore += coinValue3);
  //   $(".score").text(totalScore);
  //   updateUser(randomNumber, totalScore);
  // });

  // $(".coin-image.coin4").on("click", function () {
  //   totalScore = (totalScore += coinValue4);
  //   $(".score").text(totalScore);
  //   updateUser(randomNumber, totalScore);
  // });

  console.log(totalScore);
  console.log(randomNumber);

  function updateUser(randomNumber, totalScore) {
    if (randomNumber > totalScore) {
      console.log("randomnumber: " + randomNumber);
      console.log("totalScore: " + totalScore);
      resetAll();
    } else if (randomNumber < totalScore) {
      alert("Try again!")
      losses++
    } else {
      alert("Great Job, you matched the total score of " + totalScore)
      wins+
    }
  }


  // Music Button

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio")
  audioElement.setAttribute("src", "assets/music/epic.mp3");

  // Theme Button
  $(".btn-on").on("click", function () {
    audioElement.play();
  });
  $(".btn-off").on("click", function () {
    audioElement.pause();
  });

  // resetAll();
  $(".random").text(randomNumber);
});