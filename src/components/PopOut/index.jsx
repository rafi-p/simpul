import React from 'react'
import './PopOut.css'
import { Loader} from '../index'

function PopOut() {
    return (
        <div
            className='pop-out-wrapper'
        >
            PopOut
            {Loader()}
        </div>
    )
}

export default PopOut


