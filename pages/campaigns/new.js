import React, {Component} from 'react';
import {Button, Form, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';  //You can also import {Link} from routes.js, but routes is for programmatic routing

class CampaignNew extends Component {

	state = {
		minimumContribution : '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		//start button loading
		this.setState({loading: true, errorMessage: ''});

		try {
			const accounts = await web3.eth.getAccounts();

			// console.log(accounts);

			await factory.methods.createCampaign(this.state.minimumContribution).send({
				from: accounts[0]
			});

			Router.pushRoute('/');

		} catch(error) {
			// statements
			this.setState({errorMessage: error.message});
		}

		//finish button loading
		this.setState({loading: false});


	}


	render(){


		return (
			<Layout>
				<h3>Create a Campaign</h3>

				<Form onSubmit={this.onSubmit} error= {!!this.state.errorMessage}>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input
							value = {this.state.minimumContribution}
							onChange= {event => this.setState({minimumContribution: event.target.value})}
							labelPosition="right"
							label="wei"
						/>
					</Form.Field>

					<Message 
						error
						header = "Ooops!!"
						content = {this.state.errorMessage}
					/>

					<Button
						primary
						loading = {this.state.loading}
					>
					Create!
					</Button>
				</Form>
			</Layout>
		);
	};


}

export default CampaignNew;