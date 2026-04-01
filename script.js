document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const icon = faq.querySelector('.toggle-icon');
                if(icon) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });

            // If clicked was not active, open it
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('.toggle-icon');
                if(icon) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            }
        });
    });

    // Testimonial Navigation Stub
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 1; // Middle card active initially

    if (prevBtn && nextBtn && cards.length > 0) {
        prevBtn.addEventListener('click', () => {
            cards[currentIndex].classList.remove('active');
            currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
            cards[currentIndex].classList.add('active');
        });

        nextBtn.addEventListener('click', () => {
            cards[currentIndex].classList.remove('active');
            currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
            cards[currentIndex].classList.add('active');
        });
    }
});
