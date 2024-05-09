import React from 'react'
import {userIcon} from '../../assets/icons'
import formatDateTime from '../../utils/formatDateTime'

// styles
import './Message.css'

function Message() {

    const participants = [
        {
            name: 'John Doe',
            role: 'Admin'
        },
    ]
    return (
        <div className='message-content'>
            <div className="user-chat">
                    {
                        participants.slice(Math.max(participants.length - 2, 0)).map((participant, index) =>
                            <UserIcon 
                                key={index} 
                                back={index === 0 && participants.length > 1 }
                                participant={participant}
                                isMoreThanOne={participants.length > 1}
                            />
                        )
                    }
            </div>
            <div className="chat-content">
                <span className="chat-heading text-blue">
                    109222-Naturalization
                </span>
                <div className="chat-preview">
                    <p className='chat-preview-heading'>Nama:</p>
                    <p className='chat-preview-text'>dsadasdsadasda</p>
                </div>
            </div>
            <div className="chat-date">
                {formatDateTime().res}
            </div>
            <div className="new-dot"></div>
        </div>
    )
}

export default Message

function UserIcon({back = false, participant, isMoreThanOne}) {
    const className = () => {
        let temp = 'user-icon-wrapper'
        if (back) {
            temp += ' bg-white'
        } else {
            temp += ' bg-blue'
        }
        return temp
    }

    return <div className={className()} data-back={back}>
        {
            isMoreThanOne 
            ? <img src={userIcon} alt="user icon" />
            : <span className='text-white2 small-text bold-text'>{participant.name[0].toUpperCase()}</span>
        }
    </div>
}
