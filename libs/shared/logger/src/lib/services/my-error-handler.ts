import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  constructor(private logger: LoggerService) {}

  handleError(error: any) {
    this.logger.log('-- Global error:' + error?.message, '');
  }
}
