/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function signe(nombre) {
    if (nombre > 0){
        return "positive"
    } else if (nombre < 0) {
        return "negative"
    } else {
        return "nul"
    }
}
console.log (signe (56))

/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */
function nombresPairs(nombre) {
    let tableauResult = [];
    let tableauFinal = 0;
    let nombres = 0;
    while (nombres < nombre.length) {
        if (nombre[nombres] % 2 === 0) {
            tableauResult[tableauFinal] = nombre[nombres];
            tableauFinal++;
        }
        nombres++
    }
    return tableauResult
}
let tabComplet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(nombresPairs(tabComplet))
