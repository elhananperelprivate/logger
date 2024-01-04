import { InjectionToken } from '@angular/core';
import { LoggerConfig } from './types';

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('LOGGER_CONFIG');
