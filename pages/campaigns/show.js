import React from 'react';
import Campaign from '../../ethereum/campaign';


class CampaignShow extends React.Component {

	static async getInitialProps (props) {
		//static keyword is REQUIRED by Next.js

		//props is coming from next router

		//console.log(props);

		const campaign = Campaign(props.query.address);

		const summary = await campaign.methods.getSummary().call();

		// console.log(summary);

		return{
			minimumContribution: summary[0],
			balance: summary[1],
			requestCount: summary[2],
			approversCount:summary[3],
			manager:summary[4]
		}
	}


	render(){

		return(
			<h3>Show Campaign !</h3>

		);

	}

}

export default CampaignShow;