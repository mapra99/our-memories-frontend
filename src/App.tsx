import { MainLayout } from './components/MainLayout';
import { ApolloProvider } from '@apollo/client';
import { initApollo } from './utils/initApollo';

const App = () => {
  const client = initApollo();

  return (
    <ApolloProvider client={client}>
      <MainLayout>
      </MainLayout>
    </ApolloProvider>
  );
}

export default App;
