<?php
if (isset($_POST['correo']))
{
	error_reporting(0);
	$nombre = $_POST['correo'];

	$header = "From: " . $nombre; 
	$cadena = $_POST['mensaje'];
	$telefono= $_POST['telefono'];


	$mensaje = $cadena . ". Firma: ". $nombre . ", tel: ".$telefono . " \r\n";
	$mensaje .= "Enviado el " . date('d/m/Y', time());

	$para = 'tucasahospedaje@gmail.com';
	$asunto = 'Nueva consulta vía Web';
	mail($para, $asunto, utf8_decode($mensaje), $header);
	header("Location: index.html");	
}
else
{
	echo "Hubo un error, por favor intente de nuevo";
}

?>