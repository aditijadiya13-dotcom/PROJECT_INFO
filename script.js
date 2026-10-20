const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

// Countdown to the fictional event date in the supplied task brief.
function updateCountdown() {
  const eventDate = new Date('2026-11-12T10:00:00+05:30');
  const remaining = Math.max(0, eventDate.getTime() - Date.now());
  const totalMinutes = Math.floor(remaining / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const daysElement = document.getElementById('daysLeft');
  const hoursElement = document.getElementById('hoursLeft');
  const minutesElement = document.getElementById('minutesLeft');
  if (daysElement && hoursElement && minutesElement) {
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
  }
}
updateCountdown();
setInterval(updateCountdown, 60000);

const registrationForm = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const formMessage = document.getElementById('formMessage');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = fullName.value.trim();
  if (name.length < 2) {
    formMessage.textContent = 'Please enter your name to continue.';
    fullName.focus();
    return;
  }
  formMessage.textContent = `You're on the list, ${name}! This is a demo confirmation — no data was sent.`;
  registrationForm.reset();
});
