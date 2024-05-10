import React from 'react'
import './PopOut.css'
import { Loader, MessageList, DetailChat} from '../index'
import { useDataContext } from '../../hooks/useDataContext'

const dataChat = Array.from({ length: 12 }, (_, index) => index + 1);

function PopOut() {
    const { messageID, dispatch} = useDataContext()

    return (
        <div
            className='pop-out-wrapper'
        >
            {/* <Loader /> */}
            { messageID 
                ?<DetailChat />
                :<MessageList dataChat={dataChat}/>
            }
        </div>
    )
}

export default PopOut





