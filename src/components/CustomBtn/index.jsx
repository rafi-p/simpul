import React from 'react'

// styles
import './CustomBtn.css'

function CustomBtn({text}) {
    return (
        <div className='btn-custom bg-blue bold-text small-text text-white2'>{text}</div>
    )
}

export default CustomBtn