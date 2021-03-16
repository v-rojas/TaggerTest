import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from 'src/app/shared/modals/dialog-alert/dialog-alert.component';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private dialog: MatDialog
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // event return all info about http request
                    console.log('INFO INTERCEPTOR', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log('ERROR INTERCEPTOR', error);
                switch (error.status) {
                    case 404:
                        this.alertDialog('Ooops!!!', 'No se ha podido encontrar la página. Por favor, verifique la ruta.');
                        break;
                    case 405:
                        this.alertDialog('Ooops!!!', 'No se ha podido encontrar la página. Por favor, verifique la ruta.');
                        break;
                    case 401:
                        this.alertDialog('No autorizado', 'Usted no tiene los permisos para solicitar este requerimiento.');
                        break;
                    case 500:
                        this.alertDialog('Error en el Servidor', 'No se ha podido obtener respuesta del servidor. Por favor, intente más tarde.');
                        break;
                    case 403:
                        this.alertDialog('Acceso prohibido', 'Usted no tiene los permisos para solicitar este requerimiento.');
                        break;
                    default:
                        break;
                }
                return throwError(error);
            }));
    }

    alertDialog(name: string, content: string) {
        this.dialog.open(DialogAlertComponent, {
          data: {
            name,
            content,
            buttons: false
          }
        });
      }
}
