import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  //ApolloClient is a class that connects to a GraphQL server
  uri: '/graphql',
  cache: new InMemoryCache(),
  //InMemoryCache is a class that stores the results of GraphQL queries
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
