import React from 'react'
import './PopOut.css'
import { Loader, MessageList, DetailChat} from '../index'

const dataChat = Array.from({ length: 12 }, (_, index) => index + 1);

function PopOut() {
    return (
        <div
            className='pop-out-wrapper'
        >
            {/* <Loader /> */}
            {/* <MessageList dataChat={dataChat}/> */}
            <DetailChat />
        </div>
    )
}

export default PopOut





