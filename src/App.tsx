import 'antd/dist/reset.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => <RouterProvider router={router} />;

export default App;
