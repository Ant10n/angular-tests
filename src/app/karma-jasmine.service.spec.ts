import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(2, 3);
    expect(resultado).toBe(-1);
  });

  it('debería restar números negativos correctamente', () => {
    const resultado = service.restar(-7, -5);
    expect(resultado).toBe(-2);
  });

  it('debería restar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(10, -5);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it('debería multiplicar números negativos correctamente', () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(10, -5);
    expect(resultado).toBe(-50);
  });
  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(6, 3);
    expect(resultado).toBe(2);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-15, -3);
    expect(resultado).toBe(5);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);
  });
  it('debería comprobar si un número es par', () => {
    const resultado = service.par(10);
    expect(resultado).toBeTruthy;
  });
  it('debería comprobar si un número es par', () => {
    const resultado = service.par(8);
    expect(resultado).toBeTruthy;
  });
  it('debería comprobar si un número es par', () => {
    const resultado = service.par(2);
    expect(resultado).toBeTruthy;
  });
  

});
