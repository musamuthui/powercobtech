// Sticky header — adds shadow + solid background on scroll
const header = document.getElementById('siteHeader');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();