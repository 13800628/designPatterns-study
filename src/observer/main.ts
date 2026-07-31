import { Observer, StockMarket } from "./observer";

class StockPriceLogger implements Observer {
  constructor(private name: string) {}

  public update(data: unknown): void {
    const stock = data as { symbol: string; price: number};
    console.log(` [表示パネル:${this.name}] ${stock.symbol}: ${stock.price}`);
  }
}

class PriceAlertSystem implements Observer {
  constructor(private threshold: number) {}

  public update(data: unknown): void {
    const stock = data as { symbol: string; price: number };
    if (stock.price >= this.threshold) {
      console.log(` [ALERT!] ${stock.symbol} が設定値 (${this.threshold}) を超えました、現在: ${stock.price}`);
    }
  }
}


// --- 動作イメージの視覚化コード ---

// 1. 監視対象（Subject）の生成
const appleStock = new StockMarket('AAPL');

// 2. 観察者（Observer）の生成
const mobileAppLogger = new StockPriceLogger('スマホアプリ');
const webDashboardLogger = new StockPriceLogger('Web画面');
const highPriceAlert = new PriceAlertSystem(150);

// 3. 観察者を監視対象に登録（購読開始）
appleStock.attach(mobileAppLogger);
appleStock.attach(webDashboardLogger);
appleStock.attach(highPriceAlert);

// 4. 状態の変更 ➔ 自動的に全Observerへ通知
appleStock.setPrice(120);
appleStock.setPrice(160); // アラートの条件を達成

// 5. 不要になった観察者を解除（購読解除）
console.log('\n--- Web画面の監視を解除 ---');
appleStock.detach(webDashboardLogger);

// 6. 再度状態を変更 ➔ 残ったObserverのみに通知
appleStock.setPrice(170);