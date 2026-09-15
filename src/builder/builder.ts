// 生成対象の抽象クラス
export class Computer {
  public cpu: string = '';
  public ram: string = '';
  public storage: string = '';
  public gpu?: string;
  public os?: string;

  public showSpecs(): void {
    console.log('--- PC Spec Sheet ---');
    console.log(`CPU    : ${this.cpu}`);
    console.log(`RAM    : ${this.ram}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`GPU    : ${this.gpu ?? 'なし (オンボード)'}`);
    console.log(`OS     : ${this.os ?? 'なし (OS未インストール)'}`);
  }
}

// Builder インターフェース
export interface Builder {
  reset() : this;
  setCPU(cpu: string): this;
  setRAM(ram: string): this;
  setStorage(storage: string): this; 
  setGPU(gpu: string): this;
  setOS(os: string): this;
}

// 具象ビルダー
export class ComputerBuilder implements Builder {
  private computer!: Computer;

  constructor() {
    this.reset();
  }

  public reset(): this {
    this.computer = new Computer();
    return this;
  }

  public setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this; 
  }

  public setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }

  public setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }

  public setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  public setOS(os: string): this {
    this.computer.os = os;
    return this;
  }

  public build(): Computer {
    const result = this.computer;
    this.reset();
    return result;
  }
}

// 実際に監視するクラス
export class ComputerDirector {
  constructor(private builder: Builder) {}

  // 場合に応じて可変的に実行する
  public constructorGamingPC(): void {
    this.builder
     .reset()
     .setCPU('Intel Core i9')
      .setRAM('32GB DDR5')
      .setStorage('2TB NVMe SSD')
      .setGPU('NVIDIA RTX 4080')
      .setOS('Windows 11 Pro');
  }

  public constructOfficePC(): void {
    this.builder
      .reset()
      .setCPU('Intel Core i3')
      .setRAM('8GB')
      .setStorage('256GB SSD')
      .setOS('Windows 11 Home');
  }
}