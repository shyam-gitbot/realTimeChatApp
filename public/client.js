// const socket = io();

// const input = document.getElementById('message-input');
// const sendBtn = document.getElementById('send-button');
// const messages = document.getElementById('messages');

// // Ask for username when page loads
// let myUsername = '';

// while (!myUsername) {
//     myUsername = prompt("Enter your username:");
// }

// sendBtn.addEventListener('click', () => {
//     const msg = input.value;
//     if (msg) {
//         // send object instead of just string
//         socket.emit('chat message', { username: myUsername, message: msg });
//         input.value = '';
//     }
// });


// // // Listen for messages from server
// // socket.on('chat message', (msg) => {
// //     const item = document.createElement('div');
// //     item.textContent = `${msg.username}: ${msg.message}`;
// //     messages.appendChild(item);
// // });

// // Send message on Enter key press
// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         sendBtn.click(); // trigger send button click
//     }
// });



// // Listen for messages from server
// socket.on('chat message', (data) => {
//     const item = document.createElement('div');
//     // data can be object { username, message } or string
//     if (typeof data === 'object') {
//         item.textContent = `${data.username}: ${data.message}`;
//     } else {
//         item.textContent = data; // for server notifications
//     }
//     messages.appendChild(item);
//     messages.scrollTop = messages.scrollHeight; // auto scroll
// });


const socket = io();

const input = document.getElementById('message-input');
const sendBtn = document.getElementById('send-button');
const messages = document.getElementById('messages');

// Ask for username when page loads
let myUsername = '';
while (!myUsername) {
    myUsername = prompt("Enter your username:");
}

// Send message function
function sendMessage() {
    const msg = input.value;
    if (msg) {
        socket.emit('chat message', { username: myUsername, message: msg });
        input.value = '';
    }
}

sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key press
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Listen for messages from server
socket.on('chat message', (data) => {
    const item = document.createElement('div');

    if (typeof data === 'object') {
        item.textContent = `${data.username}: ${data.message}`;
        // Apply class for left/right alignment
        item.classList.add(data.username === myUsername ? 'self' : 'other');
    } else {
        item.textContent = data; // server notifications
        item.classList.add('notification');
    }

    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // auto scroll
});
