const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";


async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        quote.innerHTML = data.content;  // content is the key in the json file and its value pair is the quote, whereas data is the variable that stores the json file
        author.innerHTML = data.author;

        localStorage.setItem("quoteData", JSON.stringify(data));

    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

function loadQuote() {
    const storedQuote = localStorage.getItem("quoteData");

    if (storedQuote) {
        const data = JSON.parse(storedQuote);
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } else {
        // Fetch a new quote when the page loads
        getQuote(api_url);
        // without this, the project works fine but when we open the project for the first time it shows nothing, so to avoid that we use this
        // when the project is opened for the first time, it will fetch a new quote and store it in the local storage
        // and when the project is opened again, it will load the quote from the local storage
    }
}


loadQuote();

function tweetQuote() {
    const textToTweet = `${quote.innerHTML} - ${author.innerHTML}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToTweet)}`;
    window.open(tweetUrl, "Tweet Window", "width=600,height=400");
}