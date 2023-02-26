function doGet(){
    const html = HtmlService.createTemplateFromFile("index")
    .evaluate();
    return html;
}

function getData(){
    const SS = SpreadsheetApp.getActiveSpreadsheet();
    const sheetTabla = SS.getSheetByName("Registros");
    const dataTabla = sheetTabla.getDataRange().getDisplayValues();
    dataTabla.shift();

    return dataTabla;
}
