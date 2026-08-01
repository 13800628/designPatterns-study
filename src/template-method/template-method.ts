
// 抽象クラス 共通する処理の流れをアルゴリズムとして定義
export abstract class DataMiner {
  public mine(path: string): void {
    this.openFile(path);
    const rawData = this.extractData();
    const parsedData = this.parseData(rawData);
    const analysis = this.analyzeData(parsedData);
    this.sendReport(analysis);
    this.closeFile();

    if (this.shouldHookCustomNotification()) {
      this.onCompleted();
    }
  }

  protected openFile(path: string): void {
    console.log(`[共通] ファイルを開く: ${path}`);
  }

  protected analyzeData(data: unknown): string {
    console.log(`[共通] データを分析`);
    return `分析結果: データ件数 =${Array.isArray(data) ? data.length : 1}`;
  }

  protected sendReport(analysis: string): void {
    console.log(`[共通] レポートを送信 -> ${analysis}`);
  }

  protected closeFile(): void {
    console.log(`[共通] ファイルを閉じる`);
  }

  protected abstract extractData(): string;
  protected abstract parseData(rawData: string): unknown[];

  protected shouldHookCustomNotification(): boolean {
    return false;
  }

  protected onCompleted(): void {
    // デフォルトでは空
  }
}


// 具象クラス 共通処理を継承しそれぞれに適した処理を実装
export class CsvDataMiner extends DataMiner {
  protected extractData(): string {
    console.log(`[CSV] データを抽出`);
    return 'id,name,\n1,Alice\n2,Bob';
  }

  protected parseData(rawData: string): unknown[] {
    console.log(`[CSV] データを解析`);
    return rawData.split('\n').slice(1);
  }
}

export class JsonDataMiner extends DataMiner {
  protected extractData(): string {
    console.log(`[JSON] データを抽出`);
    return '[{"id": 1}, {"id": 2}, {"id": 3}]';
  }

  protected parseData(rawData: string): unknown[] {
    console.log(`[JSON] データを解析`);
    return JSON.parse(rawData) as unknown[];
  }

  protected override shouldHookCustomNotification(): boolean {
    return true;
  }

  protected override onCompleted(): void {
    console.log(`[JSON] データマイニングが完了しました。カスタム通知を送信します。`);
  }
}