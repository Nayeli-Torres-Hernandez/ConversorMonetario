function consultarPrecioDolar()
{
    $.ajax({
        type: 'GET',
        asyc: true,
        url: "https://api.exchangeratesapi.io/latest",
        data:{
            base: "USD"
        }
    })
            .done(function(data)
    {
        //alert (data.rates.MXN);
        $("#txtPrecioDolar").val(data.rates.MXN);
    });
}
function convertirDolaresEnPesos()
{
    var precioDolar = parseFloat($("#txtPrecioDolar").val());
    var dolares = parseFloat($("#txtDolares2").val());
    var pesos = precioDolar * dolares;
    $("#txtPesos2").val(pesos);
    
}

function convertirPesosEnDolares()
{
    var precioDolar = parseFloat($("#txtPrecioDolar").val());
    var pesos = parseFloat($("#txtPesos1").val());
    var dolares = pesos / precioDolar;
    $("#txtDolares1").val(dolares);
}   