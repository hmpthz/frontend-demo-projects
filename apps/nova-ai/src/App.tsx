import { RouterProvider } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import { HomePage, homeLoader } from './app/page';
import { RootLayout } from './app/layout';
import { ErrorPage } from './app/error-page';
import { exploreLoader, ExplorePage } from './app/explore';

const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: HomePage,
      },
      {
        path: '/explore',
        loader: exploreLoader,
        Component: ExplorePage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
