document.addEventListener('DOMContentLoaded', () => {
  // FAQ accordion toggles
  const faqItems = document.querySelectorAll('.faq-item, .faq-question');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const icon = item.querySelector('.icon') || item.querySelector('span:last-child');
      if (icon) {
        icon.textContent = icon.textContent === '+' ? '-' : '+';
      }
      item.classList.toggle('active');
    });
  });

  // Client-side newsletter form handling
  const newsletterButtons = document.querySelectorAll('.email-signup button, .cta-button');
  newsletterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const input = btn.previousElementSibling;
      if (input && input.tagName === 'INPUT' && input.type === 'email') {
        const email = input.value.trim();
        if (email) {
          alert(`Thank you for signing up with: ${email}!`);
          input.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      }
    });
  });
});
