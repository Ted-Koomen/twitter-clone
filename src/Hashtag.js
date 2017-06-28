import React,{Component} from 'react'
import './App.css'



class Hashtag extends Component {
    

    render(){
        let hashtag = this.props.info    
        return(
            <div>
                <li> {hashtag.name} </li>
    
            </div>
        )
    }
}

export default Hashtag; 