import React, { PureComponent } from 'react'

export class UpdtLifeCycle extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "Vishwajit"
    }
  }
  
  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name: "Vishwajit"
        })
    },2000)
  }

    render() {
        return (
            
        )
    return (
      <div>
        
      </div>
    )
  }
}

export default UpdtLifeCycle
