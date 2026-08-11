export interface NewLogger {
  logMessage(message: string): void;
  logError(errorMessage: string): void;
}

// 既存クラス(これの型は変更できない)
export class LegacyLoggerService {
  public writeCustomLog(text: string, level: 'INFO' | 'WARN' | 'FATAL'): void {
    console.log(`[LegacyLoggerService] <${level}> ${text}`);
  }
}

// Adapterクラス
// 新規のメソッドを既存のメソッドに変化
export class LegacyLoggerAdapter implements NewLogger {
  constructor(private legacyLogger: LegacyLoggerService) {}

  public logMessage(message: string): void {
    this.legacyLogger.writeCustomLog(message, 'INFO');
  }

  public logError(errorMessage: string): void {
    this.legacyLogger.writeCustomLog(errorMessage, 'FATAL');
  }
}