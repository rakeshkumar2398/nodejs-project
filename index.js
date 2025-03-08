const chalk = require('chalk');

const quotes = [
  "Success is the sum of small efforts repeated day in and day out.",
  "Stay positive, work hard, make it happen!",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

console.log(chalk.blue(getRandomQuote()));
