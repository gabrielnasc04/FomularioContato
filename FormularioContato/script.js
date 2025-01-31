document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    document.querySelectorAll('.input-group').forEach(group => {
        let input = group.querySelector('input, textarea, select');
        let error = group.querySelector('.error-message');
        if (!input.value.trim()) {
            error.style.display = 'block';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    });
    if (isValid) {
        document.getElementById('success-message').style.display = 'block';
    }
});
