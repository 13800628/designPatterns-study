export interface Observer {
  update(data: unknown): void;
}

export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Push型で引数にデータを持たせて渡す
export class StockMarket implements Subject {
  private observers: Observer[] = [];
  private price: number = 0;

  constructor(public readonly symbol: string) {}

  public attach(observer: Observer): void {
    const exists = this.observers.includes(observer);
    if (!exists) {
      this.observers.push(observer);
    }
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    for(const observer of this.observers) {
      observer.update({ symbol: this.symbol, price: this.price });
    }
  }

  public setPrice(newPrice: number): void {
    console.log(`\n[市場] ${this.symbol} の株価が ${newPrice} 円に更新されました。 `);
    this.price = newPrice;
    this.notify();
  }
}