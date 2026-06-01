document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop();

  document.querySelectorAll('.nav-texts a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  const nextBtn = document.querySelector('[data-next]');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      window.location.href = nextBtn.dataset.next;
    });
  }

  const prevBtn = document.querySelector('[data-prev]');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      window.location.href = prevBtn.dataset.prev;
    });
  }

  const disabledNote = document.querySelector('.disabled-note');
  if (disabledNote) {
    disabledNote.textContent = 'Login desabilitado temporariamente para este projeto.';
  }
});