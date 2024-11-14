document.querySelector('#about-us-btn').addEventListener('click', function() {
    alert('Thank you for your interest in joining us!');
});

document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Social link clicked!');
    });
});

document.querySelector('.more-blogs').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Load more blogs!');
});


// Example of simple script, e.g., for handling the sign-up button click
document.querySelector('.email-signup button').addEventListener('click', function() {
    alert('Thank you for signing up!');
});