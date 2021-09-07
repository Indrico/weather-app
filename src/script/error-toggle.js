const closeError = () => {
  const errorToast = document.getElementById('error-element');
  errorToast.style.opacity = '0';
  errorToast.style.transform = 'translateX(100%)';
};

const showError = () => {
  const errorToast = document.getElementById('error-element');
  errorToast.style.opacity = '1';
  errorToast.style.transform = 'translateX(0%)';
  setTimeout(closeError, 5000);
};

const setErrorMessage = (message) => {
  document.getElementById('error-element').innerHTML = message;
};

export { showError, closeError, setErrorMessage };
