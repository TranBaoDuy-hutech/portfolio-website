document.addEventListener('DOMContentLoaded', () => {
  const progress = document.getElementById('reading-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.width = (ratio * 100) + '%';
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  const emailLink = document.querySelector('#contact a[href^="mailto:"]');
  if (emailLink && navigator.clipboard && window.isSecureContext) {
    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'copy-email';
    copyButton.textContent = 'Copy email';
    copyButton.setAttribute('aria-label', 'Copy email address');
    copyButton.addEventListener('click', async () => {
      const address = emailLink.getAttribute('href').replace(/^mailto:/i, '');
      try {
        await navigator.clipboard.writeText(address);
        copyButton.textContent = 'Copied';
        copyButton.classList.add('is-copied');
        window.setTimeout(() => {
          copyButton.textContent = 'Copy email';
          copyButton.classList.remove('is-copied');
        }, 1800);
      } catch {
        copyButton.textContent = 'Copy unavailable';
        window.setTimeout(() => { copyButton.textContent = 'Copy email'; }, 1800);
      }
    });
    emailLink.parentElement.appendChild(copyButton);
  }
});
