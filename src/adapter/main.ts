import { LegacyLoggerAdapter, LegacyLoggerService, NewLogger } from "./adapter";

function runApplication(logger: NewLogger): void {
  console.log('開始');
  logger.logMessage("ログイン")
  logger.logError('タイムアウト')
}

// 互換性のないように
const legacyService = new LegacyLoggerService();
// runApplication(legacyService);のように直接渡したらエラーに

const adapter: NewLogger = new LegacyLoggerAdapter(legacyService);

//変換して初めて渡してあげる
runApplication(adapter);