//Se declara la variable cm(Cargar Modulo) 
let cm = null;

function cargarModuloEmpleado() {
        //AJAX: Asynchronous
        fetch('empleado/empleado.html')
                .then(respuesta => {
                        //Devolvemos el contenido
                        //de la respuesta en formato
                        //texto:
                        return respuesta.text();
                })
                .then(datos => {

                        //Insertamos el codigo HTML
                        //dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        import('./empleado.js').then(obj => {
                                cm = obj;
                                cm.inicializarEmpleado();
                        });
                });
}

function cargarModuloCliente() {
        //AJAX: Asynchronous
        fetch('cliente/cliente.html')
                .then(respuesta => {
                        //Devolvemos el contenido
                        //de la respuesta en formato
                        //texto:
                        return respuesta.text();
                })
                .then(datos => {

                        //Insertamos el codigo HTML
                        //dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        import('./cliente.js').then(obj => {
                                cm = obj;
                                cm.inicializarCliente();
                        });
                });
}

function cargarModuloAccesorio() {
        //AJAX: Asynchronous
        fetch('producto/accesorio/accesorio.html')
                .then(respuesta => {
                        //Devolvemos el contenido
                        //de la respuesta en formato
                        //texto:
                        return respuesta.text();
                })
                .then(datos => {

                        //Insertamos el codigo HTML
                        //dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        import('./accesorio.js')
                                .then(obj => {
                                        cm = obj;
                                        cm.inicializar();
                                });
                });
}
function cargarModuloArmazon() {
        //AJAX: Asynchronous
        fetch('producto/armazon/armazon.html')
                .then(respuesta => {
                        //Devolvemos el contenido
                        //de la respuesta en formato
                        //texto:
                        return respuesta.text();
                })
                .then(datos => {

                        //Insertamos el codigo HTML
                        //dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        import('./armazon.js')
                                .then(obj => {
                                        cm = obj;
                                        cm.inicializarArmazon();
                                });
                });
}

function cargarModuloSolucion() {
        //AJAX: Asynchronous
        fetch('producto/solucion/solucion.html')
                .then(respuesta => {
                        //Devolvemos el contenido
                        //de la respuesta en formato
                        //texto:
                        return respuesta.text();
                })
                .then(datos => {

                        //Insertamos el codigo HTML
                        //dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        import('./solucion.js')
                                .then(obj => {
                                        cm = obj;
                                        cm.inicializarSol();
                                });
                });
}

function cargarModuloLentes() {
        //alert('hi')
        //AJAX: Asynchronous
        fetch('producto/lente/lentesdecontacto.html')
                .then(respuesta => {

                        //Devolvemos el contenido
                        //de la respuesta en formato
                        //texto:
                        return respuesta.text();
                })
                .then(datos => {

                        //Insertamos el codigo HTML
                        //dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        import('./lentescontacto.js').then(obj => {
                                cm = obj;
                                cm.inicializarLentesConct();
                        });
                });
}

function cerrarModulo() {
        window.location.replace('./index.html');
}