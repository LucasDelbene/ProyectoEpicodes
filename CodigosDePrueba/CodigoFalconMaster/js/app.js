const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();

    //ESCRIBIR FILAS//
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'Nombre': formulario.nombre.value,
                'Correo': formulario.correo.value,
                'Telefono': formulario.telefono.value
            })
        });
     
        const contenido = await respuesta.json();
        console.log(contenido); 
    }catch{
        console.log(error);
    }

    //LEER FILAS//
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2');
     
        const contenido = await respuesta.json();
        console.log(contenido); 
    }catch{
        console.log(error);
    }
    

    //ELIMINAR FILAS//
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2/',{ //PARA ELIMINAR UNA FILA TENGO QUE AGREGAR EL NUMERO DE LA FILA DESPUES DEL /, POR EJEMPLO /0,1,2,3
            method:'DELETE'
        });
     
        const contenido = await respuesta.json();
        console.log(contenido); 
    }catch{
        console.log(error);
    }
    

    //ACTUALIZAR FILAS//
    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2/1',{ //PARA ACTUALIZAR UNA FILA TENGO QUE AGREGAR EL NUMERO DE LA FILA DESPUES DEL /, POR EJEMPLO /0,1,2,3
            method:'PATCH',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //PARA ACTUALIZAR, TENGO QUE PONER EL NOMBRE DE LA COLUMNA y EL VALOR QUE QUIERA ACTUALIZAR
                'Correo': 'toto@gmail.com'
            })
        });
     
        const contenido = await respuesta.json();
        console.log(contenido); 
    }catch{
        console.log(error);
    }
    

    registro.classList.remove('activo');
    exito.classList.add('activo'); 
})
