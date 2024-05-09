document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.appointment-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        if (validateForm()) {
            
            alert('Form submitted successfully!');
        }
    });

    function validateForm() {
        let isValid = true;

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.remove('error'));

     
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('error');
                isValid = false;
            }
        });

        return isValid;
    }
});
