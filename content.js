let subtitlesVisible = true;

document.addEventListener('keydown', function(event) {
  // イベントがinputフィールドなどで発生した場合は無視
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    return;
  }

  if (event.key === 's' || event.key === 'S') {
    event.preventDefault();

    const subtitleContainer = document.querySelector('.movie-subtitle-component');

    if (subtitleContainer) {
      const subtitleElements = subtitleContainer.querySelectorAll('p');

      if (subtitleElements.length > 0) {
        subtitlesVisible = !subtitlesVisible;

        subtitleElements.forEach(p => {
          if (subtitlesVisible) {
            // 字幕を表示
            p.style.color = '';
            p.style.backgroundColor = '';
            p.style.textShadow = '';
            p.style.filter = '';
          } else {
            // 字幕をグレーで覆う（文字の形は保持）
            p.style.color = '#888888';
            p.style.backgroundColor = '#888888';
            p.style.textShadow = 'none';
            p.style.filter = 'blur(3px)';
          }
        });
      }
    }
  }
});