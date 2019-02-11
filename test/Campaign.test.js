const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaign;
let campaignAddress;


beforeEach(async () => {

	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data:compiledFactory.bytecode })
		.send({ from: accounts[0], gas: '1000000'});

	//we will also deploy a campaign from the deployed factory
	
	await factory.methods.createCampaign('100').send({
		from: accounts[0],
		gas: '1000000'
	});

	[campaignAddress] = await factory.methods.getDeployedCampaigns().call(); //notation for getting first element of this array

	//since campaign has already been deployed, we only need to pass the address to manipulate it
	campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);

});

describe('Campaigns', () => {

	it('deploys a factory and a campaign', () => {

		// console.log(factory);
		// console.log('asfadsfasdf');
		// console.log(campaign);
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);

	});

	it('marks caller as the campaign manager', async () => {

		const campaignManager = await campaign.methods.manager().call();

		assert.equal(campaignManager, accounts[0]);

	});

	it('allows people to contribute money and marks them as approvers', async() => {

		//first make a contribution from accounts[1]
		await campaign.methods.contribute().send({
			from:accounts[1],
			value: '200'
		});
		//get the approvers from campaign contract
		const isApprover = await campaign.methods.approvers(accounts[1]).call();

		assert(isApprover);

	});

	it('requires a minimum contribution', async() => {

		try {

			await campaign.methods.contribute().send({
				from:accounts[1],
				value: '5'
			});

			assert(false);
			
		} catch(e) {
			// statements
			assert(e);
		}

	});

	it('allows manager to make payment request', async() =>{

		//call create request
		await campaign.methods.createRequest('buy batteries', '100', accounts[1]).send({
			from: accounts[0],
			gas: '1000000'
		});

		const request = await campaign.methods.requests(0).call();

		assert.equal('buy batteries', request.description);

	});

	it('processes requests', async() => {

		await campaign.methods.contribute().send({
			from:accounts[0],
			value: web3.utils.toWei('10', 'ether')
		});

		//call create request
		await campaign.methods.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1]).send({
			from: accounts[0],
			gas: '1000000'
		});

		//approve request
		await campaign.methods.approveRequest(0).send({
			from:accounts[0],
			gas:'1000000'
		});

		//finalize request
		await campaign.methods.finalizeRequest(0).send({
			from:accounts[0],
			gas:'1000000'
		});

		let balance = await web3.eth.getBalance(accounts[1]);

		balance = web3.utils.fromWei(balance, 'ether');

		balance = parseFloat(balance);

		console.log(balance);

		assert(balance > 104);

	})

})