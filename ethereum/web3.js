import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider); //window is not available inside node

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//this means we are running on broser
	//AND
	//check if the user is running metamask
	web3 = new Web3(window.web3.currentProvider);
}else{
// We are on the server OR  the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		 'https://rinkeby.infura.io/v3/c08654ac1c5a427a9afe06a8bb3222e0'
	);

	web3 = new Web3(provider);
}

export default web3;