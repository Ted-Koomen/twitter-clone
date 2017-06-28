import React, {Component} from 'react';
import TimeLine from './TimeLine';
import axios from 'axios'
import Hashtags from './Hashtags';
import TweetForm from './TweetForm';
import SearchForm from './SearchForm';

class App extends Component {

    constructor(){
        super()
        this.state ={
            tweets: [],
            computer: []
        }
        this.updateState = this.updateState.bind(this)
        this.fetchTweets = this.fetchTweets.bind(this)
    
    
    }

    fetchTweets(){
         axios.get('http://localhost:3000/tweets/recent')
        .then((response)=>{
            this.setState({
                tweets: response.data
            })
            
        })

    }

    componentDidMount(){
        this.fetchTweets()
    }





    updateState(tweet){
        this.setState((prevState)=>{
            return {tweets: tweet}
        })
    }


    render(){
        return(
            <div>
             <body>
            
                <header id='top-nav'>
                    <div id="brand">Lil' Twitter API</div> 
                    <SearchForm getTweets={this.fetchTweets} searchedTweets={this.updateState}/>
                    <i className="fa fa-search"></i>
                </header>
                <section className="container">
                    <TimeLine tweets={this.state.tweets}/>
                    <TweetForm newTweet={this.updateState}/>
                    <Hashtags />
                </section>
            </body>
            
            
            </div>
        )
    }
}

export default App;