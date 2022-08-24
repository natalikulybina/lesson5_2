function checkLogin () {
  const email = prompt('Enter your e-mail');
  const checkEmail = email.indexOf('admin@test.io');

  if (checkEmail === -1) {
    alert(`Incorrect E-Mail address`);
    return;
  }
  
  const password = prompt('Enter your password');
  const checkPass = password.indexOf('admin1234');
  
  if (checkPass === -1) {
    alert(`Invalid password`);
  }
  else {
    alert(`Successful login`);
  }
}

checkLogin ();

