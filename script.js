document.getElementById('celebrateButton').addEventListener('click', () => {
    const celebration = document.getElementById('celebration');
    
    // Display the celebration section
    celebration.classList.remove('hidden');
    
    // Play the celebration sound
    const audio = new Audio('https://www.soundjay.com/human/applause-01.mp3');
    audio.play();
  });
  