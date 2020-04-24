import React, { Component } from 'react'
import {handleAddQuestion} from './actions/Questions'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText:''
  }

  handleChange = e => {
    const text = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: text
    }))
  }



  handleSubmit = (e) => {

    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props
    console.log('New Question: ',optionOneText )
    dispatch(
        handleAddQuestion({ optionOneText, optionTwoText, authedUser })
        ).then(() =>
        this.setState(() => ({
            optionOneText:'',
            optionTwoText: ''
        }))
      ) }



  render() {
    const { optionOneText, optionTwoText} = this.state
    return (
      <div>
          <h2>Would You Rather...</h2>
        <form className='' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Enter Option A"
            value={optionOneText}
            onChange={this.handleChange}
            className=''
            name="optionOneText"
            
          />
          <p></p>
          <textarea
            placeholder="Enter Option B"
            value={optionTwoText}
            onChange={this.handleChange}
            className=''
            name="optionTwoText"
            
          />
          
          <button
            className=''
            type='submit'
            >
              Submit
          </button>
        </form>
      </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
    return {
      authedUser
    }
  }

export default connect(mapStateToProps) (NewQuestion)