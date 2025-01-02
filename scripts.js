// Function to handle sending a message
function sendMessage() {
    const input = document.getElementById('user-message');
    const messages = document.getElementById('chat-history');

    if (input.value.trim() !== '') {
        // Create and display the user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.innerHTML = `
            <img src="ai-logo.png" alt="User" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px">
            <span>${input.value}</span>
        `;
        messages.appendChild(userMessage);

        // Create and display the bot message (loading)
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot-message');
        botMessage.innerHTML = `
            <img src="ai-logo.png" alt="AI" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px">
            <span>Loading...</span>
        `;
        messages.appendChild(botMessage);

        // Simulate the bot response after a delay
        setTimeout(() => {
            botMessage.querySelector('span').textContent = 'This is a simulated response. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        }, 1000);

        // Clear the input field
        input.value = '';

        // Scroll to the bottom of the chat
        messages.scrollTop = messages.scrollHeight;
    }
}

// Add event listener for the Enter key
document.getElementById('user-message').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add event listener for the Send button
document.getElementById('sendMessage').addEventListener('click', function () {
    sendMessage();
});
