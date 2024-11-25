const slider = document.getElementById('monthSlider');
const monthLabel = document.getElementById('monthLabel');
const monthPhoto = document.getElementById('monthPhoto');

// Array com os caminhos das fotos correspondentes aos meses
const photos = [
    "images/photo1.jpg", // Mês 1
    "images/photo2.jpg", // Mês 2
    "images/photo3.jpg", // Mês 3
    "images/photo4.jpg"  // Mês 4
  ];

// Atualiza a foto e o texto conforme o slider muda
slider.addEventListener('input', () => {
  const month = slider.value;
  monthLabel.textContent = month;
  monthPhoto.src = photos[month - 1];

  // Adiciona uma animação de "zoom" na troca da foto
  monthPhoto.style.transform = "scale(1.1)";
  monthPhoto.style.opacity = "0.5";
  setTimeout(() => {
    monthPhoto.style.transform = "scale(1)";
    monthPhoto.style.opacity = "1";
  }, 300);
});

// Função para iniciar a animação ao clicar no botão "Continuar"
function startAnimation() {
    // Adiciona uma animação no botão antes de redirecionar
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.classList.add('button-animate');
    
    // Atraso para garantir que a animação ocorra antes de redirecionar
    setTimeout(() => {
        window.location.href = "index2.html"; // Redireciona para a segunda tela (index2.html)
    }, 1000);
}

document.getElementById('continueBtn').addEventListener('click', startAnimation);
