import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class KarmaJasmineService {
  constructor() {}

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }
  // Función para verificar si un número es par
  par(a: number): boolean {
    return a % 2 === 0;
  }
  // Función para verificar si una cadena es un palíndromo

  palindromo(cadena: string): boolean {
    return cadena === cadena.split("").reverse().join("");
  }

  // Función para calcular el factorial de un número
  factorial(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
//   Función para verificar si un número es positivo
positivo(numero: number): boolean{
  if(numero >0 ) return true;
}
// Función para obtener el número de elementos en un array
numeroDeElementosDeUnArray(array: any[]): number{
  return array.length;
}
 
// Función para verificar si una cadena contiene unsubstring
stringContieneSubstring(cadena: string, subcadena: string): boolean {
  return cadena.includes(subcadena);
}

}
