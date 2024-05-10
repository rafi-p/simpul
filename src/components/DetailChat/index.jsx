import React, { Fragment } from 'react';
import { backArrowIcon, closeIcon, threeDotGreyIcon } from '../../assets/icons';
import { CustomBtn } from '../index'
import formatDateTime from '../../utils/formatDateTime';
import './DetailChat.css';
import { useDataContext } from '../../hooks/useDataContext';

const dataChat = Array.from({ length: 100 }, (_, index) => index + 1);

const youID = 1

const chatDetailData = {
    name: 'I-589-AMARMIL, Obaidlausduadsa',
    participants: 3,
    chat: [
        {
            id: 1,
            name: 'Rafi',
            message: 'halo dek!',
            timestamp: new Date()
        },

        {
            id: 2,
            name: 'Lala',
            message: 'iya ada apa?',
            timestamp: new Date()
        },

        {
            id: 3,
            name: 'Lulu',
            message: `The problem is that, unlike absolutely positioned elements, the containing block of a fixedly positioned element is usually the viewport, not its nearest positioned element. Then, width: 100% is resolved with respect to the viewport width.

            There are ways to change this behavior, e.g. elements with transform establish a containing block for their fixedly positioned descendants. But then your element won't be fixed at the top of the viewport.

            Instead, you should use sticky positioning:`,
            timestamp: new Date()
        }
    ]
}


export default function DetailChat() {
    const { dispatch} = useDataContext()

    const setMessageID = () => {
        dispatch({
            type: 'SET_MESSAGE_ID',
            payload: ''
        })
    }

    return (
        <div className="detail-chat-wrapper">
            <div className="top-heading-detail-chat">
                <div className="left-heading">
                    <img src={backArrowIcon} alt="back-icon" onClick={setMessageID}/>
                    <div className="heading-detail-wrapper">
                        <span 
                            className='bold-text text-blue font-size-large'
                        >
                            {chatDetailData.name}
                        </span>
                        <span className='small-text'>{chatDetailData.participants} Participants</span>
                    </div>
                </div>
                <img src={closeIcon} alt="close-icon" />
            </div>
            <div className="body-detail-chat">
                {
                    chatDetailData.chat.map((item, index) => (
                        <Fragment key={index}>
                            {/* {
                                index % 5 === 0 &&
                                <DividerBubble  
                                    isNewMessage={index % 2 === 0}
                                />
                            } */}
                            <BubbleChat isYou={item.id === youID} data={item}/>
                        </Fragment>
                    ))
                }
            </div>
            <div className="footer-detail-chat">
                <input type="text" placeholder='Type new message' />
                <CustomBtn text={'Send'} />
            </div>
        </div>
    )

    function BubbleChat({isYou, data}) {
        const colors = ['--chats-light-orange', '--chats-light-purple', '--chats-light-green'];
        const colorsTitle = ['--chats-dark-orange', '--chats-dark-purple', '--chats-dark-green'];
        const colorResult = (isHeading) => {
            let temp = colors
            if (isHeading) {
                temp = colorsTitle
            }

            return temp[data.id % colors.length];
        }

        return (
            <div className={`bubble-chat ${isYou ? 'align-right' : ''}`} >
                <span 
                    className='small-text bold-text'
                    style={{color: `var(${colorResult(true)})`}}
                >
                    {isYou ? 'You' : data.name}
                </span>
                <div className='bubble-chat-content'>
                    {isYou && <img src={threeDotGreyIcon} alt="dot-three" />}

                    <div 
                        className='text small-text text-dark-grey'
                        style={{backgroundColor: `var(${colorResult()})`}}
                    >
                        <span>
                            {data.message}
                        </span>
                        <p>{formatDateTime().formattedTime}</p>
                    </div>
                    {!isYou && <img src={threeDotGreyIcon} alt="dot-three" />}
                </div>
            </div>
        );
    }
}

function DividerBubble({isNewMessage = false}) {
    function LineMiddle() {
        return <div className='line-middle' style={{ borderTop: isNewMessage ? '1px solid var(--indicator-red)' : '1px solid var(--primary-dark-grey)' }}></div>;
    }
    return (
        <div className='divider-bubble'>
            <LineMiddle />
            <span className={`bold-text medium-text ${isNewMessage ? 'text-red' : ''}`}>{
                isNewMessage ? 'New Message' : 'Yesterday'
            
            }</span>
            <LineMiddle />
        </div>
    );

}

