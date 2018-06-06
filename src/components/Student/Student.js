import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount = () => {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then( response => {
      this.setState({
        studentInfo: response.data
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="box">
        <Link to={`/classlist/${ this.state.studentInfo.class }`}><button className="btn">Back</button></Link>
        <h1>Student</h1>
        <h1>{ this.state.studentInfo.first_name } { this.state.studentInfo.last_name }</h1>
        <h3>{ this.state.studentInfo.grade } { this.state.studentInfo.email } </h3>
      </div>
    )
  }
}