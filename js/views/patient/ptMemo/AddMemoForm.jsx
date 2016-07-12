import React, { Component } from 'react'
import { Link } from 'react-router'

class AddMemoForm extends Component {
  
  constructor(props){
    super(props)
  } 

  render(){
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    )
  }
}

export default AddMemoForm
