import React, {Component} from 'react'
import {setAuthedUser} from './actions/authedUsers'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class user extends Component { 

    state = {
        toHome: false
      }
    
      handleLogin = id => {
        const { dispatch } = this.props
        dispatch(setAuthedUser(id))
        this.setState({ toHome: true })

      }

    render (){
        const { toHome} = this.state
        const {users, user} =this.props

        if (toHome === true) {
            return <Redirect to='/home' />
          }

        return (
            <div className="user">

                    <div key={user.id}>
                        <img src={user.avatarURL} alt="avatar!" className="avatar" />
                        {user.name}

                        <h3 >{`${users[user.id].name}`}</h3>
                        <button
                            onClick={() => this.handleLogin(user.id)}
                        >
                            Log in
                        </button>
                        
                        
                    </div>
                   

            </div>
        )
    }
}

function mapStateToProps ({users, authedUser}, {id} ) {
    const user = users[id]

    return {
        user,
        users,
    }
}

export default connect(mapStateToProps)(user) 