import React, {Component} from 'react'
import {connect} from 'react-redux'
import { handleAddQuestion } from './actions/Questions'


class NewQuestion extends Component {

    state = {
        text :''
    }    
    handleChange = (e) => {
        const text = e.target.value

        this.setState(()=> ({
            text
        }))
    }

    handleSubmit = (e) => {

        e.preventDefault()

        const {text} = this.state
        const { dispatch, id } = this.props
        dispatch(handleAddQuestion(text,id))


        console.log('New Question', text)

        this.setState(()=>({
            text:''
        }))
    }


    render () {
        const {text}= this.props
        
        return(
            <div>
                <p>Would your rather ...</p>
                <form className="newQuestion" onSubmit={this.handleSubmit}>
                    <textarea 
                        placeholder='Enter Your option A'
                        value={text}
                        onChange={this.handleChange}
                        maxLength={100}
                        />
                        <p></p>
                    <textarea 
                        placeholder='Enter Your option B'
                        value={text}
                        maxLength={100}
                        />
                        <p></p>
                <button
                    type='submit'
                    disabled= {text==='' } >
                         Submit
                     </button>

                </form>
                
                 
            </div>
        )
    }

}

export default connect()(NewQuestion)