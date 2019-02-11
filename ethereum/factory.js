import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// const instance = new web3.eth.Contract(
// 	JSON.parse(CampaignFactory.interface), 
// 	'0x5B9f4b5af6DAA239938685EF5D33399F502D0afe'
// );

//new factory deployed with added functions to the Campaign contract
const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface), 
	'0x12F07F1c4A0CE9BE95B0E08f60dd395010Bb4f21'
);

export default instance;