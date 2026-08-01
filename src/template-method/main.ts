import { DataMiner, CsvDataMiner, JsonDataMiner } from "./template-method";

function runDataPipeLine(miner: DataMiner, filePath: string): void {
  miner.mine(filePath);
}

console.log('=== 1. CSVマイニング処理を実行 ===');
const csvMiner = new CsvDataMiner();
runDataPipeLine(csvMiner, 'data/orders.csv');

console.log('\n=== 2. JSONマイニング処理を実行 ===');
const jsonMiner = new JsonDataMiner();
runDataPipeLine(jsonMiner, 'data/orders.json');