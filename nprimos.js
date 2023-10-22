let numeros_primos = [];

for (let n = 3; n <= 100; n++) {
    let esPrimo = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        numeros_primos.push(n);
    }
}

console.log('Son números primos:', numeros_primos);
