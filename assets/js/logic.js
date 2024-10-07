// DOM 
const date = document.getElementById("date");
const quote = document.getElementById("quote");
const source = document.getElementById("source");

// Get Month & Day
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();

let month = months[d.getMonth()];
let day = d.getDate();

// Set Quote & Source
function findQuote(find){
    return find.month === month && find.day === day;
}

function setMain(){
    date.innerHTML = `${month}` + ` ${day}`;
    quote.innerHTML = `${content.quote}`;
    source.innerHTML = `${content.source}`;
}

// Quote Array 
const quotes = [
    { month: "October", day: 7, quote: "words", source:"author" },
    { month: "October", day: 10 },
    { month: "Decemeber", day: 5 },
];

let content = quotes.find(findQuote);

setMain();
  