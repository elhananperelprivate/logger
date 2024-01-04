import { ApplicationConfig, EnvironmentProviders, ErrorHandler, importProvidersFrom, Provider } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerService, MyErrorHandler } from '@logger/shared/logger';
import { MyHttpInterceptor } from '@logger/shared/logger';


const providers: Array<Provider | EnvironmentProviders> = [

  {
    provide: HTTP_INTERCEPTORS,
    deps: [LoggerService],
    useClass: MyHttpInterceptor,
  },
  {
    provide: ErrorHandler,
    deps: [LoggerService],
    useClass: MyErrorHandler,
  },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), providers],
};
