import React, { Component } from 'react'

export class BasicOfForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username : '',
       comment : '',
       topic : 'React'
    }
  }

  handlerUsername = (event) =>{
    this.setState({
      username : event.target.value
    })
    
  }
  
  handlerComment = (event) =>{
    this.setState({
      comment : event.target.value
    })
  }

  handleSubmit = event =>{
    alert (`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
  }


  handleChange = event =>{
    this.setState({
      topic : event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Username <input type="text" value={this.state.username} onChange={this.handlerUsername} />
        </div>
        <div>
          Comment <textarea  type="text" value={this.state.comment} onChange={this.handlerComment} ></textarea>
        </div>  
        <select value={this.state.topic} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="anguler">anguler</option>
            <option value="vue">Vue</option>
            <option value="Node">Node</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default BasicOfForm
