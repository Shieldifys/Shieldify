// COMMUNITY PAGE LOADER WITH REDIRECT
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.loading-progress');
  const progressText = document.querySelector('.loading-text');
  const discordURL = 'https://discord.gg/sFeE8sAkHK';

  if (!progressBar || !progressText) return;

  let progress = 0;
  const interval = setInterval(() => {
    // Increment progress randomly for natural feel
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    
    // Update UI
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.floor(progress)}%`;
    
    // Complete and redirect
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = discordURL;
      }, 500);
    }
  }, 300);
});