import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xBdf251ad26308d7A61ed5992E51f337D762664fa"
);

export default instance;
