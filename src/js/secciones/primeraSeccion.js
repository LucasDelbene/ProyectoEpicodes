//MUESTRO LOS DATOS DE GOOGLE SHEETS EN UNA TABLA//
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








