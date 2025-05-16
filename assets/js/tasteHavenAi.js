// Import the full menu from main-menu.js
import { fullMenuItems } from './exportFullMenu.js';

// Links for fallback responses
const whatsappLink = 'https://wa.me/+2348169383907/';
const instagramLink = 'https://www.instagram.com/devdivinetech';

// DOM Elements
const openBtn = document.getElementById('open-ai-chat');
const chatWindow = document.getElementById('ai-chat-window');
const closeBtn = document.getElementById('close-ai-chat');
const chatForm = document.getElementById('ai-chat-form');
const chatInput = document.getElementById('ai-chat-input');
const chatMessages = document.getElementById('ai-chat-messages');
const clearChatBtn = document.getElementById('clear-chat'); // Clear Chat Button

// Load chat history from localStorage
function loadChatHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  history.forEach(({ sender, message }) => {
    if (sender === 'user') addUserMessage(message);
    else addBotMessage(message);
  });
}

// Save chat history to localStorage
function saveChatHistory() {
  const messages = Array.from(chatMessages.children).map((msg) => {
    const sender = msg.classList.contains('text-right') ? 'user' : 'bot';
    const message = msg.textContent.trim();
    return { sender, message };
  });
  localStorage.setItem('chatHistory', JSON.stringify(messages));
}

// Add user message to chat
function addUserMessage(msg) {
  chatMessages.innerHTML += `<div class="text-right"><span class="inline-block bg-amber-500 text-emerald-950 px-3 py-2 rounded-lg mb-1">${msg}</span></div>`;
  saveChatHistory();
}

// Add bot message to chat
function addBotMessage(msg) {
  chatMessages.innerHTML += `<div class="text-left"><span class="inline-block bg-emerald-900 text-amber-500 px-3 py-2 rounded-lg mb-1">${msg}</span></div>`;
  saveChatHistory();
}

// AI response logic
function getAIResponse(input) {
  input = input.toLowerCase();

  // Greetings
  if (['hi', 'hello', 'hey'].some((greet) => input.includes(greet))) {
    return 'Hello! 😊 How can I assist you today?';
  }

  // Menu-related questions
  if (input.includes('menu')) {
    return 'Our menu includes African meals, fast food, drinks, and desserts. What would you like to know more about?';
  }

  // Special menu
  if (input.includes('special')) {
    return "Our special menu features dishes like Egusi & Pounded Yam, Spicy Jollof with Chicken, and more! Would you like to see today's specials?";
  }

  // Check for specific food items
  const foundItem = fullMenuItems.find((item) =>
    input.includes(item.nameOfFood.toLowerCase())
  );
  if (foundItem) {
    return `Yes, we have ${foundItem.nameOfFood}! It costs ${foundItem.price}. Would you like to place an order?`;
  }

  // If the food is not available
  if (input.includes('do you have')) {
    return "We currently don't have that item on our menu, but feel free to contact us on WhatsApp or Instagram, and we can arrange it for you!";
  }

  // Price-related questions
  if (input.includes('price') || input.includes('cost')) {
    return "Could you please specify the item you'd like to know the price of?";
  }

  // Delivery-related questions
  if (input.includes('delivery')) {
    return "We offer fast delivery within Lagos! Place your order online or via WhatsApp, and we'll deliver to your doorstep.";
  }

  // Reservation-related questions
  if (input.includes('reservation') || input.includes('book')) {
    return "To reserve a table, use the 'Book A Table' form in our contact section or let me know how I can assist!";
  }

  // Contact information
  if (
    input.includes('contact') ||
    input.includes('phone') ||
    input.includes('email')
  ) {
    return `You can reach us at +234 816 938 3907 or devdivine18@gmail.com. We're also available on WhatsApp and Instagram!`;
  }

  // Fallback response
  return `I'm not sure about that. Please contact us on <a href="${whatsappLink}" class="text-amber-500 underline">WhatsApp</a> or <a href="${instagramLink}" class="text-amber-500 underline">Instagram</a> for more assistance.`;
}

// Event Listeners
openBtn.addEventListener('click', () => {
  chatWindow.classList.remove('hidden');
  openBtn.classList.add('hidden');
  setTimeout(() => chatInput.focus(), 200);
  if (!localStorage.getItem('chatHistory')) {
    addBotMessage(
      "Hi! 👋 I'm Taste Haven's AI Assistant. Ask me anything about our restaurant, menu, delivery, or reservations!"
    );
  }
});

closeBtn.addEventListener('click', () => {
  chatWindow.classList.add('hidden');
  openBtn.classList.remove('hidden');
});

// Clear Chat Functionality
clearChatBtn.addEventListener('click', () => {
  chatMessages.innerHTML = ''; // Clear chat messages from the UI
  localStorage.removeItem('chatHistory'); // Remove chat history from localStorage
  addBotMessage("Chat cleared! How can I assist you today? 😊"); // Add a friendly message
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;
  addUserMessage(userMsg);
  addBotMessage(getAIResponse(userMsg));
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Initialize chat
loadChatHistory();