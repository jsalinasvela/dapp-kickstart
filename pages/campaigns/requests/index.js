import React, {Component} from 'react';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component {

	static async getInitialProps(props){

		const campaign = Campaign(props.query.address);

		const requests = await campaign.methods.requests().call();

		return{
			requests
		};

	}

	renderRequests(){

		const { requests } = this.props;

	}

	render(){

		return (
			<h3>Requests List</h3>
		);

	}
}


export default RequestIndex;