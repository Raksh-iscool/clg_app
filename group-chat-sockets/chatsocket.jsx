import { useState } from "react";
import Head from "next/head";

export default function Chat() {
  const [messages, setMessages] = useState([
    { user: "user1", avatar: "https://i.pravatar.cc/40?img=3", text: "Hey, how are you doing?" },
    { user: "user2", avatar: "https://i.pravatar.cc/40?img=5", text: "I'm doing good! How about you?" },
  ]);
  const [message, setMessage] = useState("");
  const [isUser1, setIsUser1] = useState(true);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      user: isUser1 ? "user1" : "user2",
      avatar: isUser1
        ? "https://i.pravatar.cc/40?img=3"
        : "https://i.pravatar.cc/40?img=5",
      text: message.trim(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
    setIsUser1(!isUser1);
  };

  return (
    <>
      <Head>
        <title>Dark Theme Chat Box</title>
      </Head>
      <div style={styles.body}>
        <div style={styles.chatContainer}>
          <div style={styles.chatHeader}>Chat</div>
          <div style={styles.chatBox}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  justifyContent: msg.user === "user1" ? "flex-start" : "flex-end",
                }}
              >
                {msg.user === "user1" && (
                  <img src={msg.avatar} alt="Avatar" style={styles.avatar} />
                )}
                <div style={{ ...styles.content, backgroundColor: msg.user === "user1" ? "#333" : "#4CAF50" }}>
                  {msg.text}
                </div>
                {msg.user === "user2" && (
                  <img src={msg.avatar} alt="Avatar" style={styles.avatar} />
                )}
              </div>
            ))}
          </div>

          <div style={styles.chatInput}>
            <input
              type="text"
              style={styles.input}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button style={styles.button} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#121212",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  chatContainer: {
    width: "400px",
    height: "600px",
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatHeader: {
    backgroundColor: "#0B877D",
    padding: "15px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  chatBox: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    backgroundColor: "#2C2C2C",
  },
  message: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "15px",
  },
  content: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#fff",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  chatInput: {
    display: "flex",
    padding: "10px",
    backgroundColor: "#1e1e1e",
    borderTop: "1px solid #444",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "white",
    outline: "none",
    marginRight: "10px",
  },
  button: {
    backgroundColor: "#0B877D",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};