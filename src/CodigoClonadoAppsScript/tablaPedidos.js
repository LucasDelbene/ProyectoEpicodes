//EN EL CASO QUE HAGA UN CAMBIO, PARA PODER ACTUALIZARLO TENGO QUE PONER clasp push EN LA CONSOLA DENTRO DE LA CARPETA CodigoClonadoAppsScript//

function doGet(){
  const html = HtmlService.createTemplateFromFile("primeraSeccion")
  .evaluate();
  return html;
}

function getData(){
  const SS = SpreadsheetApp.getActiveSpreadsheet();
  const sheetPedidos = SS.getSheetByName("Pedidos");
  const dataPedidos = sheetPedidos.getDataRange().getDisplayValues();
  dataPedidos.shift();

  return dataPedidos;
}
