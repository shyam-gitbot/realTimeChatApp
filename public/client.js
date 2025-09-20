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

// Modal elements
const usernameModal = document.getElementById('username-modal');
const usernameInput = document.getElementById('username-input');
const usernameSubmit = document.getElementById('username-submit');

// Theme elements
const themeBtn = document.getElementById('theme-btn');
const themeDropdown = document.getElementById('theme-dropdown');
const themeOptions = document.querySelectorAll('.theme-option');

let myUsername = '';

// Show modal on load
usernameModal.style.display = 'flex';

// Username handling
function startChat() {
    const value = usernameInput.value.trim();
    if (value) {
        myUsername = value;
        usernameModal.style.display = 'none';
        input.focus();
    }
}
usernameSubmit.addEventListener('click', startChat);
usernameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') startChat();
});

// Send message function
function sendMessage() {
    const msg = input.value.trim();
    if (msg && myUsername) {
        socket.emit('chat message', { username: myUsername, message: msg });
        input.value = '';
    }
}
sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Receive messages
socket.on('chat message', (data) => {
    const item = document.createElement('div');
    if (typeof data === 'object') {
        item.textContent = `${data.username}: ${data.message}`;
        item.classList.add(data.username === myUsername ? 'self' : 'other');
    } else {
        item.textContent = data;
        item.classList.add('notification');
    }
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});

// Theme dropdown toggle
themeBtn.addEventListener('click', () => {
    themeDropdown.classList.toggle('hidden');
});

// Apply theme
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedTheme = option.getAttribute('data-theme');
        document.body.className = selectedTheme;
        themeDropdown.classList.add('hidden');
    });
});

// Default theme = light
document.body.classList.add('light');
