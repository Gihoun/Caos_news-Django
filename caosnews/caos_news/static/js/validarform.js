/*Validacion Formulario de Contacto*/
function va_formulario() {
    var rn = validar_nombre();
    var ra = validar_apellido();
    var re = validar_email();
    var rc = validar_comentario();
    if (rn == true && ra == true && re == true && rc == true) {
        alert("Comentario Enviado!!!")
        return true;
    }
    Swal.fire({
        icon: 'error',
        title: 'Error!!!',
        text: 'Al envia el formulario.'
    })
    return false;
}
/*Validacion Formulario de Registro*/
function validar_reg() {
    var rn = validar_nombre();
    var ra = validar_apellido();
    var re = validar_email();
    var rp = validar_pass();
    var rchk = validar_check();
    if (rchk == true) {
        if (rn == true && ra == true && re == true && rp == true) {
            alert('USUARIO REGISTRADO!!')
            grabar_usuario();
            return true;
        } 
        Swal.fire({
            icon: 'error',
            title: 'Error!!!',
            text: 'Al realizar el registro.'
        })
        return false;
    }
}

function validar_nombre() {
    var name = document.getElementById('txtnombre').value;
    if (!name.match(/^[A-Za-z]+$/)) {
        document.getElementById('nombre_span').innerText = "* Formato invalido(Solo letras)."
        document.getElementById('txtnombre').focus();
        return false;
    }
    document.getElementById('nombre_span').innerText = "*"
    return true;
}
function validar_apellido() {
    var appel = document.getElementById('txtapellido').value;
    if (!appel.match(/^[A-Za-z]+$/)) {
        document.getElementById('apellido_span').innerText = "* Formato invalido(Solo letras)."
        document.getElementById('txtapellido').focus();
        return false;
    }
    document.getElementById('apellido_span').innerText = "*"
    return true;
}
function validar_email() {
    var mail = document.getElementById('txtmail').value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+.)*$/
    if (regex.test(mail)) {
        document.getElementById('mail_span').innerText = "*"
        return true;
    }
    document.getElementById('mail_span').innerText = "* Formato invalido"
    document.getElementById('txtmail').focus();
    return false;
}
function validar_comentario() {
    var com = document.getElementById('txtcoment').value;
    if (com.trim().length == 0) {
        document.getElementById('com_span').innerText = "* No puedes dejar la caja de comentarios vacia"
        document.getElementById('txtcoment').focus();
        return false;
    }
    document.getElementById('com_span').innerText = "*"
    return true;
}
function validar_check() {
    var chk = document.getElementById('check_box').checked;
    if (chk == true) {
        return true;
    } else {
        alert('Debe aceptar los terminos y condiciones.')
        document.getElementById('check_box').focus();
        return false;
    }

}
function validar_pass(){
    var p1 = validar_lenpass();
    var p2 = val_coin();
    if(p1== true && p2==true){
        return true;
    }
    return false;
}
function validar_lenpass(){
    var pass1 = document.getElementById("txtpass1").value;
    if(pass1.trim().length < 6 ){
        document.getElementById("pass_span").innerText = "* Min. 6 caract."
        document.getElementById("txtpass1").focus();
        return false;
    }
    document.getElementById("pass_span").innerText = "*"
    return true
}
function val_coin(){
    var pass1 = document.getElementById("txtpass1").value;
    var pass2 = document.getElementById("txtpass2").value;
    if( pass1 != pass2){
        document.getElementById("pass_span3").innerText = "* Las contraseñas no coinciden."
        document.getElementById("pass_span4").innerText = ""  
        document.getElementById("txtpass2").focus();  
        return false;
    }
    document.getElementById("pass_span3").innerText = "*"
    document.getElementById("pass_span4").innerText = " Válido."
    return true;
}