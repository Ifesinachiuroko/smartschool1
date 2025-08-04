// Show/hide mobile navigation menu
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('show');
}

function enroll(courseName){
alert(`You have selected to enroll in: ${courseName}`);
  // Optionally redirect or store course info
  // window.location.href = "enroll.html?course=" + encodeURIComponent(courseName);
}
