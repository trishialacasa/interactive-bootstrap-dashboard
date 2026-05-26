(() => {
  const form = document.querySelector('.needs-validation');
  const btn = document.getElementById('submitBtn');

  btn.addEventListener('click', () => {

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    alert("Thank you for your feedback!");

    form.reset();
    form.classList.remove('was-validated');

    const modal = bootstrap.Modal.getInstance(
      document.getElementById('feedbackModal')
    );

    modal.hide();
  });
})();