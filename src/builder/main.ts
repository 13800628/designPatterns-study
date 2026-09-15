import { ComputerBuilder, ComputerDirector } from "./builder";


console.log('=== 1. カスタム設定で自作PCを構築 ===');

// Builderを使ったカスタムでの構築
const builder = new ComputerBuilder();
const myCustomPC = builder
  .setCPU('AMD Ryzen 7')
  .setRAM('64GB')
  .setStorage('1TB SSD')
  .setGPU('NVIDIA RTX 4070') // オプション項目だけを選んで指定可能
  .build();

  myCustomPC.showSpecs();

console.log('\n=== 2. Director を使った定番PCの構築 ===');

const director = new ComputerDirector(builder);

director.constructorGamingPC();
const gamingPC = builder.build();
gamingPC.showSpecs();

console.log('');

director.constructOfficePC();
const officePC = builder.build();
officePC.showSpecs();