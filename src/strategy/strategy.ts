// 共通ロジック
export interface PaymentStrategy {
  pay(amount: number): void;
}

export class CreditCardPayment implements PaymentStrategy {
  constructor(
    private cardNumber: string,
    private holderName: string
  ) {}

  public pay(amount: number): void {
    console.log(`[クレカ決済] ${this.holderName} さんのカード (${this.maskCardNumber})`);
  }

  private maskCardNumber(): string {
    return `****-****-****-${this.cardNumber.slice(-4)}`;
  }
}

export class PayPayPayment implements PaymentStrategy {
  constructor(private accountId: string) {}

  public pay(amount: number): void {
    console.log(`[PayPay] アカウントID(${this.accountId} から${amount} を引き落とし)`);
  }
}

export class BankTransferPayment implements PaymentStrategy {
  constructor(private bankAccountName: string) {}

  public pay(amount: number): void {
    console.log(`[銀行振込] 振込先口座 (${this.bankAccountName}) の案内を発行しました。請求額: ¥${amount}`);
  }
}

// Context block

export class ShoppingCart {
  private amount: number = 0;
  private strategy?: PaymentStrategy;

  public addItem(price: number): void{
    this.amount += price;
  }

  public setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public checkout(): void {
    if (!this.strategy) {
      console.log('エラー: 決済方法が選択されていません');
      return;
    }

    console.log(`合計金額${this.amount}`);
    this.strategy.pay(this.amount);
  }
}