import React, { Component } from 'react'
import {handleAddQuestion} from './actions/Questions'
import { connect } from 'react-redux'
import './css/question.css'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText:'',
    toHome: false
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
    console.log('OptionOneQuestion: ',optionOneText )
    console.log('OptionTwoQuestion: ',optionTwoText )


    dispatch(
        handleAddQuestion({ optionOneText, optionTwoText, authedUser })
        ).then(() =>
        this.setState(() => ({
            optionOneText:'',
            optionTwoText: '',
            toHome: true
        }))
      ) }



  render() {
    const { optionOneText, optionTwoText, toHome} = this.state

    if (toHome === true) {
        return <Redirect to='/home' />
      }

    return (
      <div>

                <div className="question">
                <div className="question-title"> 
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
        </div>
        
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