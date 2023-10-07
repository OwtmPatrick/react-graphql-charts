import { ApolloClient, InMemoryCache, createHttpLink, from, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { router } from '../../routes';
import { LocalStorageKeys } from '../../constants/localStorage';
import { Routes } from '../../constants/routes';
import { BASE_URL } from '../../constants/config';

const httpLink = createHttpLink({
  uri: BASE_URL
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem(LocalStorageKeys.AUTH_TOKEN) ?? ''}`
    }
  }));

  return forward(operation);
});

const logoutLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors?.[0].extensions.code === 'UNAUTHENTICATED') {
    router.navigate(Routes.LOGIN);
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([logoutLink, authMiddleware, httpLink])
});
