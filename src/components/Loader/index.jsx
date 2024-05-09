import React from 'react';
import './Loader.css';
import { useDataContext } from '../../hooks/useDataContext';

export default function Loader() {
    const { activeToggle } = useDataContext();

    const textLoading = (value) => {
        if (value === 'task') {
            return 'Tasks List';
        }
        return 'Chats';
    
    }

    return <div className='loader-wrapper'>
        <div className='loader-square'>
            <div className='loader'></div>
        </div>
        <span>Loading {textLoading(activeToggle)} ...</span>
    </div>;
}
