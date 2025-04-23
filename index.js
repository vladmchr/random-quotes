const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, so dont waste it living someone elses life. - Steve Jobs",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
};

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();
