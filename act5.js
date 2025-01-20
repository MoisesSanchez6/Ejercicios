var catetoA;
var catetoB;
var hipotenusa;

process.stdout.write("Introduce la longitud del primer cateto (a):\n");
process.stdin.on('data', function(data) {
    if (!catetoA) {
        catetoA = parseFloat(data.toString().trim());
        process.stdout.write("Introduce la longitud del segundo cateto (b):\n");
    } else {
        catetoB = parseFloat(data.toString().trim());
        hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
        process.stdout.write("La longitud de la hipotenusa (c) es: " + hipotenusa.toFixed(2) + "\n");
        process.exit();
    }
});
