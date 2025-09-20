const socket = io();

const input = document.getElementById('message-input');
const sendBtn = document.getElementById('send-button');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
    const msg = input.value;
    if(msg) {
        socket.emit('chat message', msg); // send to server
        input.value = '';
    }
});

// Listen for messages from server
socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    messages.appendChild(item);
});
