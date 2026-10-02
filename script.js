//your code here
 const form = document.getElementById('intern-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.classList.add('was-validated');
      if (form.checkValidity()) {
        // all fields valid: handle the submission here
      }
    });