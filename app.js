// ------------------------- TOGGLE PASSWORD

$('#togglePassword').click(function() {
  if ($('#password').prop('type') === 'password') {
    $('#password').prop('type', 'text');
    $('#togglePassword').html('<i class="bi bi-eye-slash"></i>');
  } else {
    $('#password').prop('type', 'password');
    $('#togglePassword').html('<i class="bi bi-eye"></i>');
  }
});

