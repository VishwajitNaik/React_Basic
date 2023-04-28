import React, { Component } from 'react'
import axios from 'axios'

export class ReactAndHTTP extends Component {
    constructor(props){
        super(props)
        this.state={
            posts : []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        }).catch(error =>{
            console.log(error);
            this.setState({errorMsg : "Error in data"})
        })
    }
    
  render() {
    const {posts, errorMsg} = this.state
    return (
       
    <div>HIII
        {posts.length ?
        posts.map(post =><div key={post.id}>{post .title}</div>):null
        } 
        {
            errorMsg ? <div>{errorMsg}</div> : null
        }
        
      </div>
    )
  }
}

export default ReactAndHTTP
