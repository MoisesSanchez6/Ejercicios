let nombre;
process.stdout.write("¿Cuál es tu nombre? \n");
process.stdin.on('data', function(data) {
    nombre = data.toString().trim();
    process.stdout.write("¡Hola " + nombre + ", bienvenido! \n");
    process.exit();
});