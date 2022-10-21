//Creamos el arreglo de Lentes de contacto:
let lentes = [
    {
        idLentes: 1,
        idProducto: 1,
        nombre: "Lente de contacto blando",
        marca: "Fendik",
        modelo: "Hidrogel",
        color: "Pure hazel",
        queratometria: "47,50D",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Activo",
        fotografia: ""
    },
    {
        idLentes: 2,
        idProducto: 2,
        nombre: "Lente GR",
        marca: "Optel",
        modelo: "Gas permeable",
        color: "Azul",
        queratometria: "45,30D",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Activo",
        fotografia: ""

    },
    {
        idLentes: 3,
        idProducto: 3,
        nombre: "Lente blando",
        marca: "Optel",
        modelo: "PMMA",
        color: "Verde",
        queratometria: "46,70D",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Inactivo",
        fotografia: ""
    }
];


export function inicializarLentesConct()
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
    for (let i = 0; i < lentes.length; i++)
    {
        //Vamos generando el contenido de la tabla dinamicamente:
        contenido = contenido + '<tr>' +
                '<td>' + lentes[i].nombre + '</td>' +
                '<td>' + lentes[i].marca + '</td>' +
                '<td>' + lentes[i].modelo + '</td>' +
                '<td>' + lentes[i].precioCompra + '</td>' +
                '<td>' + lentes[i].precioVenta + '</td>' +
                '<td>' + lentes[i].existencias + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleLentes(' +
                lentes[i].idLentes + ');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyLentesC').innerHTML = contenido;
}
//Muestra y oculta el detalle del Lente de contacto
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

export function mostrarDetalleLentes(idLentes)
{
    let i = -1;

    //Buscamos la posicion del lente de contacto
    i = buscarPosicionPorId(idLentes);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario

        limpiarFormularioDetalle();

        //Llenamos el formulario con los datos de los Lentes de contacto

        document.getElementById("txtIdLenteC").value = lentes[i].idLentes;
        document.getElementById("txtCodigoProducto").value = lentes[i].idProducto;
        document.getElementById("txtNombre").value = lentes[i].nombre;
        document.getElementById("txtMarca").value = lentes[i].marca;
        document.getElementById("txtModelo").value = lentes[i].modelo;
        document.getElementById("txtcolorLenteContacto").value = lentes[i].color;
        document.getElementById("txtQueratometria").value = lentes[i].queratometria;
        document.getElementById("txtPrecioCompraL").value = lentes[i].precioCompra;
        document.getElementById("txtPrecioVentaL").value = lentes[i].precioVenta;
        document.getElementById("txtExistenciasL").value = lentes[i].existencias;





    } else 
        alert('Lentes de contacto no encontrado.');

    //Mostramos el formulario que llenamos previamente
    setDetalleVisible(true);
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtIdLenteC").value = "";
    document.getElementById("txtCodigoProducto").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtcolorLenteContacto").value = "";
    document.getElementById("txtQueratometria").value = "";
    document.getElementById("txtPrecioCompraL").value = "";
    document.getElementById("txtPrecioVentaL").value = "";
    document.getElementById("txtExistenciasL").value = "";
    document.getElementById("selTipoL").value = "Tipo lente";
}
//Buscar la posicion de lente de contacto dentro del arreglo de lentes de contacto con base en el id
function buscarPosicionPorId(id)
{
    for (let i = 0;
    i < lentes.length; i++)
    {
        //Comparamos si el ID del lente de contacto en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (lentes[i].idLentes === id) {
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
    let lente = {

        idLentes: 0,
        idProducto:0,
        nombre: document.getElementById("txtNombre").value,
        marca: document.getElementById("txtMarca").value,
        modelo: document.getElementById("txtModelo").value,
        color: document.getElementById("txtcolorLenteContacto").value,
        queratometria: document.getElementById("txtQueratometria").value,
        precioCompra: parseFloat(document.getElementById("txtPrecioCompraL").value),
        precioVenta: parseFloat(document.getElementById("txtPrecioVentaL").value),
        existencias: parseFloat(document.getElementById("txtExistenciasL").value)

    };
    //Revisamos si hay algun valor en la caja de texto del id de lente de contacto:
    //El trim quita espacios a la derecha e izquierda
    if (document.getElementById("txtIdLenteC").value.trim() === '')
    {
        //generamos un id para los lentes a partir de los milisegundos de la fecha actual
        lente.idLentes = Date.now();
        lente.idProducto = Date.now()+1;

        //Insertamos el empleado al final del arreglo
        lentes[lentes.length] = lente;

        //Colocamos los id generados en las cajas de texto para evitar duplicados
        document.getElementById("txtIdLenteC").value = lente.idLentes;
        document.getElementById("txtCodigoProducto").value= lente.codigoBarra;

        //Mostramos un mensaje al usuario
        mandarConfirmacionGuardar();

        //Actualizamos la tabla
        fillTable();
    } else
    {
        //Si el accesorio ya tiene un id, lo tomamos para actualizar sus datos:
        lente.idLentes = parseInt(document.getElementById("txtIdLenteC").value);

        //Buscamos la posición del objeto:
        pos = buscarPosicionPorId(lente.idLentes);

        //Revisamos que tengamos una posición valida:
        if (pos >= 0)
        {
            //Remplazamos el objeto en la posición encontrada:
            lentes[pos] = lente;

            //Mostramos un mensaje al usuario:
            mandarConfirmacionGuardar();

            //Actualizamos la tabla
            fillTable();
        } else
        {
            alert("Error: Lente de contacto no Encontrado.");
        }
    }
}

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
            if (document.getElementById("txtIdLenteC").value.trim() !== "")
            {
                pos = buscarPosicionPorId(parseInt(document.getElementById("txtIdLenteC").value));

                if (pos >= 0)
                {
                    lentes.splice(pos, 1);

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




