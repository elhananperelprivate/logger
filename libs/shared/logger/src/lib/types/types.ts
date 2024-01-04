export interface LogEntry {
  message: string;
  stackTrace: string;
  timestamp: number;
}
export interface LoggerConfig {
  messageFormat: string;
  targets: string[];
  useQueue: boolean;
  flushTiming: number;
}
