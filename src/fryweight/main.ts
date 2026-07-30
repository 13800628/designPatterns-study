import { TreeFactory, TreeType } from "./fryweight";

class Tree {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly type: TreeType
  ) {}

  public draw(): void {
    this.type.draw(this.x, this.y);
  }
}

class Forest {
  private trees: Tree[] = [];

  public plantTree(x: number, y: number, name: string, color: string, texture: string) {
    const type = TreeFactory.getTreeTypes(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  public draw(): void {
    for(const tree of this.trees) {
      tree.draw();
    }
  }
}

const forest = new Forest();

for (let i = 0; i < 1000; i++) {
  forest.plantTree(i, i * 2, 'Oak', 'Green', 'Smooth');
  forest.plantTree(i * 3, i * 4, 'Cherry', 'Pink', 'Rough');
}

console.log(`生成された木の総数: 2000`);
console.log(`実際にメモリ上に存在する TreeTypeの数: ${TreeFactory.getCacheCount}`);