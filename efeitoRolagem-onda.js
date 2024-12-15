window.addEventListener("scroll", function() {
    var wave = document.querySelector(".wave");
    var scrollPosition = window.scrollY;
    
    // Faz a onda mover de acordo com a rolagem
    wave.style.transform = `translateX(${scrollPosition * 0.5}px)`;
  });
  