const socket = io();

// Gửi tin nhắn
document.getElementById('send-button').addEventListener('click', () => {
  const message = document.getElementById('message-input').value;
  socket.emit('message', message);
  document.getElementById('message-input').value = '';
});

// Gửi tệp
document.getElementById('send-file-button').addEventListener('click', () => {
  const file = document.getElementById('file-input').files[0];
  socket.emit('file', file);
});

// Nhận tin nhắn
socket.on('message', (message) => {
  const chatLog = document.getElementById('chat-log');
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
});

// Nhận tệp
socket.on('file', (file) => {
  const chatLog = document.getElementById('chat-log');
  const fileElement = document.createElement('p');
  fileElement.textContent = `File: ${file.name}`;
  chatLog.appendChild(fileElement);
});
