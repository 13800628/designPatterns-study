// サブシステムブロック
export class SmartLighting {
  public turnOn(): void {
    console.log('点灯');
  }
  public dim(level: number): void {
    console.log(`${level}調整`)
  }
  public turnOff(): void {
    console.log('消灯');
  }
}

export class AudioSystem {
   public powerOn(): void {
     console.log('[音響] アンプの電源をONにしました。');
   }
   public setVolume(level: number): void {
     console.log(`[音響] 音量を ${level} に設定しました。`);
   }
   public powerOff(): void {
     console.log('[音響] アンプの電源をOFFにしました。');
   }
}

export class Projector {
  public turnOn(): void {
    console.log('[プロジェクター] 電源をONにしました。');
  }
  public setInputSource(source: string): void {
    console.log(`[プロジェクター] 入力を ${source} に切り替えました。`);
  }
  public turnOff(): void {
    console.log('[プロジェクター] 電源をOFFにしました。');
  }
}

export class ProjectionScreen {
  public lower(): void {
    console.log('[スクリーン] スクリーンを下ろしました。');
  }
  public raise(): void {
    console.log('[スクリーン] スクリーンを収納しました。');
  }
}

// メインのFacadeブロック
export class HomeTheaterFacade {
  constructor(
    private lighting: SmartLighting,
    private audio: AudioSystem,
    private projector: Projector,
    private screen: ProjectionScreen
  ) {}

  public watchMovie(movieTitle: string): void {
    console.log("開始")
    this.lighting.dim(20);
    this.screen.lower();
    this.projector.turnOn();
    this.projector.setInputSource('HDMI 1 (Blu-ray)');
    this.audio.powerOn();
    this.audio.setVolume(15);
    console.log('=== 🍿 準備完了！再生を開始します ===');
  }

  public endMovie(): void {
    console.log('\n=== 🛑 映画鑑賞を終了し、全システムを停止 ===');
    this.lighting.turnOn();
    this.screen.raise();
    this.projector.turnOff();
    this.audio.powerOff();
    console.log('=== 🏠 ホームシアターをOFFにしました ===');
  }
}