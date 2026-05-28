import { io } from 'socket.io-client';

export function connectWS() {
    return io("https://group-chat-app-1gbc.onrender.com");
}