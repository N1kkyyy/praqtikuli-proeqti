
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        if(email.trim() === '') {
            alert('გთხოვთ შეიყვანოთ ელ-ფოსტა!');
        } else {
            alert('მესიჯი წარმატებით გაიგზავნა!');
            contactForm.reset();
        }
    });
}