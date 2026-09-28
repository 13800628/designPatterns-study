export interface Image {
  display(): void;
}

// 本物のオブジェクト
export class RealImage implements Image {
  constructor(private filename: string) {
    // これが重い処理
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(` 💾 [Disk I/O] 重い画像データを読み込み中... (${this.filename})`);
  }

  public display(): void {
    console.log(` 🖼️ [Display] 画面に高画質画像を出力: ${this.filename}`);
  }
}

// 代理クラス
export class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  public display(): void {
    // 初めてのリクエスト、本物クラスでnullなら初めて生成
    if (this.realImage === null) {
      console.log(`[Proxy] 初めての表示リクエストを検知。本物の画像をロードします...`);
      this.realImage = new RealImage(this.filename);
    } else {
      // すでにあるのであれば生成という重いものをせず再利用
      console.log(`[Proxy] キャッシュされた本物の画像を再利用します。`);
    }
    this.realImage.display();
  }
}