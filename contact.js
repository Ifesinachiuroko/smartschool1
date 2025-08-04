// Show/hide mobile navigation menu
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('show');
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }

  // You can replace this with actual form submission logic
  alert(`Thanks, ${name}! Your message has been sent.`);

  // Reset the form
  document.querySelector('.contact-form').reset();
  return false;
}
