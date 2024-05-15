document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login-form');
  form.addEventListener('submit', function(event) {
    const usernameInput = form.querySelector('input[name="username"]');
    const passwordInput = form.querySelector('input[name="password"]');
    
    // Check if username is empty
    if (!usernameInput.value.trim()) {
      alert('Please enter your username.');
      event.preventDefault();
      return;
    }
    
    // Check if password is empty
    if (!passwordInput.value.trim()) {
      alert('Please enter your password.');
      event.preventDefault();
      return;
    }
    
    // All validations passed, prevent default form submission
    event.preventDefault();

    // AJAX request
    var xhr = new XMLHttpRequest();
    var url = 'process_login.php';
    var username = usernameInput.value;
    var password = passwordInput.value;
    
    var params = 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById('response-message').innerText = xhr.responseText;
      }
    };
    
    xhr.send(params);
  });
});
