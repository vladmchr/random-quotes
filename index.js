const quotes = [
  {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited, imagination encircles the world",
    author: "Albert Einstein",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    quote: "You must be the change you wish to see in the world",
    author: "Mahatma Gandhi",
  },
  {
    quote: "To improve is to change; to be perfect is to change often",
    author: "Winston Churchill",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work",
    author: "Thomas Edison",
  },
  {
    quote: "No one can make you feel inferior without your consent",
    author: "Eleanor Roosevelt",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
};

generateBtn.addEventListener("click", generateRandomQuote);
