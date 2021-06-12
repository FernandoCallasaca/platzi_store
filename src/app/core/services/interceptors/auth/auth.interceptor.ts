// antes de empezar cambiamos el nombre de nuestro archivo de "service" a "interceptor"
// también recordar que luego de hacer este código modificaremos el "app.module.ts"

import { Injectable } from '@angular/core';
// Nos traemos "HttpInterceptor" y lo implementamos(implements interceptor)
// HttpRequest: tipo para lo que vamos a interceptar y no importa mucho la data <any>
// HttpHandler: el tipado para enviar la respuesta luego de interceptarlo
// HttpEvent: tipo del Observable de respuesta <any>
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

// Para saber si hay un token traemos el servicio que tiene el token
import { TokenService } from './../../token/token.service';

// @Injectable({
//   providedIn: 'root' // Esto hace que todos los que tengan la banderita "root" esten injectados en el scope global
// })

// Y yo no quiero que esté injectado en el scope global(alcance global)
// Yo mismo quiero injectarlo manualmente
// Porque los inteceptores tienen una forma de tratarse
@Injectable()
export class AuthInterceptor implements HttpInterceptor { // cambiamos el nombre de la clase

  constructor(
    private token: TokenService,
  ) { }

  // (implements HttpInterceptor) - Este método nos obliga a implementar en método "intercept"
  // Y este método tiene una lógica
  // request: lo que vamos a interceptar
  // next: una vez interceptado le decimos que continue
  // Este devuelve un Observable de tipo "HttpEvent"
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Aquí necesitamos el request que está llegando
    // Y a ese request le agregamos el token
    // Pero la pregunta es = si hay token lo agregamos, si no, no lo agregamos
    request = this.addToken(request);
    // ahora retornamos el request modificado o no modificado
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    // aquí sería el token que obtenemos al momento de logearnos
    // lo que el proceso de authentication nos generó
    // const token = '123';
    const token = this.token.getToken();
    console.log(token);
    // si hay token entonces lo agregamos al request
    if (token) {
      // si es que hay token entonces modificamos el request
      // primero clonamos porque ya tiene todos por ejemplo
      // sus atributos hasta el momento son (url, path, body, etc) y solo  tenemos que agregar el token
      request = request.clone({
        // seteamos los Headers y le enviamos el token
        setHeaders: {
          token // Aquí le damos una variable llamada "token"
          // Pueden haber otras variables
          // Por ejemplo una que se llama authentication en realidad es como
          // el backend lo reciba si recibe "token" o tambien "authentication" y
          // ahí hay varios tipos(basic, ... )

          // pero aquí solo lo dejamos plano y solo enviamos el "token"
        }
      });
      // luego de hacer esa modificación retornamos el request
      return request;
    }
    // Si no hay token entonces no agregamos nada, solo devolvemos el mismo request
    // pero podríamos decirle literalmente que no hay token y tienes que ponerlo o que genera un error, etc

    // aquí podriamos decirle que si no hay token que no pueda hacer la petición
    // o esperar a que se logee llamando al servicio de auth donde se encuentra el login
    // o simplemente redireccionarlo importando Router de @angular/router
    // luego este lo implementamos en el constructor y entramos a su propiedad navigate([''])
    // para que no haga nada hasta que haya un token y cuando haya que siga realizando peticiones
    // con total normalidad y con todos los permisos
    return request;
  }
}
