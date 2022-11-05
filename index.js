
(() => {
  const text = document.querySelector('footer #year');
  const date = new Date();
  text.textContent = date.getFullYear().toString();
})();
