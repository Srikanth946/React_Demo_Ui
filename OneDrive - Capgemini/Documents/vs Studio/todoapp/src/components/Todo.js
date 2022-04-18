import React, { Component } from 'react'

export default class Todo extends Component {
   
  render() {
    return (
      <div>
          <div className="todo">
         <p style={{textDecoration:this.props.todo.complete?'line-through':''}}>{this.props.todo.title}</p>
         <div className="status">
         <button className='complete'>Complete</button>
         <button className='delete'>X</button> 
         </div>
         </div>
      </div>
    )
  }
}
