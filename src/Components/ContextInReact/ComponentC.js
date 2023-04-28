import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentC extends Component {
  render() {
    return (
      <div>
      <UserConsumer>
        {
            ussername =>{
                return <h1>Kello {ussername}</h1>
            }
        }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentC
