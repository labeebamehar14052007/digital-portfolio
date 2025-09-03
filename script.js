document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseEl = document.getElementById('formResponse');

  if (!name || !email || !message) {
    responseEl.textContent = 'Please fill out all fields.';
    responseEl.style.color = 'red';
    return;
  }

  // Simulate form submission
  responseEl.textContent = `Thank you, ${name}! Your message has been sent.`;
  responseEl.style.color = 'green';

  // Reset the form
  this.reset();
});
