var calificaciones = [];
var suma = 0;
var promedio;

process.stdout.write("Introduce las cuatro calificaciones, una por una:\n");

process.stdin.on('data', function(data) {
    var calificacion = parseFloat(data.toString().trim());
    calificaciones.push(calificacion);
    suma += calificacion;

    if (calificaciones.length === 4) {
        promedio = suma / 4;
        process.stdout.write("El promedio es: " + promedio.toFixed(2) + "\n");
        process.exit();
    } else {
        process.stdout.write("Introduce otra calificación:\n");
    }
});
