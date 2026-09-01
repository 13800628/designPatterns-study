import {
  Tv,
  Radio,
  RemoteControl,
  AdvancedRemoteControl,
} from './bridge.js';

// --- 1. 具体的なデバイス（実装）の生成 ---
const tv = new Tv();
const radio = new Radio();

console.log('=== 1. 標準リモコンで TV を操作 ===');
// RemoteControl に Tv を橋渡し（組み合わせ）
const basicTvRemote = new RemoteControl(tv);
basicTvRemote.togglePower();
basicTvRemote.volumeUp();


console.log('\n=== 2. 高機能リモコンで TV を操作 ===');
// 同じ Tv に対して機能拡張版のリモコンを接続
const advancedTvRemote = new AdvancedRemoteControl(tv);
advancedTvRemote.mute();


console.log('\n=== 3. 高機能リモコンで Radio を操作 ===');
// 高機能リモコンに Radio（別の実装）をそのまま差し替え接続
const advancedRadioRemote = new AdvancedRemoteControl(radio);
advancedRadioRemote.togglePower();
advancedRadioRemote.mute();
advancedRadioRemote.togglePower();