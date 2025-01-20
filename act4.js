var centimetros;
const pulgada = 2.54;
var pulgadas;

process.stdout.write("Introduce el número de centímetros:\n");
process.stdin.on('data', function(data) {
    centimetros = parseFloat(data.toString().trim());
    pulgadas = centimetros / pulgada;
    process.stdout.write("El número de pulgadas es: " + pulgadas.toFixed(2) + "\n");
    process.exit();
});
