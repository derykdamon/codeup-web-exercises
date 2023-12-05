// greeting-control.js
import { getRandomGreeting } from './greeting-logic.js';

document.getElementById('greetingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const greeting = getRandomGreeting();
    document.getElementById('greetingDisplay').textContent = `${greeting}, ${name}!`;
});
