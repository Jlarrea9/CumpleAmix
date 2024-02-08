// script.js

function openGift() {
  document.getElementById("gift-box").classList.add("opened");
  document.getElementById("countdown").style.display = "none";
  document.getElementById("unlock-message").style.display = "block";
  document.getElementById("video-container").style.display = "block";
}

function playVideo() {
  const video = document.getElementById("video-container").getElementsByTagName('video')[0];
  video.currentTime = 0; 
  video.play(); 
}

function startCountdown() {
  // Obtener la fecha y hora actual
  const now = new Date().getTime();

  // Obtener la fecha y hora del 10 de febrero a las 00:00
  const countdownDate = new Date('2024-02-10T00:00:00').getTime();

  // Calcular la diferencia entre la fecha objetivo y la fecha actual en milisegundos
  const distance = countdownDate - now;

  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").style.display = "none";
      document.getElementById("unlock-message").style.display = "block";
      document.getElementById("video-container").style.display = "block";
    }
  }, 1000);
}

// Llamada a la función principal para iniciar el countdown
startCountdown();
