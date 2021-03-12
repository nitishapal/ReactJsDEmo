import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           message: 'hello'  
        }

        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(){
        this.setState({
            message: 'good Bye'
        })
        console.log(this);
    }
    render() {       
        return (
            <div>
              <div>{this.state.message}</div>
              {/* <button onClick={this.eventHandler.bind(this)}>Event Bind Click</button>   */}
              {/* <button onClick={() => this.eventHandler()}>Event Bind Click</button>   */}
              <button onClick={this.eventHandler}>Event Bind Click</button>  
            </div>
        )
    }
}

export default EventBind
