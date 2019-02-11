const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'gentle patient size quit shoe curve choose ordinary surge market enhance bacon',
	'https://rinkeby.infura.io/v3/c08654ac1c5a427a9afe06a8bb3222e0'
);

//infura provides us with an ethereum node where to deploy our contract

const web3 = new Web3(provider);

const deploy = async () => {

	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy( { data:compiledFactory.bytecode })
		.send({ gas:'1000000', from: accounts[0] });

	// console.log(interface);
	console.log('Contract deployed to', result.options.address);
};

deploy();



//this file will be executed from console using node deploy.js to deploy Factory contract to Rinkeby network