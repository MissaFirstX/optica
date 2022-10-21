let clientes = [
    {
        idClientes: 1,
        numeroUnicoCliente: "IBD589",
        nombre: "Ivan",
        apellido_paterno: "Blancarte",
        apellido_materno: "Aguayo",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "IBAL1027",
        telefono_casa: "4771189966",
        telefono_movil: "4775862341",
        correo_electronico: "iblancarte583@gmail.com"
    },
    {
        idClientes: 2,
        numeroUnicoCliente: "AVBL3197",
        nombre: "Alexis",
        apellido_paterno: "Villanueva",
        apellido_materno: "Blancarte",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "ALEX285",
        telefono_casa: "4772853694",
        telefono_movil: "4774560398",
        correo_electronico: "alexblan2@gmail.com"
    },
    {
        idClientes: 3,
        numeroUnicoCliente: "MARI256",
        nombre: "Mariana",
        apellido_paterno: "Angulo",
        apellido_materno: "Camarillo",
        genero: "Femenino",
        estatus: "Activo",
        rfc: "MARIAN258",
        telefono_casa: "4770369764",
        telefono_movil: "4772579036",
        correo_electronico: "marAn25@gmail.com"
    }
];

export function inicializarCliente()
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
    for (let i = 0; i < clientes.length; i++)
    {

        contenido = contenido + '<tr>'+
                '<td>' + clientes[i].nombre +'</td>' +
                '<td>' + clientes[i].correo_electronico + '</td>' +
                '<td>' + clientes[i].telefono_casa + '</td>' +
                '<td>' + clientes[i].telefono_movil + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleCliente('+
                                                                    clientes[i].idClientes+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyClientes').innerHTML = contenido;
}
//Muestra y oculta el detalle del Cliente
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

export function mostrarDetalleCliente(idClientes)
{
    let i = -1;

    //Buscamos la posicion del cliente
    i = buscarPosicionPorId(idClientes);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario
        
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con los datos del Cliente
        document.getElementById("txtNumeroUnicoCliente").value=clientes[i].numeroUnicoCliente;
        document.getElementById("txtIdCliente").value=clientes[i].idClientes;
        document.getElementById("txtNombreC").value = clientes[i].nombre;
        document.getElementById("txtApellidoPaternoC").value = clientes[i].apellido_paterno;
        document.getElementById("txtApellidoMaternoC").value = clientes[i].apellido_materno;
        document.getElementById("txtCorreoElectronicoC").value = clientes[i].correo_electronico;
        document.getElementById("txtGeneroC").value = clientes[i].genero;        
        document.getElementById("txtTelefonoCasaC").value = clientes[i].telefono_casa;
        document.getElementById("txtTelefonoMovilC").value = clientes[i].telefono_movil;
        document.getElementById("txtRFCC").value=clientes[i].rfc;

    } else
        alert('Cliente No encontrado.');
       
       //Mostramos el formulario que llenamos previamente
       setDetalleVisible(true);
}


export function limpiarFormularioDetalle()

{
        document.getElementById("txtNumeroUnicoCliente").value="";
        document.getElementById("txtIdCliente").value="";
        document.getElementById("txtNombreC").value ="";
        document.getElementById("txtApellidoPaternoC").value ="";
        document.getElementById("txtApellidoMaternoC").value ="";
        document.getElementById("txtCorreoElectronicoC").value ="";
        document.getElementById("txtGeneroC").value ="";        
        document.getElementById("txtTelefonoCasaC").value ="";
        document.getElementById("txtTelefonoMovilC").value ="";
        document.getElementById("txtRFCC").value="";
}


//Buscar la posicion de un cliente
//dentro del arreglo de clientes
//con base en el idCliente
function buscarPosicionPorId(id)
{
    for (let i = 0;i < clientes.length; i++)
    {
        //Comparamos si el ID del cliente en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (clientes[i].idClientes === id) {
            return i; //Si son iguales, regresamos la posicion
        }
    }
    //Si llegamos hasta aqui significa que
    //que no encontramos el ID buscado y entonces
    //devolvemos -1

    return -1;
}
export function save()
{
    //declaramos una variable temporal para saber la posición del cliente
    let pos = -1;
    //Definimos los atributos y valores del cliente
    let cliente = {
        
        idClientes:0,
        numeroUnicoCliente:0,
        nombre:document.getElementById("txtNombreC").value,
        apellido_paterno:document.getElementById("txtApellidoPaternoC").value,
        apellido_materno:document.getElementById("txtApellidoMaternoC").value,
        genero:document.getElementById("txtGeneroC").value,        
        rfc:document.getElementById("txtRFCC").value,
        telefono_casa:document.getElementById("txtTelefonoCasaC").value,
        telefono_movil:document.getElementById("txtTelefonoMovilC").value,
        correo_electronico:document.getElementById("txtCorreoElectronicoC").value
        
        
    };
    //Revisamos si hay algun valor en la caja de texto del id del cliente:
    //El trim quita espacios a la derecha e izquierda
    if (document.getElementById("txtNumeroUnicoCliente").value.trim() === '')
    {
        //generamos un id para el cliente a partir de los milisegundos de la fecha actual
        cliente.idClientes = Date.now()+1;

        //Generar numero unico
        let letra1 = cliente.apellido_paterno.substring(0, 2);
        let letra2 = cliente.apellido_materno.substring(0, 1);

        cliente.numeroUnicoCliente = letra1 + letra2 + (Date.now() + 1);

        //Insertamos el cliente al final del arreglo
        clientes[clientes.length] =cliente;

        //Colocamos los id generados en las cajas de texto para evitar duplicados
        document.getElementById("txtNumeroUnicoCliente").value = cliente.numeroUnicoCliente;
        document.getElementById("txtIdCliente").value = cliente.idClientes;

        //Mostramos un mensaje al usuario
        mandarConfirmacionGuardar();
        
        //Actualizamos la tabla
        fillTable();
    } else
    {
        //Si el empleado ya tiene un id, lo tomamos para actualizar sus datos:
        cliente.idClientes = parseInt(document.getElementById("txtIdCliente").value);
        cliente.numeroUnicoCliente = document.getElementById("txtNumeroUnicoCliente").value;
        
        //Buscamos la posición del objeto:
        pos = buscarPosicionPorId(cliente.idClientes);
        
        //Revisamos que tengamos una posición valida:
        if (pos >=0)
        {
            //Remplazamos el objeto en la posición encontrada:
            clientes[pos] = cliente;
            
            //Mostramos un mensaje al usuario:
            mandarConfirmacionActualizar();
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            alert("Error: Cliente no Encontrado.");
        }        
    }
}

//Eliminar un cliente
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
    if (document.getElementById("txtIdCliente").value.trim() !== "")
    {
        pos = buscarPosicionPorId(parseInt(document.getElementById("txtIdCliente").value));
        
        if (pos>=0)
        {
            clientes.splice(pos,1);

                    swalWithBootstrapButtons.fire(
                            'Eliminado!',
                            'Se eliminó correctamente.',
                            'success'
                            )

                    fillTable();

                    limpiarFormularioDetalle();

                    setDetalleVisible(false);
                }
            }
        } else if (
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





