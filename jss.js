
function Funcion_eliminar() {
    if (confirm('Desea borrar el estudiante seleccionado??')) {
        alert('Estudiante borrado exitosamente');
        document.location.href='../Estudiantes/estudiante.html';
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}


function Funcion_agregar() {
    if (confirm('Desea agregar un estudiante nuevo??')) {
       open("../Estudiantes/formulario.html", "Sizewindow","width=1300,height=600,scrollbars=yes,toolbar=yes")
        ;
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}
