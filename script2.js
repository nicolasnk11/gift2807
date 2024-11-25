// script2.js
// Função para calcular e exibir o contador de tempo
function startCounter() {
    const startDate = new Date('2024-07-28T00:00:00'); // Data de início
    const yearsElement = document.getElementById('years');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    setInterval(function() {
      const currentDate = new Date();
      const timeDiff = currentDate - startDate;
  
      const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
      // Atualiza os elementos da interface
      yearsElement.innerText = years.toString().padStart(2, '0');
      daysElement.innerText = days.toString().padStart(3, '0');
      hoursElement.innerText = hours.toString().padStart(2, '0');
      minutesElement.innerText = minutes.toString().padStart(2, '0');
      secondsElement.innerText = seconds.toString().padStart(2, '0');
    }, 1000); // Atualiza a cada segundo
  }
  
  window.onload = startCounter;
  