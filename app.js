// ------------------------- TOGGLE PASSWORD

$('#togglePassword').click(function () {
  if ($('#password').prop('type') === 'password') {
    $('#password').prop('type', 'text');
    $('#togglePassword').html('<i class="bi bi-eye-slash"></i>');
  } else {
    $('#password').prop('type', 'password');
    $('#togglePassword').html('<i class="bi bi-eye"></i>');
  }
});



$(document).ready(function () {

  $('form').submit(function(event) {
    event.preventDefault();
    if ($('#password').prop('type') === 'text') {
      $('#password').prop('type', 'password');
      alert('данные украдены');
    } else {
      alert('данные украдены');
    }
    this.reset();
  });

});