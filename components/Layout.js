import React from 'react';
import Head from 'next/head';
import Header from './Header';
import {Container} from 'semantic-ui-react';


const Layout = (props) =>{

	return (
		<Container>
			<link
				  rel="stylesheet"
				  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
			/>
			<Header></Header>
			{props.children}
			<h1>I am a footer</h1>
		</Container>
	);
}

export default Layout;