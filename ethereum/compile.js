const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//deleting the build folder completely
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// console.log(source);

const output = solc.compile(source, 1).contracts;
//be sure to have solc@0.4.25

// console.log(solc.compile(source, 1));

//create build directory
fs.ensureDirSync(buildPath);

for( let contract in output){
	//save contract in build directory
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') + '.json'),
		output[contract]
	);

}


