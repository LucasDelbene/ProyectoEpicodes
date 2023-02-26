let btnSubmitDatosSheet = document.querySelector(".btnSubmitDatosSheet");
let cuadrado = document.querySelector('.cuadrado')

btnSubmitDatosSheet.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2"
    );
    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }
})








