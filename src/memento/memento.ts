// 保存された過去の状態を表すクラス(書き換えられないようにreadOnly)
export class EditorMemento {
  constructor (
    public readonly text: string,
    public readonly cursorPosition: number,
    public readonly savedAt: Date = new Date()
  ) {}
}

// 本来のエディタの書き込みに追加してMementoを作成したり復元する機能を
export class TextEditor {
  private text: string = '';
  private cursorPosition: number = 0;

  public type(text: string): void {
    this.text += text;
    this.cursorPosition  += text.length;
  }

  public getText(): string {
    return this.text;
  }

  // スナップショットを生成して出力
  public save(): EditorMemento {
    return new EditorMemento(this.text, this.cursorPosition);
  }

  // 復元する際に保存されたものを活用する
  public restore(memento: EditorMemento): void {
    this.text = memento.text;
    this,this.cursorPosition = memento.cursorPosition;
    console.log(`[エディタ]状態を復元しました(${this.text.length})`);
  }

  public showCurrentState(): void {
    console.log(`  └ 現在のテキスト: "${this.text}" (カーソル位置: ${this.cursorPosition})`);
  }
}


// Mementoを管理するクラス
export class HistoryCaretaker {
  private history: EditorMemento[] = [];

  public push(memento: EditorMemento): void {
    this.history.push(memento);
  }

  public pop(): EditorMemento | undefined {
    return this.history.pop();
  }

  public getHistoryCount(): number {
    return this.history.length;
  }
}