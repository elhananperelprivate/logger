import { Inject, Injectable, Optional } from '@angular/core';
import { isDevMode } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { LogEntry, LoggerConfig } from '../types';
import { LOGGER_CONFIG } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  defaultOptions = {
    messageFormat: '{message} - {timestamp}',
    targets: ['console', 'localStorage'],
    useQueue: true,
    flushTiming: 5000,
  };
  private logsSubject = new BehaviorSubject<LogEntry[]>([]);
  private isProduction = !isDevMode();

  constructor(
    @Optional() @Inject(LOGGER_CONFIG) private readonly options: LoggerConfig
  ) {
    this.options = this.options || this.defaultOptions;
    this.logsSubject
      .pipe(
        debounceTime(this.options.flushTiming),
        distinctUntilChanged(),
        tap((logs) => this.flushLogs(logs))
      )
      .subscribe();
  }

  log(message: string, stackTrace?: string): void {
    if (this.isProduction) {
      const logEntry: LogEntry = {
        message,
        stackTrace: stackTrace || '',
        timestamp: Date.now(),
      };
      this.logsSubject.next([...this.logsSubject.value, logEntry]);
    }
  }

  private flushLogs(logs: LogEntry[]): void {
    for (const target of this.options.targets) {
      switch (target) {
        case 'console':
          console.log(logs.map((log) => this.formatLogEntry(log)));
          break;
        case 'localStorage':
          localStorage.setItem('logs', JSON.stringify(logs));
          break;
      }
    }
  }

  private formatLogEntry(logEntry: LogEntry): string {
    return this.options.messageFormat
      .replace('{message}', logEntry.message)
      .replace('{timestamp}', logEntry.timestamp.toString());
  }
}
