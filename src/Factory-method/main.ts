import { Logistics, RoadLogistics, SeaLogistics } from "./factory-method";

function runLogisticsPipeline(logistics: Logistics) {
  logistics.planDelivery();
}

console.log('=== 1. 陸上物流での配送計画 ===');
const roadLogistics = new RoadLogistics();
runLogisticsPipeline(roadLogistics);

console.log('\n=== 2. 海上物流での配送計画 ===');
const seaLogistics = new SeaLogistics();
runLogisticsPipeline(seaLogistics);