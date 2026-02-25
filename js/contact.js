/* ===================================
   CONTACT PAGE FUNCTIONALITY
   =================================== */

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all required fields', 'error');
        return;
    }
    
    // Simulate form submission
    const formData = {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage (in a real app, this would be sent to a server)
    let submissions = JSON.parse(localStorage.getItem('contact_submissions')) || [];
    submissions.push(formData);
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    
    // Show success message
    showFormMessage('Thank you! Your message has been sent. We will get back to you soon.', 'success');
    
    // Reset form
    event.target.reset();
}

function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    
    if (type === 'success') {
        setTimeout(() => {
            messageElement.className = 'form-message';
        }, 5000);
    }
}

// Initialize contact form on page load
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});
