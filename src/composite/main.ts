import { DirectoryNode, FileNode, FileSystemNode } from "./composite"

const root = new DirectoryNode('root');

const file1 = new FileNode('index.html', 5);
const file2 = new FileNode('style.css', 10);

root.add(file1);
root.add(file2);

const srcDir = new DirectoryNode('src');
const codeFile1 = new FileNode('app.ts', 25);
const codeFile2 = new FileNode('util.ts', 15);

srcDir.add(codeFile1);
srcDir.add(codeFile2);

root.add(srcDir);

console.log('=== ツリー構造の一覧出力 ===');
// ルートから全子要素を再帰的に出力（階層構造を意識せず一発で呼び出せる）
root.print();

console.log('\n=== サイズ計算の比較 ===');
// 個別のファイルサイズ
console.log(`単体ファイル (${file1.getName()}): ${file1.getSize()} KB`);

// サブフォルダ全体の合計サイズ
console.log(`サブフォルダ (${srcDir.getName()}): ${srcDir.getSize()} KB`);

// ルート全体の合計サイズ（配下のファイル・サブフォルダ全合計）
console.log(`ルート全体 (${root.getName()}): ${root.getSize()} KB`);


// --- 3. 呼び出し側の利点（クライアントの簡略化） ---

/**
 * ノードの種別（ファイルかフォルダか）を問わずにサイズを表示する汎用関数
 */
function printNodeInfo(node: FileSystemNode): void {
  console.log(`[情報] ${node.getName()} の総サイズは ${node.getSize()} KB です。`);
}

console.log('\n=== 共通インターフェースの活用 ===');
printNodeInfo(file1);  // FileNode も渡せる
printNodeInfo(srcDir); // DirectoryNode も渡せる