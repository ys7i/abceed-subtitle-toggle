let subtitlesVisible = true;

// CSSスタイルを追加
const style = document.createElement('style');
style.textContent = `
  .movie-subtitle-component.hidden-subtitles p {
    color: #888888 !important;
    background-color: #888888 !important;
    text-shadow: none !important;
    filter: blur(3px) !important;
  }
`;
document.head.appendChild(style);

document.addEventListener('keydown', function(event) {
  // イベントがinputフィールドなどで発生した場合は無視
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    return;
  }

  if (event.key === 's' || event.key === 'S') {
    event.preventDefault();

    const subtitleContainer = document.querySelector('.movie-subtitle-component');

    if (subtitleContainer) {
      subtitlesVisible = !subtitlesVisible;

      if (subtitlesVisible) {
        subtitleContainer.classList.remove('hidden-subtitles');
      } else {
        subtitleContainer.classList.add('hidden-subtitles');
      }
g    }
  }
});