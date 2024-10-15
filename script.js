document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    let score = 0; 

    
    const correctAnswers = [
        'Paris', // Q1
        '4',     // Q2
        'William Shakespeare', // Q3
        'Jupiter', // Q4
        'H2O',   // Q5
        '1912',  // Q6
        'Leonardo da Vinci', // Q7
        'Diamond', // Q8
        '7',     // Q9
        'Yen'    // Q10
    ];

    for (let i = 1; i <= 10; i++) {
        const answer = document.getElementById(`q${i}`).value.trim(); 
        
        
        if (answer.toLowerCase() === correctAnswers[i - 1].toLowerCase()) {
            score += 2; 
        }
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>${username}'s Total Score: ${score} / 20</h2>`; 
});
