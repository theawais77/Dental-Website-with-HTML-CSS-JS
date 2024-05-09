document.querySelector('#toothwiz_signin').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;

    });
    let parsedSignups;
    const signups = localStorage.getItem('toothwiz_signups');
    if (signups) {
        parsedSignups = JSON.parse(signups);
        isok = parsedSignups.filter(x => x.email == formObject['email'] && x.password == formObject['password']).length > 0;
        if (isok) {
            alert("Successfully you have logined");
            window.location.href = "booking.html";


            return;
        }
        else {
            alert("User not found");
        }

    }
    else {

        alert("User not found");

    }




});
