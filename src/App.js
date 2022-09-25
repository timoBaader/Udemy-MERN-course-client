import Navigation from "./components/Navigation";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard, Landing, Register, Error } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <div>
            <Navigation />
            <Dashboard />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div>
            <Navigation />
            <Register />
          </div>
        }
      />
      <Route
        path="/landing"
        element={
          <div>
            <Navigation />
            <Landing />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div>
            <Navigation />
            <Error />
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
