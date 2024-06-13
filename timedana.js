// Set the dates we're counting down to
var countDownDates = {
  1: new Date("2024-08-01T13:00:00").getTime(),
  2: new Date("2024-08-01T14:00:00").getTime(),
  3: new Date("2024-08-01T15:00:00").getTime(),
  4: new Date("2024-08-01T16:00:00").getTime(),
  5: new Date("2024-08-01T17:00:00").getTime(),
  6: new Date("2024-08-01T08:00:00").getTime(),
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
            "https://link.dana.id/kaget?c=sdfynzwyy&r=bgpBS5",
            "https://link.dana.id/kaget?c=skjqju2wv&r=bgpBS5",
            "https://link.dana.id/kaget?c=scpxsptj2&r=bgpBS5",
            "https://link.dana.id/kaget?c=sl58u2m4w&r=bgpBS5",
            "https://link.dana.id/kaget?c=skbnmse64&r=bgpBS5",
            "https://www.instagram.com/bimaselalubenar",
          ];
          window.open(urls[i - 1], "_blank");
        };
      })(i);
    }
  }
}, 1000);

// Change text content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("j1").innerText = "Judul 1 telah diubah!";
  document.getElementById("t1").innerText = "Text 1 telah diubah!";
  document.getElementById("j2").innerText = "Judul 2 telah diubah!";
  document.getElementById("t2").innerText = "Text 2 telah diubah!";
  document.getElementById("j3").innerText = "Judul 3 telah diubah!";
  document.getElementById("t3").innerText = "Text 3 telah diubah!";
  document.getElementById("j4").innerText = "Judul 4 telah diubah!";
  document.getElementById("t4").innerText = "Text 4 telah diubah!";
  document.getElementById("j5").innerText = "Judul 5 telah diubah!";
  document.getElementById("t5").innerText = "Text 5 telah diubah!";
  document.getElementById("j6").innerText = "Judul 6 telah diubah!";
  document.getElementById("t6").innerText = "Text 6 telah diubah!";
});
