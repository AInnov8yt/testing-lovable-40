document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('actionButton');
  const messageParagraph = document.getElementById('message');

  button.addEventListener('click', function() {
    messageParagraph.textContent = 'Button clicked! Welcome to the simple web app.';
  });
});