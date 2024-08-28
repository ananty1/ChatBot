"use client";
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

const socket = io('ws://localhost:8001');

const Client = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        // Listen for 'chat message' events from the server
        socket.on('chat_message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Clean up event listener on unmount
        return () => {
            socket.off('chat_message');
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            // Emit 'chat message' event to the server
            socket.emit('chat_message', newMessage);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <h2>Real-time Chat</h2>

            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
            <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send message</button>
            </form>
        </div>
    );
};

export default Client;
