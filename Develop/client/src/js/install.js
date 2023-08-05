const installButton = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.classList.toggle('hidden', false);
});

installButton.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    installButton.classList.toggle('hidden', true);
  deferredPrompt = null;
});