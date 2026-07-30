export class TreeType {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public readonly texture: string
  ) {}

  public draw(x: number, y: number): void {
    console.log(`[Tree] ${this.name} (${this.color}) at (${x}, ${y})`);
  }
}

// 本質
// 同じTreeTypeがあればキャッシュし、再利用
export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  public static getTreeTypes(name: string, color: string, texture: string): TreeType {
    const key = `${name}_${color}_${texture}`;

    if(!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(name, color, texture));
    }

    return this.treeTypes.get(key)!;
  }

  public static getCacheCount(): number {
    return this.treeTypes.size;
  }
}