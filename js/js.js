
var form = document.getElementById("formulario");
var nick = document.getElementById("nick");
var ds = document.getElementById("ds");
var aoe2 = document.getElementById("aoe2");
var steam = document.getElementById("steam");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const nicknameValue = nick.value.trim();
	const dsValue = ds.value.trim();

    if (!checkDiscord(dsValue)) {
		alert('El usuario de discord debe ser del formato user#1234');
    }
    else{
        alert("Los datos han sido enviados correctamente!");
    }
}

function checkDiscord(user) {
    var cumple = true;
    var separador = false;
    for(var i = 0; i < user.length; i++){
        if (user.charAt(i) == '#'){
            separador = true;
        }
    }
    if (!separador){
        return false;
    }
    var username = user.split('#')[0];
    if ( username == '' ) {
        return false;
    }
    var numero = user.split('#')[1];
    if (numero.length != 4) {
        cumple = false;
    }
    for(var j = 0; j < 4; j++){
        if (isNaN(numero.charAt(j))){
            cumple = false;
        }
    }
    return cumple;
}
