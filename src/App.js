import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegistrationPage from './Pages/RegistrationPage';
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';


function App() {

  // router below is essentially holding all of the possible pages the user can render from this application. The first child is <HomnePage/> this means when the user uses the route of '/', the component <HomePage/> is what will be rendered. When the user uses the route '/login', the <LoginPage/> component is what will be rendered. When the user uses '/registration' the component <RegistrationPage/> is what will be rendered.
  const router = createBrowserRouter([
    {
    path: "/",
    element: <GlobalLayout />,
      children: [
        {
          element: <HomePage />,
          index: true
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/registration",
          element: <RegistrationPage />
        }
      ],
    },

  ]);


  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
