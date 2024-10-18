// 1. 
function mayorDeTres(a, b, c) {
    return Math.max(a, b, c); 
}

// 2. 
function numerosPares(n) {
    let pares = [];
    for (let i = 0; i < n; i++) {
        pares.push(i * 2); 
    }
    return pares.join(', '); 
}

// 3. 
function serieFibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); 
    }
    return fibonacci.slice(0, n).join(', '); 
}

// 4. 
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

function numerosPrimos(n) {
    let primos = [];
    let num = 2;
    while (primos.length < n) {
        if (esPrimo(num)) {
            primos.push(num); 
        }
        num++;
    }
    return primos.join(', '); 
}

// 5. 
function factorial(n) {
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
}

