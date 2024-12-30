// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Check saved theme
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});