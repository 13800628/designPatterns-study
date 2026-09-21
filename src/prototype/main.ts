
import {
  ButtonPrototype,
  ShapeRegistry,
} from './prototype.js';
console.log('=== 1. 既存のオブジェクトからクローンを作成し、一部のみ変更 ===');

// ① ベースとなるボタン（プロトタイプ）を用意
const primaryButton = new ButtonPrototype(
  150,
  50,
  '#007bff',
  '送信する',
  { fontSize: 16, border: 'none' }
);

// ② clone() を呼んで複製し、ラベルと色だけをサクッとカスタマイズ
const secondaryButton = primaryButton.clone();
secondaryButton.label = 'キャンセル';
secondaryButton.color = '#6c757d';

primaryButton.showInfo();
secondaryButton.showInfo();


console.log('\n=== 2. ネストされたオブジェクトの参照（ディープコピー）の検証 ===');

// クローン側のネスト属性（fontSize）を変更してみる
secondaryButton.styleOption.fontSize = 20;

console.log(`元のボタンのフォントサイズ: ${primaryButton.styleOption.fontSize}px`); // 16px (影響を受けていない)
console.log(`複製ボタンのフォントサイズ: ${secondaryButton.styleOption.fontSize}px`); // 20px


console.log('\n=== 3. ShapeRegistry (雛形カタログ) からの複製取得 ===');

const registry = new ShapeRegistry();

// 雛形として登録
registry.register('danger-btn', new ButtonPrototype(200, 60, '#dc3545', '削除確認', { fontSize: 18, border: '2px solid red' }));

// カタログからクローンを取得
const dangerBtnCopy = registry.get('danger-btn');
if (dangerBtnCopy) {
  dangerBtnCopy.label = 'アカウントを完全に削除する'; // 個別にカスタマイズ
  dangerBtnCopy.showInfo();
}