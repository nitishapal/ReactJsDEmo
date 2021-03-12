import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent' 
        }
        this.greedParent = this.greedParent.bind(this);
    }
    greedParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandlar ={this.greedParent} />
            </div>
        )
    }
}

export default ParentComponent
