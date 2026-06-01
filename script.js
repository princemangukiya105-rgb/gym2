const bookingForm = document.getElementById('bookingForm');
const dumbbell = document.querySelector('.dumbbell');

window.addEventListener('scroll', () => {
  if (!dumbbell) return;
  const offset = window.scrollY;
  const rotation = offset / 8;
  dumbbell.style.transform = `rotateX(${rotation / 2}deg) rotateY(${rotation / 3}deg) rotateZ(${rotation / 6}deg)`;
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const phone = document.getElementById('userPhone').value.trim();
  const gymType = document.getElementById('gymType').value;
  const message = document.getElementById('userMessage').value.trim();
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || 'Call';

  if (!name || !email || !phone) {
    alert('Please complete your name, email, and phone before sending.');
    return;
  }

  const whatsappNumber = '917039761021';
  const enquiryText = `Fitness Factory Gym enquiry:%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AInterest: ${encodeURIComponent(gymType)}%0APreferred contact: ${encodeURIComponent(contactMethod)}%0AMessage: ${encodeURIComponent(message || 'No message provided')}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${enquiryText}`, '_blank');
  bookingForm.reset();
});
