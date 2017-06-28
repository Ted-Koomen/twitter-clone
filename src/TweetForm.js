import React,{Component} from 'react'
import './App.css'
import axios from 'axios'
import querystring from 'querystring'

class TweetForm extends Component {

     constructor(){
        super()
        this.state = {value:''}
        
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    submitForm(event){
       event.preventDefault()
       
       axios.post('http://localhost:3000/tweets',
        querystring.stringify({'content':this.refs['content'].value}))
        .then((response)=>{
           this.props.newTweet(response.data)
        })
        this.setState({value:''})
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return(
            
                <section id="tweet-box">
                    <p id id ='tweet-box-title'>Compose New Tweet</p>
                    <form id="tweet-form" onSubmit={this.submitForm}>
                        <textarea value={this.state.value} onChange={this.handleChange} id="new-tweet" ref="content" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
                        <input type="submit" value="Tweet"/>
                    </form>
                </section>
            
        )
    }
}

export default TweetForm