#!/usr/bin/env node

const quotes = [
    "Believe in yourself!",
    "Keep going, you're doing great!",
    "Success is the sum of small efforts repeated day in and day out.",
    "Stay positive, work hard, make it happen!"
];

const randomIndex = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex]);

