import React, { Component } from 'react'
import {setAuthedUser} from './actions/authedUsers'
import user from './UserInfo'
import {connect} from 'react-redux'
import UserInfo from './UserInfo'


class AuthedUser extends Component {

    componentDidMount(){
        this.props.dispatch(setAuthedUser(false))
    }

    render () { 
        const {user_Id} = this.props

        return (
            <div>
                AuthedUSER
              

            {user_Id.map(id => (
              <li key={id} >
                <UserInfo id={id} />
              </li>
            ))}

            </div>
        )

    }
}

function mapStateToProps (state){
    const users=state.users
    return {
        user_Id: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(AuthedUser)