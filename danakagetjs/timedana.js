// Set the dates we're counting down to
var countDownDates = {
  1: new Date("2024-07-01T13:00:00").getTime(),
  2: new Date("2024-07-01T14:00:00").getTime(),
  3: new Date("2024-07-01T15:00:00").getTime(),
  4: new Date("2024-07-01T16:00:00").getTime(),
  5: new Date("2024-07-01T17:00:00").getTime(),
  6: new Date("2024-07-01T18:00:00").getTime(),
};

// One hour in milliseconds
var oneHour = 1000 * 60 * 60;

// Update the count down every 1 second
var countdownfunction = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Iterate through each countdown
  for (var i = 1; i <= 6; i++) {
    var distance = countDownDates[i] - now;
    var days = Math.floor((distance - oneHour) / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      ((distance - oneHour) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor(
      ((distance - oneHour) % (1000 * 60 * 60)) / (1000 * 60)
    );
    var seconds = Math.floor(((distance - oneHour) % (1000 * 60)) / 1000);

    // Display the result in the corresponding element
    document.getElementById("countdown" + i).innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is within one hour or finished, enable the button
    if (distance <= oneHour) {
      document.getElementById("countdown" + i).innerHTML = "Dapat di akses";
      var button = document.getElementById("button" + i);
      button.disabled = false;
      button.onclick = (function (i) {
        return function () {
          var urls = [
            "https://bimaselalubenar.my.id/web-service",
            "https://bimaselalubenar.my.id/web-service",
            "https://bimaselalubenar.my.id/web-service",
            "https://bimaselalubenar.my.id/web-service",
            "https://bimaselalubenar.my.id/web-service",
            "https://bimaselalubenar.my.id/web-service",
          ];
          window.open(urls[i - 1], "_blank");
        };
      })(i);
    }
  }
}, 1000);

// Change text content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("j1").innerText = "Dana kaget batch 1";
  document.getElementById("t1").innerText = "Rp.100,- /100 Orang";

  document.getElementById("j2").innerText = "Dana kaget batch 2";
  document.getElementById("t2").innerText = "Rp.100,- /100 Orang";

  document.getElementById("j3").innerText = "Dana kaget batch 3";
  document.getElementById("t3").innerText = "Rp.200,- /50 Orang";

  document.getElementById("j4").innerText = "Dana kaget batch 4";
  document.getElementById("t4").innerText = "Rp.200,- /50 Orang";

  document.getElementById("j5").innerText = "Dana kaget batch 5";
  document.getElementById("t5").innerText = "Rp.1,000,- /10 Orang";

  document.getElementById("j6").innerText = "Dana kaget batch 6";
  document.getElementById("t6").innerText = "Bonus! ✨";
});
