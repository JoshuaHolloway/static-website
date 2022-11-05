
(() => {
  const text = document.querySelector('footer #year');
  if (text) {
    const date = new Date();
    text.textContent = date.getFullYear().toString();
  }
})();
