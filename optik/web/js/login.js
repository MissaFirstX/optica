/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function login() {
    let user = document.getElementById("txtUser").value;
    let password = document.getElementById("txtPassword").value;

    if (user === "admin322" && password === "optikdtc") {
        window.location.replace('admin/index.html');
    } else {
        mandarError();
        document.getElementById("txtUser").value = "";
        document.getElementById("txtPassword").value = "";
    }
}

function logout() {
    window.location.replace('../index.html');
}

function mandarError() {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: 'Datos Incorrectos',
        showConfirmButton: false,
        timer: 2000
    });
}
