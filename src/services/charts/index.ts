import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { LocalStorageKeys } from '../../constants/localStorage';
import { BASE_URL } from '../../constants/config';

const httpLink = createHttpLink({
  uri: BASE_URL
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
