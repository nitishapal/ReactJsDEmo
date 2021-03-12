import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent';
import PureClassComponent from './PureClassComponent';
import MemoComponent from './MemoComponent';

class Parentcompo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'name4321'
        }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: 'name4321'
            })
        } ,2000)
    }
    
    render() {
        console.log('****Parentcompo render****');
        return (
            <div>
                Parent componeent
                <MemoComponent name={this.state.name}></MemoComponent>
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureClassComponent name={this.state.name}></PureClassComponent> */}
            </div>
        )
    }
}

export default Parentcompo
