import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
    //   this.setState({
    //       count: this.state.count + 1
    //   }, ()=>
    //   {
    //     console.log('callback function after changing the state object value', this.state.count);
    //   })
    this.setState((previousstate, props) => ({
        count: previousstate.count + 1
    }))
      console.log('holding the previous value of state', this.state.count);
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
              <div>count {this.state.count}</div>
              <button onClick={() => this.incrementFive()}>Inctrase count</button>
            </div>
        )
    }
}

export default Counter
