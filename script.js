document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const uploadForm = document.getElementById('uploadForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const pw = document.getElementById('password').value;
      if (pw === '0924') {
        uploadForm.style.display = 'flex';
        loginForm.style.display = 'none';
      } else {
        alert('비밀번호가 틀렸습니다');
      }
    });
  }
});