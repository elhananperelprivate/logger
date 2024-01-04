import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class MyHttpInterceptor implements MyHttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.loggerService.log(error.message, '');
          return throwError(() => {
            return new Error(
              `[TokenInterceptor.intercept] HTTP error: [${error?.status}] ${error?.message}`
            );
          });
        }
        return throwError(() => {
          this.loggerService.log(error.message, '');
          return new Error(
            `[TokenInterceptor.intercept] Error: [${error?.status}] ${error?.message}`
          );
        });
      })
    );
  }
}
