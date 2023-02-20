const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author: "Nelson Mandela", 
    }, 
    {
        quote: "Only I can change me life, no one can do it for me.", 
        author: "Carol Burnett", 
    },
    {
        quote: "Being happy never goes out of style.", 
        author: "Lilly Pulitzer", 
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.", 
        author: "Mark Twain", 
    },
    {
        quote: "A day without laughter is a day wasted.", 
        author: "Anonymous", 
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", 
        author: "Winston S. Churchill", 
    },
    {
        quote: "It is kind of fun to do the impossible.", 
        author: "Walt Disney", 
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.", 
        author: "Martin Luther King, Jr", 
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.", 
        author: "Arnold Schwarzenegger", 
    },
    {
        quote: "Grind Hard, Shine Hard.", 
        author: "Dwayne Johnson", 
    },
   

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
