import {
  ShoppingCart,
  CreditCardPayment,
  PaymentStrategy,
  PayPayPayment,
  BankTransferPayment
} from './strategy.js';


type PaymentType = 'CREDIT' | 'PAYPAY' | 'BANK';

const paymentStrategies: Record<PaymentType, PaymentStrategy> = {
  CREDIT: new CreditCardPayment('1234-5678-9012-3456', 'TARO YAMADA'),
  PAYPAY: new PayPayPayment('paypay_user_99'),
  BANK: new BankTransferPayment('みずほ銀行 渋谷支店'),
};

// --- 実際の実行イメージ ---

const cart = new ShoppingCart();
cart.addItem(4500);

console.log('=== 条件1: ユーザーが「クレカ」を選んだ場合 ===');
const selectedTypeA: PaymentType = 'CREDIT';
cart.setPaymentStrategy(paymentStrategies[selectedTypeA]); // 条件分岐なしでセット
cart.checkout();

console.log('\n=== 条件2: ユーザーが「スマホ決済」に変更した場合 ===');
const selectedTypeB: PaymentType = 'PAYPAY';
cart.setPaymentStrategy(paymentStrategies[selectedTypeB]); // 条件分岐なしでセット
cart.checkout();

console.log('\n=== 条件3: ユーザーが「銀行振込」に変更した場合 ===');
const selectedTypeC: PaymentType = 'BANK';
cart.setPaymentStrategy(paymentStrategies[selectedTypeC]); // 条件分岐なしでセット
cart.checkout();