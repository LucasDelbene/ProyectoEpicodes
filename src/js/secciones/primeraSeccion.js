// URL DE CONEXION A LA BASE DE DATOS EN GOOGLE SHEETS https://sheet.best/api/sheets/e1fa69e0-a796-4ef6-8120-3172f47c1ff2 //

const formulario = document.getElementById('tablaPedidos');

tablaPedidos.addEventListener('submit', async(e) =>{
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
                'Consola': tablaPedidos.consola.value,
                'Precio': tablaPedidos.precio.value,
                'Ventas': tablaPedidos.ventas.value,
                'Fecha': tablaPedidos.fecha.value
            })
        });
     
        const contenido = await respuesta.json();
        console.log(contenido); 
    }catch{
        console.log(error);
    }
})

//FUNCION PARA RECARGAR PAGINA y QUE SE CARGUEN LOS DATOS//
window.addEventListener("load", lookforData);

function lookforData(){
  google.script.run
  .withSuccessHandler(pedidos=>{
    let tablaBody = document.getElementById("tbodyPedidos");
    var template = document.getElementById("rowTemplate");
    var templateContenido = template.content;

    pedidos.forEach(pedido=>{
      const tr = templateContenido.cloneNode(true);

      const columnaConsola = tr.querySelector(".templateConsola");
      const columnaArticulo = tr.querySelector(".templatePrecio");
      const columnaFecha = tr.querySelector(".templateVentas");
      const columnaDescripcion = tr.querySelector(".templateFecha");

      columnaConsola.textContent = pedido[0];
      columnaArticulo.textContent = pedido[1];
      columnaFecha.textContent = pedido[2];
      columnaDescripcion.textContent = pedido[3];

      tablaBody.appendChild(tr);
    })
  })
  .getData();
}

//FUNCIONES doGet() y getData()//
function doGet(){
    const html = HtmlService.createTemplateFromFile("primeraSeccion") //NOMBRE DEL ARCHIVO HTML DONDE SE REALIZARA DICHA FUNCION
    .evaluate();
    return html;
}
  
function getData(){
    const SS = SpreadsheetApp.getActiveSpreadsheet();
    const sheetPedidos = SS.getSheetByName("Pedidos");  //NOMBRE DE LA HOJA EN GOOGLE SHEETS
    const dataPedidos = sheetPedidos.getDataRange().getDisplayValues();
    dataPedidos.shift();
  
    return dataPedidos;
}






