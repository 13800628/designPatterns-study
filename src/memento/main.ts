import {
  TextEditor,
  HistoryCaretaker,
} from './memento'

const editor = new TextEditor();
const history = new HistoryCaretaker();

console.log('=== 1. テキスト入力と状態の保存 (Ctrl + S) ===');

// ① 文字入力 -> 保存
editor.type('Hello, ');
editor.showCurrentState();
history.push(editor.save()); // 履歴 1 を保存

// ② さらに文字入力 -> 保存
editor.type('World!');
editor.showCurrentState();
history.push(editor.save()); // 履歴 2 を保存

// ③ 誤って余計な文字を入力 (保存しない)
editor.type(' (Oops! Wrong input)');
console.log('\n--- 誤入力後の状態 ---');
editor.showCurrentState();

console.log('\n=== 2. Undo (Ctrl + Z) の実行 ===');

// 最新の保存状態を取り出して復元
const lastSaved = history.pop();
if (lastSaved) {
  editor.restore(lastSaved);
  editor.showCurrentState(); // "Hello, World!" に戻る
}

console.log('\n=== 3. もう一度 Undo (Ctrl + Z) を実行 ===');

// さらに一つ前の保存状態を取り出して復元
const previousSaved = history.pop();
if (previousSaved) {
  editor.restore(previousSaved);
  editor.showCurrentState(); // "Hello, " に戻る
}