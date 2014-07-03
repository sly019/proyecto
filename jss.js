
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
       open("../Estudiantes/formulario.html", "Sizewindow","width=2500,height=1000,scrollbars=no,toolbar=no, Resizable=no")
        ;
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}

function Funcion_ver() {
    if (confirm('Desea ver el estudiante seleccionado??')) {
       open("../Estudiantes/ver.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes");
    } else {
        document.location.href='../Estudiantes/estudiante.html';
    }
}


function Funcion_cancelar() {
        window.close();
    }


function Funcion_agregar_est() {
    alert  ("Se agregó el estudiante correctamente")
    window.close();
}

function Funcion_editar_fin() {
    alert("Se editó el estudiante correctamente")
    window.close();
}

function Funcion_editar_est() {   
    open("../Estudiantes/edicion.html", "Sizewindow","width=2500,height=1000,scrollbars=yes,toolbar=yes");
}


