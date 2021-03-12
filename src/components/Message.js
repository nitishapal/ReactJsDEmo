import React, {Component} from  'react';
import App from '../App';

class Message extends Component{
    constructor(){
        super()
        this.state = {
           message: 'message component' 
        }
    }
    changeMessage(){
        this.setState({
            message: 'changed message'
        })
    }
render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
    ) 
}
}

export default Message;