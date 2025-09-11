function validar() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const estadoCivil = document.getElementById("estadoCivil").value;
  const comentario = document.getElementById("comentario").value.trim();

  if (!nombre || !email || !telefono || !estadoCivil || !comentario) {
    alert("Todos los campos son obligatorios");
    return;
  }
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("El email no es válido.");
    return;
  }
  const regexTel = /^[0-9]{8,15}$/;
  if (!regexTel.test(telefono)) {
    alert("El teléfono debe contener solo números (mínimo 8 dígitos).");
    return;
  }

  alert("Formulario enviado correctamente.");
  limpiar();
}



function limpiar() {
  document.getElementById("formGamer").reset();
}
