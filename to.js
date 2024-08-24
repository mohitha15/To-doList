
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

 
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
}
 
themeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
