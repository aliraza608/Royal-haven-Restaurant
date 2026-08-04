document.addEventListener('DOMContentLoaded', () => {
    
    // Booking Form Submission Action
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✨ Thank you for choosing Royal Haven! Your booking request has been received. Our concierge will contact you shortly to confirm.');
            bookingForm.reset();
        });
    }

    // Contact Form Submission Action
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(' Envelope Message Sent! We will get back to you within 2 hours.');
            contactForm.reset();
        });
    }

    // Header Background Change on Scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(5, 8, 15, 0.98)';
            header.style.padding = '10px 50px';
        } else {
            header.style.backgroundColor = 'rgba(10, 15, 29, 0.95)';
            header.style.padding = '15px 50px';
        }
    });
});