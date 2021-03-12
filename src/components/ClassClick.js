import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('click Button in class click component');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>class click component</button>
            </div>
        )
    }
}

export default ClassClick
