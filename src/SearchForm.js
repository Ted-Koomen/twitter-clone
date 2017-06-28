import React,{Component} from 'react'
import './App.css'
import axios from 'axios'

class SearchForm extends Component {

    constructor(){
        super()
        this.searchHashtag = this.searchHashtag.bind(this)
    }
   
   searchHashtag(event){
       let hashtag = this.refs.content.value
       if (hashtag === ''){
           this.props.getTweets()
       }
       else {axios(`http://localhost:3000/tweets/search/${hashtag}`)
       .then(response =>{
           console.log(response)
           this.props.searchedTweets(response.data)
       })
       }
   }

    render(){
        return(
            <div>
                <form id="search-form">
                <input id="search"  ref="content" type="text" name="query" onChange={this.searchHashtag} />
                </form>
                
            </div>
        )
    }
}


export default SearchForm
