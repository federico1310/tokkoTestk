import { ApolloProvider } from '@apollo/client';
import client from '../config/apollo';
import '../styles/globals.css';
import PropiedadState from '../context/propiedades/PropiedadState'

const MyApp = ({ Component, pageProps }) => {
	return(
		<ApolloProvider client={client}>
			<PropiedadState>
				<Component {...pageProps} />
			</PropiedadState>
		</ApolloProvider>
	);
}

export default MyApp;