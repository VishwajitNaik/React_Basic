import React, { Component } from 'react'
import axios from 'axios'

export class CrudApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      userId: '',
      title: '',
      body: '',
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response)
        this.setState({ posts: [...this.state.posts, response.data] })
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteHandler = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log(response)
        const newPosts = this.state.posts.filter(post => post.id !== id)
        this.setState({ posts: newPosts })
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateHandler = id => {
    const { userId, title, body } = this.state
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { userId, title, body })
      .then(response => {
        console.log(response)
        const newPosts = this.state.posts.map(post => {
          if (post.id === id) {
            return {
              ...post,
              userId,
              title,
              body
            }
          }
          return post
        })
        this.setState({ posts: newPosts })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { id, userId, title, body, posts } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="userId" value={userId} onChange={this.changeHandler} placeholder="User ID" required />
          <input type="text" name="title" value={title} onChange={this.changeHandler} placeholder="Title" required />
          <input type="text" name="body" value={body} onChange={this.changeHandler} placeholder="Body" required />
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => this.deleteHandler(post.id)}>Delete</button>
                  <button onClick={() => this.updateHandler(post.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CrudApp
