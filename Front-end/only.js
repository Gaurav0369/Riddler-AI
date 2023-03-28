const messagesContainer = document.querySelector('.messages-container');
const inputField = document.querySelector('input');
const sendBtn = document.querySelector('#send-btn');
const micBtn = document.querySelector('#mic-btn');
const micButton = document.getElementById("#mic-btn");

sendBtn.addEventListener('click', () => {
  const message = inputField.value;
  if (!message) return;
  
  addMessageToContainer(message, 'user');
  inputField.value = '';
  
  // Send message to chatbot logic
});

micBtn.addEventListener('click', () => {});
function addMessageToContainer(message, sender) {
    const messageElem = document.createElement('div');
    messageElem.classList.add('message', message-${sender});
    messageElem.innerHTML = <p>${message}</p>;
    messagesContainer.appendChild(messageElem);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    
    micBtn.addEventListener("click", function() {
      micBtn.classList.toggle("active");
    });
    