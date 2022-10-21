//Creamos el arreglo de empleados:
let empleados = [
    {
        idEmpleado: 1,
        numeroUnicoEmpleado: "JUA6374",
        nombre: "Angel",
        apellido_paterno: "Juarez",
        apellido_materno: "Alvizo",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "NA",
        telefono_casa: "4765647384",
        telefono_movil: "4776452839",
        correo_electronico: "gallo@gmail.com",
        usuario: "empleadoGeneral",
        contraseña: "12345"
    },
    {
        idEmpleado: 2,
        numeroUnicoEmpleado: "CAR4567",
        nombre: "Keysi",
        apellido_paterno: "Cardona",
        apellido_materno: "Reyes",
        genero: "Femenino",
        estatus: "Inactivo",
        rfc: "NA",
        telefono_casa: "4763526364",
        telefono_movil: "4778491202",
        correo_electronico: "qeso@gmail.com",
        usuario: "admin",
        contraseña: "54321"
    },
    {
        idEmpleado: 3,
        numeroUnicoEmpleado: "COS456",
        nombre: "Alan",
        apellido_paterno: "Contreras",
        apellido_materno: "Sanchez",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "NA",
        telefono_casa: "4778642536",
        telefono_movil: "4768492363",
        correo_electronico: "cuasi@gmail.com",
        usuario: "empleadoJorge",
        contraseña: "67890"
    }
];

export function inicializarEmpleado()
{
    setDetalleVisible(false);
    fillTable();
}
/**
 * Llena una tabla a partir de un Arreglo JSON.
 */
export function fillTable()
{
    //Declaramos una variable donde se guardara el contenido de la tabla:
    let contenido = '';
    //Recorrer el Arreglo
    for (let i = 0; i < empleados.length; i++)
    {
        //Vamos generando el contenido de la tabla dinamicamente:
        contenido = contenido + '<tr>' +
                '<td>' + empleados[i].nombre + '</td>' +
                '<td>' + empleados[i].correo_electronico + '</td>' +
                '<td>' + empleados[i].telefono_casa + '</td>' +
                '<td>' + empleados[i].telefono_movil + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleEmpleado('+
                                                                    empleados[i].idEmpleado+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyEmpleados').innerHTML = contenido;
}
//Muestra y oculta el detalle del Empleado
export function setDetalleVisible(valor)
{
    //El tripe igual es para comparar valores
    //Cuando es con doble igual es para comparar objetos
    if (valor === true)
    {
        document.getElementById("divDetalle").style.display = "";
        document.getElementById("divCatalogo").style.display = "none";
    } else
    {
        document.getElementById("divDetalle").style.display = "none";
        document.getElementById("divCatalogo").style.display = "";
    }
}

export function mostrarDetalleEmpleado(idEmpleado)
{
    let i = -1;

    //Buscamos la posicion del empleado
    i = buscarPosicionPorId(idEmpleado);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario
        
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con los datos del empleado

        document.getElementById("txtNumeroUnicoEmpleado").value= empleados[i].numeroUnicoEmpleado;
        document.getElementById("txtIdEmpleado").value=empleados[i].idEmpleado;
        document.getElementById("txtNombreE").value = empleados[i].nombre;
        document.getElementById("txtApellidoPaternoE").value = empleados[i].apellido_paterno;
        document.getElementById("txtApellidoMaternoE").value = empleados[i].apellido_materno;
        document.getElementById("txtCorreoElectronico").value = empleados[i].correo_electronico;
        document.getElementById("txtRFC").value = empleados[i].rfc;
        document.getElementById("txtGenero").value = empleados[i].genero;
        document.getElementsByName("rbtnEstatus").value = empleados[i].estatus;
        document.getElementById("txtTelefonoCasa").value = empleados[i].telefono_casa;
        document.getElementById("txtTelefonoMovil").value = empleados[i].telefono_movil;
        document.getElementById("txtUsuario").value = empleados[i].usuario;
        document.getElementById("pwdContraseña").value = empleados[i].contraseña;

    } else 
        alert('Empleado No encontrado.');
       
       //Mostramos el formulario que llenamos previamente
       setDetalleVisible(true);
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtNumeroUnicoEmpleado").value="";
    document.getElementById("txtIdEmpleado").value="";
    document.getElementById("txtNombreE").value = "";
    document.getElementById("txtApellidoPaternoE").value = "";
    document.getElementById("txtApellidoMaternoE").value = "";
    document.getElementById("txtCorreoElectronico").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtTelefonoCasa").value = "";
    document.getElementById("txtTelefonoMovil").value = "";
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("pwdContraseña").value = "";
}
//Buscar la posicion de un Empleado dentro del arreglo de empleado con base en el id
function buscarPosicionPorId(id)
{
    for (let i = 0;i < empleados.length; i++)
    {
        //Comparamos si el ID del Empleado en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (empleados[i].idEmpleado === id) {
            return i; //Si son iguales, regresamos la posicion
        }
    }
    //Si llegamos hasta aqui significa que
    //que no encontramos el ID buscado y entonces
    //devolvemos -1

    return -1;
}
//Guardar los datos de un empleado (insert/update)
export function save()
{
    //declaramos una variable temporal para saber la posición del empleado
    let pos = -1;
    //Definimos los atributos y valores del empleado
    let empleado = {
        idEmpleado: 0,
        numeroUnicoEmpleado : 0,
        nombre: document.getElementById("txtNombreE").value,
        apellido_paterno: document.getElementById("txtApellidoPaternoE").value,
        apellido_materno: document.getElementById("txtApellidoMaternoE").value,
        genero: document.getElementById("txtGenero").value,
        rfc: document.getElementById("txtRFC").value,
        telefono_casa: document.getElementById("txtTelefonoCasa").value,
        telefono_movil: document.getElementById("txtTelefonoMovil").value,
        correo_electronico: document.getElementById("txtCorreoElectronico").value,
        usuario: document.getElementById("txtUsuario").value,
        contraseña: document.getElementById("pwdContraseña").value
    };
    //Revisamos si hay algun valor en la caja de texto del id del empleado:
    //El trim quita espacios a la derecha e izquierda
    if (document.getElementById("txtNumeroUnicoEmpleado").value.trim() === '')
    {
        //generamos un id para el empleado a partir de los milisegundos de la fecha actual
        empleado.idEmpleado = Date.now();

        //Generar numero unico
        let letra1 = empleado.apellido_paterno.substring(0, 2);
        let letra2 = empleado.apellido_materno.substring(0, 1);

        empleado.numeroUnicoEmpleado = letra1 + letra2 + Date.now() + 1;

        //Insertamos el empleado al final del arreglo
        empleados[empleados.length] = empleado;

        //Colocamos los id generados en las cajas de texto para evitar duplicados
        document.getElementById("txtNumeroUnicoEmpleado").value = empleado.numeroUnicoEmpleado;
        document.getElementById("txtIdEmpleado").value = empleado.idEmpleado;

        //Mostramos un mensaje al usuario
        mandarConfirmacionGuardar();
        
        //Actualizamos la tabla
        fillTable();
    } else
    {
        //Si el accesorio ya tiene un id, lo tomamos para actualizar sus datos:
        empleado.idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value);
        empleado.numeroUnicoEmpleado = document.getElementById("txtNumeroUnicoEmpleado").value;
        
        //Buscamos la posición del objeto:
        pos = buscarPosicionPorId(empleado.idEmpleado);
        
        //Revisamos que tengamos una posición valida:
        if (pos >=0)
        {
            //Remplazamos el objeto en la posición encontrada:
            empleados[pos] = empleado;
            
            //Mostramos un mensaje al usuario:
            mandarConfirmacionGuardar();
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            mandarError();
        }        
    }
}

//Eliminar un empleado
export function remove()
{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Esta Seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            let pos = -1;
            if (document.getElementById("txtIdEmpleado").value.trim() !== "")
            {
                //Buscamos la posición del empleado:
                pos = buscarPosicionPorId(parseInt(document.getElementById("txtIdEmpleado").value));

                //revisamos que tengamos una posición valida:
                if (pos >= 0)
                {
                    //revisamos al empleado en la posición encontrada
                    empleados.splice(pos, 1);

                    //mostramos un mensaje de notificación al usuario:
                    swalWithBootstrapButtons.fire(
                            'Eliminado!',
                            'Se eliminó correctamente.',
                            'success'
                            )

                    //actualizamos la tabla:
                    fillTable();

                    //limpiamos el formulario:
                    limpiarFormularioDetalle();

                    //mostramos la tabla:
                    setDetalleVisible(false);
                }
            }
        } else if (
                /*Si se cancela entonces...*/
                result.dismiss === Swal.DismissReason.cancel
                ) {
            swalWithBootstrapButtons.fire(
                    'Cancelado',
                    '',
                    'error'
                    )
        }
    })
}

export function limpiar_y_mostrarDetalle() 
{
    limpiarFormularioDetalle();
    setDetalleVisible(true);
}



