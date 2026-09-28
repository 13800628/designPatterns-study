import { Image, ProxyImage } from "./proxy";

console.log('=== 1. Webページを開いた段階（軽量なProxyだけを配置） ===');

// 画面に画像コンポーネントを3つ配置（この時点ではまだディスク読み込みは一切起きない！）
const image1: Image = new ProxyImage('hero-banner.png');
const image2: Image = new ProxyImage('product-detail.png');
const image3: Image = new ProxyImage('footer-bg.png');

console.log('ページ読み込み完了！（画像の非同期読み込み待ち状態）');


console.log('\n=== 2. ユーザーがスクロールして「hero-banner.png」が画面に入った ===');
// display() が呼ばれた「この瞬間」に初めて本物の画像がロードされる
image1.display();


console.log('\n=== 3. ユーザーがもう一度画面を戻して「hero-banner.png」を表示 ===');
// 2回目はすでに生成済みの RealImage があるため、ロード処理なしで即表示される
image1.display();


console.log('\n=== 4. 「footer-bg.png」は最後まで画面に映らなかった場合 ===');