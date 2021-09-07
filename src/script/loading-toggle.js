const loadingStarted = () => {
  const loading = document.getElementById('loading-element');
  loading.style.display = 'flex';
};

const loadingFinished = () => {
  const loading = document.getElementById('loading-element');
  loading.style.display = 'none';
};

export { loadingStarted, loadingFinished };
