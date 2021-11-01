//I decided to recreate the api project from april
//while asynch learning.
const Goat = ({getTweet, tweet,}) => {
    return(
        <div>
            <h1 id="tweet_header">Tweets from G.O.A.T's</h1>
            <button id="tweet_btn" onClick={getTweet}> Generate Tweets</button>
                <div>
                    {tweet !== '' ? <div className="tweet-container">
                    <span className = "tweet-text">{tweet}</span>
                    </div> : ''}
                </div>
        </div>
    )
};

export default Goat;