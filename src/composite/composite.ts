// 共通コンポーネント
export interface FileSystemNode {
  getName(): string;
  getSize(): number;
  print(indent?: string): void;
}

// 末端の単体要素
export class FileNode implements FileSystemNode {
  constructor(
    private name: string,
    private size: number
  ) {}

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }

  public print(indent?: string): void {
    console.log(`${indent} ${this.name} (${this.size} KB)`);
  }
}


// 複合体の定義(composite)
export class DirectoryNode implements FileSystemNode {
  private children: FileSystemNode[] = [];
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }

  public add(node: FileSystemNode): void {
    this.children.push(node)
  }

  public remove(node: FileSystemNode): void {
    const index = this.children.indexOf(node);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  // 再起的なサイズの計算
  // フォルダ自体のサイズはすべての要素の合計サイズになる
  public getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }

  public print(indent?: string): void {
    console.log(`${indent} ${this.name}/ (${this.getSize} KB)`);
    for (const child of this.children) {
      child.print(`${indent}`);
    }
  }
}