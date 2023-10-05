// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => <RouterProvider router={router} />;

export default App;
