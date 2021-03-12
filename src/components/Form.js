import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (events) => {
        this.setState({
            comments: events.target.value
        })
    }
    handleChangeTopic = (events) => {
        this.setState({
            topic: events.target.value
        })
    }
    handleSubmit = (event) =>{
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)    
      event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User name</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea type='text' value={this.state.comments} onChange={this.handleCommentsChange} />
                </div>
                <div>
                    <label value={this.state.topic} onChange={this.handleChangeTopic}>Topic</label>
                    <select>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

        )
    }
}

export default Form
