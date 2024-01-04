import { ApplicationConfig, EnvironmentProviders, ErrorHandler, Provider } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOGGER_CONFIG, LoggerService, MyErrorHandler, MyHttpInterceptor } from '@logger/shared/logger';

const providers: Array<Provider | EnvironmentProviders> = [
  { provide: LOGGER_CONFIG, useValue: {
      messageFormat: 'remote 1 format: {message}',
      targets: ['console'],
      useQueue: true, // Disable queue for example
      flushTiming: 1000 // Flush every 10 seconds
    }
  },
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
