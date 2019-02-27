import React from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';

class CampaignShow extends React.Component {

	static async getInitialProps (props) {
		//static keyword is REQUIRED by Next.js

		//props is coming from next router

		//console.log(props);

		const campaign = Campaign(props.query.address);

		const summary = await campaign.methods.getSummary().call();

		// console.log(summary);

		return{
			address: props.query.address,
			minimumContribution: summary[0],
			balance: summary[1],
			requestCount: summary[2],
			approversCount:summary[3],
			manager:summary[4]
		}
	}


	renderCards(){

		const {
			minimumContribution,
			balance,
			requestCount,
			approversCount,
			manager
		} = this.props;

		const items = [
			{
			    header: manager,
			    description: 'The manager created this campaign and can create requests.',
			    meta: 'Address of manager',
			    style:{ overflowWrap: 'break-word'}
			},
			{
			    header: minimumContribution,
			    description: 'You must contribute at least this much wei to become an approver',
			    meta: 'Minimum Contribution',
			    style:{ overflowWrap: 'break-word'}
			},
			{
			    header: requestCount,
			    description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
			    meta: 'Number of Requests',
			    style:{ overflowWrap: 'break-word'}
			},
			{
			    header: approversCount,
			    description: 'Number of people who have already donated to this campaign',
			    meta: 'Number of approvers',
			    style:{ overflowWrap: 'break-word'}
			},
			{
			    header: web3.utils.fromWei(balance, 'ether'),
			    description: 'The balance is how much money this campaign has left to spend.',
			    meta: 'Campaign balance (ether)',
			    style:{ overflowWrap: 'break-word'}
			}

		];

		return(
			<Card.Group items={items} />
		);

	}

	render(){

		return(
			<Layout>
				<h3>Campaign Show</h3>

				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderCards()}
						</Grid.Column>
						<Grid.Column width={6}>
							<ContributeForm address={this.props.address}/>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<Link route={`/campaigns/${this.props.address}/requests`}>
								<a>
									<Button primary>
										View Requests
									</Button>
								</a>
							</Link>
						</Grid.Column>
					</Grid.Row>
					
				</Grid>
			</Layout>

		);

	}

}

export default CampaignShow;