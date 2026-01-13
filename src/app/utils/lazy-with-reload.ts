// Recarrega a página se um trecho importado dinamicamente não carregar.
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  window.location.reload(); // refresh the page
});
