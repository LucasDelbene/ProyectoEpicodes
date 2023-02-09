<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="icon" href="../img/logoEpicodes.ico">
    <link rel="stylesheet" href="../css/index.css">
    <title>EPICODES</title>
</head>

<body>
	<header>
		
	</header>

	<div class="contenedor">
		<div class="columna-izquierda">
			<div class="registro activo" id="registro">
				<div class="header">
					<h1>INICIAR SESION EN EPICODES</h1>
				</div>
		
				<form class="formulario" id="formulario">
					<label for="usuario">USUARIO</label>
					<div class="contenedor-input">
						<input type="text" id="usuario" name="usuario">
					</div>
		
					<label for="contraseña">CONTRASEÑA</label>
					<div class="contenedor-input">
						<span class="iconoContraseña"><i class="fa-solid fa-eye-slash"></i></span>
						<input type="password" id="contraseña" name="contraseña"> 
					</div>
					
					<div class="contenedor-boton">
						<button type="submit">INICIAR SESION</button>
					</div>
				</form>
			</div>
		</div>

		<div class="columna-derecha"></div>

		<script src="../js/index.js"></script>
	</div>
</body>
</html>
