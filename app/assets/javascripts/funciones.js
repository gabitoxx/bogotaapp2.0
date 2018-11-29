function whySignUp() {
	var m = "Número de Celular: Este será el dispositivo desde el cual usarás la app. "
			+ "Este número servirá para identificarte junto con tu documento de identidad."
			+ "\n\nCédula de identidad: dada la iniciativa de FedeSoft para esta aplicación,"
			+ "podemos validar la autenticidad de tu nacionalidad gracias a las API's del Gobierno Nacional de Colombia, de esta manera sabremos que de forma inequívoca, eres Colombian@. Y así como te solicitan tu cédula en almacenes y supermercados para validar tu identidad, de la misma manera hacemos nosotros."
			+ "\n\nPero descuida, no solictaremos más datos de tu documento de identidad ni pagos monetarios algunos por el hecho de tener tu cuenta.";
	alert(m);
}
function wrongName(){
	var m = "Nuestro servicio utiliza API's avaladas por el Gobierno Nacional de Colombia para obtener única y exclusivamente tu nombre, con el fin de validar tu nacionalidad. Si no coincide tu nombre con tu documento, te sugerimos acercarte a la Registraduría Nacional y validar tu información.";
	alert(m);	
}

function config(message){
	var m = "Aquí podrá establecer valores por defecto, cambiar imgen de fondo, su Perfil e incluso hacer un 'Trasteo' de datos"
			+ "\n\nTrasteo = Mudanza de localidad, la cual estará restringida a [ 1 mudanza al mes ], no será tan rápido el proceso de cambio de Localidad para evitar que las personas salten de una a la otra con facilidad.";
	;
	//alert(m);
	
	$('#modalSettings-message').text( "" + message );
	$('#modalSettings').modal('show');
}

function mostrar1punto(message){
	$("#bogotappCoin").css({ visibility: "visible" });
	$('#modalApp-message').text( "" + message );
	$('#modalApp').modal('show');
}

function alertaCambioLocalidad(){
	var x = confirm("Recuerda que la Mudanza de Localidad esta restringida a [ 1 mudanza al mes ]. Si confirmas que te cambias de Localidad, a partir de MAÑANA los Mensajes, Anuncios, Denuncias y Eventos serán de la nueva Localidad que has elegido. \n\n ¿Deseas conitnuar con el Trasteo?");
	console.log("desicion",x);
	if ( x ){
		alert("Listo, te has mudado de Localidad. Tu nueva data llegará a partir de Mañana");
	} else {
		alert("Descuida, no ha pasado nada.");
	}
}