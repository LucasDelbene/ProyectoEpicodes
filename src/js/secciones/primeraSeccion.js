//CODIGO QUE ESTOY PROBANDO//
let conexionURL = 'https://sheet.best/api/sheets/0df03a9f-7630-47d5-a648-7f815358d854'
fetch(conexionURL)
    .then(response => response.json())
    .then(data => mostrarPedidos(data))
    .catch(error => console.log(error))

const mostrarPedidos = (data)=>{
    console.log(data)

    let body = ''
    for (let i=0; i<data.length; i++){
        body += `<tr> <td>${data[i].Consola}</td> <td>${data[i].Precio}</td> <td>${data[i].Ventas}</td> <td>${data[i].Fecha}</td> </tr>`
    }
    document.getElementById('tbodyPedidos').innerHTML = body
}   




//CODIGO ANTERIOR//
/*
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
*/






