import React, { Component } from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';


class CampaignIndex extends Component {


	//componentDidMount lifecycle method does not get executed when using SSR. Antoher life cycle methods gets used instaead
	// async componentDidMount(){

	// 	const campaigns = await factory.methods.getDeployedCampaigns().call();

	// 	console.log(campaigns);

	// }

	static async getInitialProps () {
		//static keyword is REQUIRED by Next.js


		const campaigns = await factory.methods.getDeployedCampaigns().call();

		// console.log(campaigns);

		//whatever is in the return statement gets passed down to the component as props
		return { campaigns };
	}


	renderCampaigns() {
		const items = this.props.campaigns.map(address => {

			return {
				header: address,
				description: (
					<Link route={`/campaigns/${address}`}>
						<a>View Campaign</a>
					</Link>
				),
				fluid: true
			}

		});

		return (
			<Card.Group items={items} />
		);

	}


	render() {
		return (
			<div>
				<Layout>
					<h1>Open Campaigns</h1>
					<Link route="/campaigns/new">
						<a>
							<Button 
								floated="right"
								content="Create Campaign" 
								icon="add circle" 
								labelPosition="left" 
								primary
							/>
						</a>
					</Link>
					{this.renderCampaigns()}
				</Layout>
			</div>
		);
	}


}

export default CampaignIndex;