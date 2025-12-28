import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchComponent/WatchPage";
import SearchResults from "./components/SearchComponent/SearchResults";

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
      },
      {
        path : "/results",
        element : <SearchResults />
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={appStore} >
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;