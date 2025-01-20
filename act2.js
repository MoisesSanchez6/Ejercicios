var radio;
var perimetro;
var area;

process.stdout.write("Introduce el valor del radio: \n");
process.stdin.on('data', function(data) {
    radio = parseFloat(data.toString().trim());
    perimetro = 2 * Math.PI * radio;
    area = Math.PI * radio * radio;
    process.stdout.write("El perímetro es: " + perimetro.toFixed(2) + "\n");
    process.stdout.write("El área es: " + area.toFixed(2) + "\n");
    process.exit();
});
