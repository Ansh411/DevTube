import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children : [
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path : "/watch",
        element : <WatchPage />
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={appStore} >
    <div>
      <Header/>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
};

export default App;