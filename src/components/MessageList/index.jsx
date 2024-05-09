import React, { Fragment } from 'react';
import { SearchBar, Message } from '../index';
import './MessageList.css';

export default function MessageList({dataChat}) {
    return (
        <Fragment>
            <div className='top-fix'>
                <SearchBar />
            </div>
            <div className="message-wrapper">
                {dataChat.map((item, index) => (
                    <Fragment key={index}>
                        <Message />
                        {index !== dataChat.length - 1 &&
                            <div className="divider-chat"></div>}
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
}
