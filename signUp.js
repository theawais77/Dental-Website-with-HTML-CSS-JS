function Validate() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var passwordError = document.getElementById("password-error");

  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match!";
    return false;
  } else {
    passwordError.textContent = "";
    
    return true;
  }




}
document.querySelector('#toothwiz_signup').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let isok = Validate();
  if (!isok) {
    return;
  }
  var passwordError = document.getElementById("password-error");
  const formData = new FormData(event.target);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;

  });
  let parsedSignups;
  const signups = localStorage.getItem('toothwiz_signups');
  if (signups) {
    parsedSignups = JSON.parse(signups);
    isok = parsedSignups.filter(x => x.email == formObject['email']).length > 0;
   if (isok) {
    passwordError.textContent = "Email is duplicate";
    return ;
   }
    
  }
  else
  {
    parsedSignups= [];

  }
  parsedSignups.push(formObject);
  localStorage.setItem('toothwiz_signups', JSON.stringify(parsedSignups));
  window.location.href="main.html";



});
