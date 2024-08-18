let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop !== 0 && scrollTop >= 80) {
    if (scrollTop > lastScrollTop) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  }

  lastScrollTop = scrollTop;
});