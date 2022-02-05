//desafio 1
for (var i = 1; i <= N; i++) {
    if (i % 2 == 0) {
        print(i + '^2 = ' + i ** 2);
    }
}

//desafio 2
for (var i = 1; i < 10000; i++) {
    if (i % N == 2) print(i);
}

//desafio 3
const frase = "life is not a problem to be solved"

print(frase.substring(0, n).toUpperCase());


//desafio 4
function maxDispositivos(line) {
    var total = 0;
    for (var i = 0; i < line.length; i++) {
        total += line[i] - 1;
    }
    return total + 1;
}

console.log(maxDispositivos(line));

//desafio 5
console.log(line[0] * line[1]);