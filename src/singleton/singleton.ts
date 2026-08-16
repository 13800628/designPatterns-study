// 設定管理クラス
export class ConfigurationManager {
  // 唯一のインスタンスを保証する
  private static instance: ConfigurationManager | null = null;

  private config: Map<string, string> = new Map();

  // コンストラクタをprivateにすることで外部からのnewを禁止にする
  private constructor () {
    console.log('[Singleton] ConfigrationManager のインスタンスが初期化');
    this.config.set('appName', 'DesignPatternStudio');
    this.config.set('env', 'production');
  }

  // ここが唯一インスタンスを取得する静的アクセスポイントになる
  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  // 各種処理
  public get(key: string): string | undefined {
    return this.config.get(key);
  }

  public set(key: string, value: string): void {
    this.config.set(key, value);
  }
}