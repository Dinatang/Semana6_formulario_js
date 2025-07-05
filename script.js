const form = document.getElementById('registroForm');
const submitBtn = document.getElementById('submitBtn');

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const edad = document.getElementById('edad');

const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const edadError = document.getElementById('edadError');

function validarNombre() {
  if (nombre.value.trim().length >= 3) {
    nombreError.textContent = '';
    return true;
  } else {
    nombreError.textContent = 'El nombre debe tener al menos 3 caracteres.';
    return false;
  }
}

function validarEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value.trim())) {
    emailError.textContent = '';
    return true;
  } else {
    emailError.textContent = 'El correo electrónico no es válido.';
    return false;
  }
}

function validarPassword() {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length >= 8 && passwordRegex.test(password.value)) {
    passwordError.textContent = '';
    return true;
  } else {
    passwordError.textContent = 'La contraseña debe tener mínimo 8 caracteres, un número y un carácter especial.';
    return false;
  }
}

function validarConfirmPassword() {
  if (password.value === confirmPassword.value) {
    confirmPasswordError.textContent = '';
    return true;
  } else {
    confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
    return false;
  }
}

function validarEdad() {
  if (parseInt(edad.value) >= 18) {
    edadError.textContent = '';
    return true;
  } else {
    edadError.textContent = 'Debes tener al menos 18 años.';
    return false;
  }
}

function validarFormulario() {
  const esValido = validarNombre() && validarEmail() && validarPassword() && validarConfirmPassword() && validarEdad();
  submitBtn.disabled = !esValido;
}

nombre.addEventListener('input', validarFormulario);
email.addEventListener('input', validarFormulario);
password.addEventListener('input', validarFormulario);
confirmPassword.addEventListener('input', validarFormulario);
edad.addEventListener('input', validarFormulario);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Formulario enviado correctamente.');
  form.reset();
  submitBtn.disabled = true;
});
