import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

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
    if (a %2 ==0)
    return true;
  }
// Función para verificar si una cadena es un palíndromo
// Función para calcular el factorial de un número
}
