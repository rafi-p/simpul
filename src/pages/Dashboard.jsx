import React, {Fragment, useState} from 'react'
import './Dashboard.css'

import {CustomToggle ,PopOut} from '../components'
import { useDataContext } from '../hooks/useDataContext'

function Dashboard() {
    const [toggle, setToggle] = useState(false)
    const { activeToggle, dispatch} = useDataContext()

    const setActiveToggle = (value) => {
        dispatch({
            type: 'SET_ACTIVE_TOGGLE',
            payload: value
        })
    }

    const handleClick = () => {
        setActiveToggle('')
        setToggle(!toggle)
    }

    const handleActiveToggle = (type) => {
        setActiveToggle(type)
    }
    return (
        <div>
            <div className={`toggle-wrapper ${activeToggle === 'task' ? 'reverse' : ''}`}>
                {
                    toggle &&
                        <Fragment>
                            <CustomToggle 
                                type={'task'} 
                                active={activeToggle === 'task'} 
                                onClick={() => handleActiveToggle('task')}
                                title={!activeToggle}
                            />
                            <CustomToggle
                                type={'inbox'}
                                active={activeToggle === 'inbox'}
                                onClick={() => handleActiveToggle('inbox')}
                                title={!activeToggle}
                            />
                        </Fragment>
                }
                <CustomToggle onClick={handleClick} active={activeToggle !== ''}/>
                {
                    activeToggle &&
                        <PopOut />
                }
            </div>
        </div>
    )
}

export default Dashboard