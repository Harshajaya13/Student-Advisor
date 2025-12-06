document.addEventListener('DOMContentLoaded', () => {
    
    // --- MANIFESTO LOGIC ---
    const startBtn = document.getElementById('start-quiz-btn');
    const manifestoPage = document.getElementById('manifesto-page');
    const quizApp = document.getElementById('quiz-app');

    startBtn.addEventListener('click', () => {
        // Fade out manifesto
        manifestoPage.style.opacity = '0';
        manifestoPage.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            manifestoPage.classList.add('hidden');
            
            // Show Quiz
            quizApp.classList.remove('hidden');
            quizApp.style.opacity = '0';
            quizApp.style.transition = 'opacity 0.5s ease';
            
            // Trigger reflow
            void quizApp.offsetWidth; 
            
            quizApp.style.opacity = '1';
        }, 500); // Wait for fade out
    });

    // --- YOUR EXISTING QUIZ LOGIC BELOW THIS LINE ---
    // (Paste the Step History / ShowStep logic here)
});