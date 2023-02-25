formularioRegistro.addEventListener('submit', e => {
  let nombre = formularioRegistro[0].value
  let email = formularioRegistro[1].value
  let password = formularioRegistro[2].value

  localStorage.setItem('nombre', nombre)
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)

  fetch("https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      NRO: formularioRegistro[0].value,
      Email: formularioRegistro[1].value,
      Contraseña: formularioRegistro[2].value,
    }),
  });
}
)


formularioLogin.addEventListener("submit", async (e) => {
  e.preventDefault()
  if (formularioLogin[0].value == localStorage.getItem('email') && formularioLogin[1].value == localStorage.getItem('password')) {
    let containerForm = document.querySelector('.container-form')
    containerForm.classList.add('hidden')
    $signUp.classList.add('hidden')
    $signIn.classList.add('hidden')
    location.href = "https://preentrega1-geist.netlify.app/game/game.html";
  } 
    
 try {
   const resp = await fetch(
     "https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2"
   );
   const contenido = await resp.json();
   console.log(contenido)
   
 } catch (error) {
  console.log(error)
 }
   });