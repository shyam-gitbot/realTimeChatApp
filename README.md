
```markdown
# Real-Time Chat App 💬

A simple **real-time chat application** built with **Node.js, Express, and Socket.IO** for learning purposes.  
Users can join with a username, send/receive messages instantly, and switch between light & dark themes.  

---

## 🚀 Features
- Real-time communication using **Socket.IO**
- **Username modal popup** on joining
- Messages aligned **right for sender** and **left for receiver**
- Auto-scroll to the latest message
- **Enter key** to send messages
- **Theme switcher** (Light 🌞 / Dark 🌙)
- Clean and responsive UI with custom CSS

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Dev Tooling:** Nodemon (for auto-restart)

---

## 📂 Project Structure

<!--  -->
<!-- realTimeChatApp/ -->
<!-- │ -->
<!-- ├── public/              # Static frontend files -->
<!-- │   ├── index.html       # Main UI -->
<!-- │   ├── client.js        # Client-side Socket.IO logic -->
<!-- │   └── styles.css       # Chat UI styles -->
<!-- │ -->
<!-- ├── server.js            # Express + Socket.IO backend -->
<!-- ├── package.json         # Project dependencies -->
<!-- └── README.md            # Project documentation -->
<!--  -->

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/realtime-chat-app.git
   cd realtime-chat-app
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app with Nodemon (development mode):

   ```bash
   npm run dev
   ```

   Or without Nodemon:

   ```bash
   node server.js
   ```

4. Open your browser:

   ```
   http://localhost:3000
   ```

---

## 🔮 Future Improvements

* Add **private messaging / rooms**
* Show **list of online users**
* Persist chats in a database (MongoDB / PostgreSQL)
* Add emojis and file sharing
* Deploy on **Heroku / Vercel**

---

## 👨‍💻 Author

* Built with ❤️ for learning Socket.IO
* Your Name ([@shyam-gitbot](https://github.com/shyam-gitbot))