import React from 'react';
import { strokeIcon, chatIcon, chatActiveIcon, taskIcon, taskActiveIcon } from '../../assets/icons';
import './CustomToggle.css';

function CustomToggle({ onClick, type = 'base', active = false, title }) {
    const getClass = () => {
        switch (type) {
            case 'base':
                return `base-toggle ${active ?'base-toggle-hide bg-dark-grey' : 'bg-blue'}`;
            case 'inbox':
                return active ? 'base-toggle bg-purple' : 'child-toggle';
            case 'task':
                return active ? 'base-toggle bg-orange' : 'child-toggle';
            default:
                return 'base-toggle';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'base':
                return strokeIcon;
            case 'inbox':
                return active ? chatActiveIcon : chatIcon;
            case 'task':
                return active ? taskActiveIcon : taskIcon;
            default:
                return strokeIcon;
        }
    };

    const getText = () => {
        switch (type) {
            case 'inbox':
                return 'Inbox';
            case 'task':
                return 'Task';
            default:
                return '';
        }
    };

    return (
        <div 
            className={`circular-toggle ${getClass()} ${active ? 'active-toggle' : ''}`} 
            onClick={onClick}
        >
            {title && <span className='text-toggle'>{getText()}</span>}
            <img src={getIcon()} alt='stroke-icon' />
        </div>
    );
}

export default CustomToggle;
