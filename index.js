document.addEventListener('DOMContentLoaded', () => {
  const aboutUsBtn = document.querySelector('#about-us-btn');
  if (aboutUsBtn) {
    aboutUsBtn.addEventListener('click', () => {
      alert('Thank you for your interest in joining us!');
    });
  }

  document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Social link clicked!');
    });
  });

  const moreBlogsBtn = document.querySelector('.more-blogs');
  if (moreBlogsBtn) {
    moreBlogsBtn.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Load more blogs!');
    });
  }

  const signUpBtn = document.querySelector('.email-signup button');
  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
      alert('Thank you for signing up!');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.team-member-social-icons a').forEach(icon => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Social link clicked!');
    });
  });
});