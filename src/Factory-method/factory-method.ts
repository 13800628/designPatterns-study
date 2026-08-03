export interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  public deliver(): void {
     console.log('[陸送] トラックでコンテナを陸路で配送します');
  }
}

class Ship implements Transport {
  public deliver(): void {
    console.log('[海送] 貨物車でコンテナを海路で配送します');
  }
}

export abstract class Logistics {
  public abstract createTransport(): Transport;

  public planDelivery(): void {
    const transport = this.createTransport();

    console.log('---配送計画の開始---');
    transport.deliver();
  }
}

export class RoadLogistics extends Logistics {
  public createTransport(): Transport {
    return new Truck();
  }
}

export class SeaLogistics extends Logistics {
  public createTransport(): Transport {
    return new Ship();
  }
}