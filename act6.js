var horaActual;
var horasAdicionales;
var nuevaHora;

process.stdout.write("Introduce la hora actual (0-23):\n");
process.stdin.on('data', function(data) {
    if (!horaActual) {
        horaActual = parseInt(data.toString().trim());
        process.stdout.write("Introduce el número de horas adicionales:\n");
    } else {
        horasAdicionales = parseInt(data.toString().trim());
        nuevaHora = (horaActual + horasAdicionales) % 24;
        process.stdout.write("La hora será: " + nuevaHora + ":00\n");
        process.exit();
    }
});
