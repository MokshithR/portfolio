// Function to set scroll-padding-top dynamically
function setScrollPadding() {
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.scrollPaddingTop = `${headerHeight + 20}px`; // Add a little extra space for aesthetics
    }
}

// Set the padding when the page loads
setScrollPadding();

// Recalculate padding on window resize to handle responsiveness
window.addEventListener('resize', setScrollPadding);

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.innerText = '↑';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});