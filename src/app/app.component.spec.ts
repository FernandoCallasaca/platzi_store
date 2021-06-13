import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// "describe" <- sentencia original
// este archivo sirve para hacer pruebas unitarias
// el que uso por defecto angular es Karma con Jasmine
// en Jasmine si colocamos "xdescribe" decimos que esa prueba unitaria sea escaparlas/ignorada

// Colocar una f en la prueba para que solo te ejecute esa prueba en particular. = "fdescribe"
// En vez de ir poniendo una x en todas.
xdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'platzi-store'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('platzi-store');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('platzi-store app is running!');
  });
});
