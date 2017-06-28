import React, {Component} from 'react';
import './App.css'



class Tweet extends Component {

    
    render(){
      
        let tweet = this.props.info
        
        return(
        
            <li className ="tweet">
                <img className="avatar" src={tweet.avatar_url} alt="" />
                <div className="tweet-content">
                    <p>
                        <span className="fullName"> {tweet.username}</span>
                        <span className="username">{tweet.handle}</span>
                        <br/>
                        <span className="timestamp"> {tweet.hashtag_names.join(' ')}</span>

                    </p>
                        <p>{tweet.content}</p>
                    
                </div>
            </li>
                        
        )
    }
}

export default Tweet;