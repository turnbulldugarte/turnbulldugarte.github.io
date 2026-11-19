// Measure the free space so each heading travels to the arrow at any width.
(() => {
  const summaries = document.querySelectorAll('.research-page .topic-block > summary');
  function measure(summary) {
    const label = summary.querySelector('.topic-label');
    const arrow = summary.querySelector('.topic-arrow');
    const gap = parseFloat(getComputedStyle(summary).columnGap) || 0;
    const distance = Math.max(0, arrow.offsetLeft - gap - label.offsetLeft - label.offsetWidth);
    summary.style.setProperty('--topic-travel', `${distance}px`);
  }
  const observer = new ResizeObserver(entries => entries.forEach(({ target }) => measure(target)));
  summaries.forEach(summary => {
    measure(summary);
    observer.observe(summary);
  });
  document.fonts.ready.then(() => summaries.forEach(measure));
})();
