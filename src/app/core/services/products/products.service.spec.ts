// Pruebas a providers y servicios http
// Lo primero que tenemos que hacer para hacer pruebas a nuestros servicios http
// es mockear(darle datos emulados de la respuesta) y ver que en tu controler viene esa respuesta
// y por qué lo emulamos y por qué no enviamos una petición real?
// es porque enviar una petición real es mala práctica porque las pruebas
// normalmente se ejecutan en muchos entornos, muchas veces y estaríamos
// literalmente enviando y sobrecargando nuestro servidor

// por eso no es buena práctica pegarle directamente a una api
// y para eso están las pruebas de integración(end to end)
// lo que se hace es que respecto a una data enviada que lo que se supene va a retornar el backend
// yo o mi método se está comportando bien
// y todo eso se hace haciendo una emulación -- relamente no la va hacer
// pero si vamos a poder evaluar cosas que la url esté correcto que el body esté correcto
// que la petición esté correcta(get, post, etc) o que simplemente nuestro método
// se comporte de la forma que esperamos

import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

// 2. Importamos de angular common http testing
// HttpClientTestingModule: Cliente para probar y mockear
// HttpTestingController: Cliente de Testeo
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

describe('ProductsService', () => {
  // 3. Creamos variables globales para manejar lo importado
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  // INSTRUCCIÓN beforeEach: Significa algo que va a ejecutar antes de cada prueba
  // entonces debe ejecutar un módulo para que angular haga esa pruebas
  // 1. Lo primero es decirle que a nuestro módulo "configureTestingModule" que necesitamos un mock http
  beforeEach(() => {
    TestBed.configureTestingModule({
      // este modulo tiene que ejecutarse antes para que lo prepare a ejecutar testing http
      imports: [HttpClientTestingModule],
    });
    // ahora obtenemos los mocks de prueba - referencias
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ProductsService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // AHORA HACEMOS NUESTRAS PROPIAS PRUEBAS PARA NUESTRO MÉTODOS
  // en pruebas se utiliza el patrón o el mantra de las 3 a(AAA)
  // arrange(preparar), act(actuar), assert(resolver nuestra hipótesis y ver que funciona)

  // "describe" solo agrupa y el que ejecuta es la sentencia "it"
  describe('test por getAllProducts', () => {
    it('should return products', () => {
      // arrange = emular o mockear los datos que espero que me devuelva el endpoint ya que no será una real sino con datos de prueba
      // - creamos una const para los datos esperados que nos retorne
      const expectData = [
        {
          id: '1',
          image: 'img/img.jpg',
          title: 'asas',
          price: 1212,
          description: 'asas',
        },
        {
          id: '2',
          image: 'img/img.jpg',
          title: 'dfdfdf',
          price: 1212,
          description: 'asas',
        },
      ];
      let dataError: any;
      let dataResponse: any;
      // luego de tener la data preparada ahora empezar a actuar(act)
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      // hipótesis
      // esperamos cuando le haga un request a esa url lo ejecute y haga mock de los datos
      const req = httpTestingController.expectOne(
        `${environment.urlApi}/products`
      );
      // cuando haga esa petición que nos retorne esa data
      req.flush(expectData);
      // Ahora nos falta hacer la (assert)
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
