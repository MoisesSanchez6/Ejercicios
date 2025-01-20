var edad;
var decadas, lustros, anios, meses, semanas, dias, horas, minutos;

process.stdout.write("Introduce tu edad:\n");
process.stdin.on('data', function(data) {
    edad = parseInt(data.toString().trim());
    decadas = edad / 10;
    lustros = edad / 5;
    anios = edad;
    meses = anios * 12;
    semanas = anios * 52;
    dias = anios * 365;
    horas = dias * 24;
    minutos = horas * 60;

    process.stdout.write("Has vivido:\n");
    process.stdout.write(decadas.toFixed(2) + " décadas\n");
    process.stdout.write(lustros.toFixed(2) + " lustros\n");
    process.stdout.write(anios + " años\n");
    process.stdout.write(meses + " meses\n");
    process.stdout.write(semanas + " semanas\n");
    process.stdout.write(dias + " días\n");
    process.stdout.write(horas + " horas\n");
    process.stdout.write(minutos + " minutos\n");
    process.exit();
});
