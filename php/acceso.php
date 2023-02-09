<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/formulario.css">
    <title>ACCESO</title>
</head>

<body>
    <div class="contenedor">
		<div class="columna-izquierda">
			<div class="registro activo" id="registro">
				<div class="header">
					<h1>INICIA SESION EN EPICODES</h1>
				</div>
		
				<form class="formulario" id="formulario">
					<label for="nombre">USUARIO</label>
					<div class="contenedor-input">
						<input type="text" id="nombre" name="nombre">
					</div>
		
					<label for="correo">CONTRASEÑA</label>
					<div class="contenedor-input">
						<input type="text" id="correo" name="correo">
					</div>
					
					<div class="contenedor-boton">
						<button type="submit">INICIAR SESION</button>
					</div>
				</form>
			</div>
		</div>

		<div class="columna-derecha">

		</div>
</body>
</html>