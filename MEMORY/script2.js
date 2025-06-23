
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => {
    photo.classList.add('clicked');
    setTimeout(() => photo.classList.remove('clicked'), 600);
  });
});
