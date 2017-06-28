import React, {Component} from 'react'
import Tweet from './Tweet'
import axios from 'axios'
import './App.css'


class TimeLine extends Component{

    
    render(){
       
        return(
            <section id="tweets-container">
                <h3> Tweets </h3>
                    <ul>
                        <li className="tweet">
                        {
                            this.props.tweets.map((tweet,index)=>{
                                return <Tweet info={tweet} />
                            })
                        }
                        </li>
                    </ul>
            </section>
            )
            

    }
}


export default TimeLine;