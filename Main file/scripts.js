const quotes = [
  '"The only limit to our realization of tomorrow is our doubts of today."',
  '"The future belongs to those who believe in the beauty of their dreams."',
  '"Do not wait to strike till the iron is hot, but make it hot by striking."',
  '"Success is not how high you have climbed, but how you make a positive difference to the world."',
  '"Believe you can and you\'re halfway there."',
  '"Your body can stand almost anything. It’s your mind that you have to convince."',
  '"Fitness is not about being better than someone else. It’s about being better than you used to be."',
  '"Every workout is progress. Every step counts towards your goals."',
  '"Consistency is key. Small, daily efforts lead to big changes over time."',
  '"Invest in yourself. Your health is your greatest wealth."',
  '"Push yourself because no one else is going to do it for you."',
  '"The only bad workout is the one that didn’t happen."',
  '"Make your body the sexiest outfit you own."',
  '"Don’t limit your challenges; challenge your limits."',
  '"Success isn’t always about greatness. It’s about consistency. Consistent hard work gains success."'
];  

// Function to display a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

// Automatically generate a quote when the page loads
window.onload = generateRandomQuote;

// Event listener for button click to generate new quote
document.getElementById('new-quote').addEventListener('click', generateRandomQuote);

