import React, {Component} from 'react'
import {connect} from 'react-redux'
import './css/question.css'
import './css/index.css'

class UserBoard extends Component {

    render () {
        const {users, UserBoard_Info}= this.props
        return (
            
            <div>
                
                {UserBoard_Info.sort((a, b) => b.scores - a.scores).map(user=>(
                    <div key={user.id}>
                        <div className="question">
                        <div className="question-title"> 
                        
                        <img 
                            src={users[user.id].avatarURL}
                            alt={`Avatar of ${users[user.id].avatarURL}`}
                            />
                            {users[user.id].name}
                        </div>
                        </div>

                    <p className="question-title" >
                        questions Voted: {Object.keys(users[user.id].answers).length} -
                    
                        questions Posted: {Object.keys(users[user.id].questions).length}
                    </p>
                    </div>
                ))}
                
            </div>
        )
    }

}

function mapStateToProps({users}){
    const user_Id= Object.keys(users)
    const UserBoard_Info= user_Id.map(id =>({
        id:id,
        scores:
        Object.keys(users[id].answers).length +
        Object.keys(users[id].questions).length

        }))

    return {
        UserBoard_Info,
        users

    }
}

export default connect(mapStateToProps)(UserBoard)