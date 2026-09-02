// 抽象的な処理のためのインターフェース
export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
}

// TVクラスの実装(具象クラス1)
export class Tv implements Device {
  private on: boolean = false;
  private volume: number = 30;

  public isEnabled(): boolean { return this.on; };
  public enable(): void { this.on = true; console.log("TV ON")};
  public disable(): void { this.on = false; console.log("TV OFF")};
  public getVolume(): number { return this.volume; };
  public setVolume(percent: number): void {
    this.volume = Math.max(0, Math.min(100, percent));
    console.log(`[TV] 音量を ${this.volume}% に設定しました。`)
  }
}

// Radioクラスの実装(具象クラス2)
export class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;

  public isEnabled(): boolean { return this.on; };
  public enable(): void { this.on = true; console.log("Radio ON")};
  public disable(): void { this.on = false; console.log("Radio OFF")};
  public getVolume(): number { return this.volume; };
  public setVolume(percent: number): void {
    this.volume = Math.max(0, Math.min(100, percent));
    console.log(`[Radio] 音量を ${this.volume}% に設定しました。`)
  }
}

// ここから利用する側の抽象クラス
/**
 * 橋渡しとしてのクラス、実装側を受け取り抽象側の処理を
 * ここがこのデザインパターンの肝となる部分で、
 */
export class RemoteControl {
  // ここで実装側のインスタンスを受け取る(橋渡しになる)
  constructor(protected device: Device) {}

  // 実装側のメソッドを呼び出すような形になるので、利用側/実装側のような入れ子構造になり、それぞれに抽象、具象が存在することになる。
  public togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  public volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  public volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }
}

// RemoteControlを継承した具象クラス
export class AdvancedRemoteControl extends RemoteControl {
  public mute(): void {
    console.log("ミュート");
    this.device.setVolume(0);
  }

  public boostVolume(): void {
    console.log("UP");
    this.device.setVolume(100);
  }
}