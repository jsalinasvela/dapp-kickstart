import React, {Component} from 'react';
import { Form, Input, Message, Button,  } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';  //You can also import {Link} from routes.js, but routes is for programmatic routing


class ContributeForm extends Component {

	state = {
		value:'',
		errorMessage: '',
		loading: false
	}

	onSubmit = async (event) => {

		event.preventDefault();

		const campaign = Campaign(this.props.address);

		//change button state to loading and delete error message
		this.setState({ errorMessage: '', loading: true });


		try {

			//get account from web3
			const accounts = await web3.eth.getAccounts();

			// console.log(accounts);

			await campaign.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value)
			});

			//redirect to show page of this campaign

			Router.pushRoute(`/campaigns/${this.props.address}`);

			
		} catch(e) {
			// statements
			this.setState( { errorMessage: e.message });
		}

		this.setState({ loading: false });


	}

	render(){

		return(

			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to Contribute</label>

					<Input 
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
						labelPosition="right"
						label="ether"
					/>
				</Form.Field>

				<Message
					error
					header="Ooops!"
					content={this.state.errorMessage}
				/>

				<Button
					primary
					loading={this.state.loading}
				>
				Contribute!
				</Button>
			</Form>

		);
	}

}

export default ContributeForm;
