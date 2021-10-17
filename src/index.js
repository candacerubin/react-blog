import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider from './ApolloProvider.jsx';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider />
	</React.StrictMode>,
	document.getElementById('root')
);
