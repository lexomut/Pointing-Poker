import React, { useContext, useEffect, useState } from 'react';
import { connect } from './api/ConnectWS';
import { Context } from './state/Context';
import { ChatMessage } from './types/State';

export function Temp() {
    const { state, dispatch } = useContext(Context);

    const [firstName, setFirstName] = useState('');
    const submitHandler = async () => {
        connect.send({
            userID: '321',
            gameID: '613b99e0b9ec58ffea641419',
            event: 'message',
            chatMessage: firstName,
            userName: 'baba',
        });
    };
    useEffect(() => {}, []);

    return (
        <div>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
                onClick={() =>
                    connect.connect(
                        {
                            userID: '321',
                            gameID: '613b99e0b9ec58ffea641419',
                            event: 'userConnection',
                            userName: 'baba',
                        },
                        dispatch,
                    )
                }
            >
                connect
            </button>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={() => submitHandler()}> send</button>
            <div>
                {state.chatMessages.map((chatMessage: ChatMessage, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index}>
                        <span>{chatMessage.author} </span> <span> {chatMessage.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
