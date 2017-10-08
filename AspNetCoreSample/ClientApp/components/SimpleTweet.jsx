import React, { Component } from 'react';
import { Tweet } from 'react-twitter-widgets'

export default class SimpleTweet extends Component {
    render() {
        var opt =
        {
            cards: 'hidden'
        };

        return (
            <Tweet 
                tweetId='511181794914627584'
                options = {opt}
            />
        );
    }
}
