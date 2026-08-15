import { ConfigurationManager } from "./singleton";

// これでインスタンス生成しようとするとエラーを吐く 
//const directInstance = new ConfigurationManager();


console.log('=== 1. アプリケーションのモジュールAでの処理 ===');
// getInstance() を通じて唯一のインスタンスを取得
const configA = ConfigurationManager.getInstance();
console.log(`モジュールAでのアプリ名: ${configA.get('appName')}`);

// モジュールAから設定を変更してみる
configA.set('theme', 'dark');
console.log('モジュールAで theme を "dark" に設定しました。');


console.log('\n=== 2. アプリケーションのモジュールBでの処理 ===');
// 再度 getInstance() でインスタンスを取得
const configB = ConfigurationManager.getInstance();
// モジュールAで設定した内容がモジュールBからでも参照できる
console.log(`モジュールBでの theme 設定値: ${configB.get('theme')}`);


console.log('\n=== 3. 同一インスタンスの検証 ===');
// 2つの参照が完全に同じメモリ上のオブジェクトを指しているか比較
const isSameInstance = configA === configB;
console.log(`configA と configB は同一のインスタンスか?: ${isSameInstance}`); // true