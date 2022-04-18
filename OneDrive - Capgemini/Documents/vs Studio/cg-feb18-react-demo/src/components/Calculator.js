import React, { Component } from 'react'
import './Calculator.css'
export default class Calculator extends Component {
    state={
        a:'',
        b:''

    }
    SetA= (e)=>{
        this.setState({
            a:parseInt(e.target.value)
        })

    }
    setB=(e)=>{
        this.setState({
            b:parseInt(e.target.value)
        })

    }

    
  render() {
    return (
        
      <div className='Cal'>
          <input className='inputA' placeholder='Enter A Value'
          onChange={this.SetA}
          />
          <br/>
          <input 
          className='inputB' placeholder='Enter B Value'
          onChange={this.setB}/>
          <br/>
          {'A='+this.state.a+'    B='+this.state.b}
          <br></br>
          {'Addition is :'+(this.state.a+this.state.b)}
          </div>
    )
  }
}
