import React, {Component} from 'react'
import Hashtag from './Hashtag'
import axios from 'axios'




class Hashtags extends Component {

    constructor(){
        super()
        this.state ={
            hashtags: []
        }
    }

    componentWillMount(){
        axios('http://localhost:3000/hashtags/popular')
        .then((response)=>{
           
            this.setState({
                hashtags: response.data
            })
        })
        
    }
    render(){
        let hashtags = [
            {"tag":"#swag"},
            {"tag":"#react"},
            {"tag":"#bummersummer"}
            ]
        return(
            <section id = "trends-container">
                <h3> Trends </h3>
                <li>
                {
                    this.state.hashtags.map((hashtag,index)=>{
                        return <Hashtag info={hashtag} />
                    })
                } 
                </li>
            </section>

        )
    }
}

export default Hashtags;