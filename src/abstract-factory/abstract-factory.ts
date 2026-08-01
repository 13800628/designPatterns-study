// 抽象クラスのそれぞれの処理
export interface Button {
  render(): void;
  onClick(callback: () => void): void;
}

export interface Checkbox {
  render(): void;
  toggle(): void;
}

// 共通する処理を束ねるクラス
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}



// ここからそれぞれのOSに対応した具象クラス
class WindowsButton implements Button {
  public render(): void {
    console.log('[Windows] 四角いボタン');
  }
  public onClick(callback: () => void): void {
    console.log('[Windows] ボタンクリックイベントを登録');
    callback();
  }
}

class WindowsCheckbox implements Checkbox {
  public render(): void {
    console.log('[Windows] 四角いチェックボックス');
  }
  public toggle(): void {
    console.log('[Windows] チェックボックスを切り替え');
  }
}

// Windows用のGUIFactoryを実装
export class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }
  public createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacButton implements Button {
  public render(): void {
    console.log('[Mac] 丸いボタン');
  }
  public onClick(callback: () => void): void {
    console.log('[Mac] ボタンクリックでイベント登録');
    callback();
  }
}

class MacCheckbox implements Checkbox {
  public render(): void {
    console.log('[Mac] 丸いチェックボックス');
  }
  public toggle(): void {
    console.log('[Mac] チェック状態を切り替え');
  }
}

// Mac用のGUIFactoryを実装
export class MacFactory implements GUIFactory {
  public createButton(): Button {
    return new MacButton();
  }

  public createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}