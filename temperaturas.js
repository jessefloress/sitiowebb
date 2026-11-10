
function convertir() {

    // Obtener la temperatura ingresada
    let temperatura = document.getElementById("temperatura").value;

    // Obtener el tipo de conversión
    let conversion = document.getElementById("conversion").value;

    // Validar que el campo no esté vacío
    if (temperatura === "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }

    // Convertir el valor a número
    temperatura = parseFloat(temperatura);

    let resultado;
    let mensaje;

    // Realizar la conversión
    if (conversion === "celsius") {

        resultado = (temperatura * 9 / 5) + 32;

        mensaje = temperatura + " °C = " +
                  resultado.toFixed(2) + " °F";

    } else {

        resultado = (temperatura - 32) * 5 / 9;

        mensaje = temperatura + " °F = " +
                  resultado.toFixed(2) + " °C";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = mensaje;
}
