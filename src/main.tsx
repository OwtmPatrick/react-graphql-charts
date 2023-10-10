import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import './index.css';
import { client } from './services/charts/index.ts';
import { ThemeProvider, ThemeContext } from './area/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
);
