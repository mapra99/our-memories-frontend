import { MainLayout } from './components/MainLayout';
import { ApolloProvider } from '@apollo/client';
import { initApollo } from './utils/initApollo';
import { PostsProvider } from './contexts/PostsContext';

const App = () => {
  const client = initApollo();

  return (
    <ApolloProvider client={client}>
      <PostsProvider>
        <MainLayout>
        </MainLayout>
      </PostsProvider>
    </ApolloProvider>
  );
}

export default App;
