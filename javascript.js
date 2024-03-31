document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los valores de los campos
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var carrera = document.getElementById("carrera").value;

  // Crear una nueva fila en la tabla
  var table = document.getElementById("tabla").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();

  // Insertar celdas con los valores
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  cell1.innerHTML = nombre;
  cell2.innerHTML = apellido;
  cell3.innerHTML = carrera;

  // Limpiar los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("carrera").value = "";
});
