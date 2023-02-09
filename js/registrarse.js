//MUESTRO y OCULTO CONTRASEÑA DEL INPUT//
const iconoContraseña = document.querySelector('.iconoContraseña');
iconoContraseña.addEventListener('click', function(){
    if(this.nextElementSibling.type === 'password'){
        this.nextElementSibling.type = 'text'; 
    }else{
        this.nextElementSibling.type = 'password'; 
    }
})