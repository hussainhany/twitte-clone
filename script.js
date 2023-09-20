// JavaScript for Twitter Clone

const tweetForm = document.getElementById('tweet-form');
const usernameInput = document.getElementById('username');
const tweetTextInput = document.getElementById('tweet-text');
const newsfeed = document.getElementById('newsfeed');

// Array to store tweets
const tweets = [];

// Function to create a tweet div
function createTweet(author, tweetText) {
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');

    const userDiv = document.createElement('div');
    userDiv.classList.add('username');
    userDiv.textContent = author;

    const tweetContentDiv = document.createElement('div');
    tweetContentDiv.classList.add('tweet-content');
    tweetContentDiv.textContent = tweetText;

    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', () => {
        // Handle like functionality here
        tweetDiv.classList.toggle('liked');
    });

    const retweetButton = document.createElement('button');
    retweetButton.textContent = 'Retweet';
    retweetButton.addEventListener('click', () => {
        // Handle retweet functionality here
        newsfeed.prepend(tweetDiv.cloneNode(true)); // Clone and add at the top
    });

    tweetDiv.appendChild(userDiv);
    tweetDiv.appendChild(tweetContentDiv);
    tweetDiv.appendChild(likeButton);
    tweetDiv.appendChild(retweetButton);

    return tweetDiv;
}

// Function to handle tweet submission
function handleTweetSubmission(event) {
    event.preventDefault();

    const author = usernameInput.value;
    const tweetText = tweetTextInput.value;

    if (author && tweetText) {
        // Create a tweet object and add it to the array
        const tweet = { author, tweetText };
        tweets.unshift(tweet); // Add at the beginning of the array

        // Create the tweet's HTML and add it to the newsfeed
        const tweetDiv = createTweet(author, tweetText);
        newsfeed.prepend(tweetDiv);

        // Clear input fields
        usernameInput.value = '';
        tweetTextInput.value = '';
    }
}

// Event listener for tweet submission
tweetForm.addEventListener('submit', handleTweetSubmission);
