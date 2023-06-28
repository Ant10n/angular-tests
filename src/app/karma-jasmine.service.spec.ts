import { TestBed } from "@angular/core/testing";
import { KarmaJasmineService } from "./karma-jasmine.service";

describe("KarmaJasmineService", () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("debería sumar dos números correctamente", () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it("debería sumar números negativos correctamente", () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it("debería sumar un número positivo y un número negativo correctamente", () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it("debería restar dos números correctamente", () => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it("debería restar números negativos correctamente", () => {
    const resultado = service.restar(-7, -5);
    expect(resultado).toBe(-2);
  });

  it("debería restar un número positivo y un número negativo correctamente", () => {
    const resultado = service.restar(10, -5);
    expect(resultado).toBe(15);
  });

  it("debería multiplicar dos números correctamente", () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it("debería multiplicar números negativos correctamente", () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it("debería multiplicar un número positivo y un número negativo correctamente", () => {
    const resultado = service.multiplicar(10, -5);
    expect(resultado).toBe(-50);
  });
  it("debería dividir dos números correctamente", () => {
    const resultado = service.dividir(6, 3);
    expect(resultado).toBe(2);
  });

  it("debería dividir números negativos correctamente", () => {
    const resultado = service.dividir(-15, -3);
    expect(resultado).toBe(5);
  });

  it("debería dividir un número positivo y un número negativo correctamente", () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);
  });
  it("debería comprobar si un número es par", () => {
    const resultado = service.par(10);
    expect(resultado).toBeTruthy;
  });
  it("debería comprobar si un número es par", () => {
    const resultado = service.par(8);
    expect(resultado).toBeTruthy;
  });
  it("debería comprobar si un número es par", () => {
    const resultado = service.par(2);
    expect(resultado).toBeTruthy;
  });

  it("debería comprobar si un string es un palíndromo", () => {
    const resultado = service.palindromo("radar");
    expect(resultado).toBeTruthy;
  });

  it("debería comprobar si un string es un palíndromo", () => {
    const resultado = service.palindromo("somos");
    expect(resultado).toBeTruthy;
  });

  it("debería comprobar si un string es un palíndromo", () => {
    const resultado = service.palindromo("reconocer");
    expect(resultado).toBeTruthy;
  });
  it("debería comprobar si un numero es factorial", () => {
    const resultado = service.factorial(5);
    expect(resultado).toBe(120);
  });
  it("debería comprobar si un numero es factorial", () => {
    const resultado = service.factorial(10);
    expect(resultado).toBe(3628800);
  });
  it("debería comprobar si un numero es factorial", () => {
    const resultado = service.factorial(8);
    expect(resultado).toBe(40320);
  });
  it("debería comprobar si un numero es positivo", () => {
    const resultado = service.positivo(8);
    expect(resultado).toBeTruthy;
  });
  it("debería comprobar si un numero es positivo", () => {
    const resultado = service.positivo(-3);
    expect(resultado).toBeFalsy;
  });
  it("debería comprobar si un numero es positivo", () => {
    const resultado = service.positivo(0);
    expect(resultado).toBeFalsy;
  });
  it("debería comprobar la cantidad e elementos de un array", ()=> {
    const resultado = service.numeroDeElementosDeUnArray([1,2,3]);
    expect(resultado).toBe(3);
  });
  it("debería comprobar la cantidad e elementos de un array", ()=> {
    const resultado = service.numeroDeElementosDeUnArray([1,2,3,2,1]);
    expect(resultado).toBe(5);
  });
  it("debería comprobar la cantidad e elementos de un array", ()=> {
    const resultado = service.numeroDeElementosDeUnArray([9,3]);
    expect(resultado).toBe(2);
  });
  it("debería comprobar que una cadena incluye una subcadena", () => {
    const resultado = service.stringContieneSubstring("hola buenos días", "buen");
    expect(resultado).toBeTruthy;
  });
  it("debería comprobar que una cadena incluye una subcadena", () => {
    const resultado = service.stringContieneSubstring("hola buenos días", "Patata");
    expect(resultado).toBeFalsy;
  });
  it("debería comprobar que una cadena incluye una subcadena", () => {
    const resultado = service.stringContieneSubstring("hola buenos días", "bune");
    expect(resultado).toBeFalsy;
  });
  
  

});
