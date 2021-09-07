const loadingStarted = () => {
  const loading = document.getElementById('loading-element');
  loading.style.display = 'flex';
};

const loadingFinished = () => {
  console.log('Executed');
  const loading = document.getElementById('loading-element');
  loading.style.display = 'hidden';
};

export { loadingStarted, loadingFinished };
