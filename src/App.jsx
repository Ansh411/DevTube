import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";


const MainContainer = lazy(() => import("./components/MainContainer"));
const WatchPage = lazy(() => import("./components/WatchComponent/WatchPage"));
const SearchResults = lazy(() => import("./components/SearchComponent/SearchResults"));
const UnderConstruction = lazy(() => import("./components/UnderConstruction"));

const Shorts = lazy(() => import("./components/Other/Shorts"));
const Subscriptions = lazy(() => import("./components/Other/Subscriptions"));

const History = lazy(() => import("./components/You/History"));
const Playlists = lazy(() => import("./components/You/Playlists"));
const WatchLater = lazy(() => import("./components/You/WatchLater"));
const LikedVideos = lazy(() => import("./components/You/LikedVideos"));
const YourVideos = lazy(() => import("./components/You/YourVideos"));
const Downloads = lazy(() => import("./components/You/Downloads"));

const Settings = lazy(() => import("./components/Other/Settings"));
const ReportHistory = lazy(() => import("./components/Other/ReportHistory"));
const Help = lazy(() => import("./components/Other/Help"));
const SendFeedback = lazy(() => import("./components/Other/SendFeedback"));


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children : [
      {
        path : "/",
        element : <Suspense fallback={<Loader/>}><MainContainer /></Suspense>
      },
      {
        path : "/watch",
        element : <Suspense fallback={<Loader/>}><WatchPage /></Suspense>
      },
      {
        path : "/results",
        element : <Suspense fallback={<Loader/>}><SearchResults /></Suspense>
      }
    ],
    errorElement : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
  },
      {
        path : "/shopping",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/music",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/movies",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/live",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/gaming",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/news",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/sports",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/courses",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/fashion-beauty",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
      {
        path : "/podcasts",
        element : <Suspense fallback={<Loader/>}><UnderConstruction /></Suspense>
      },
    
  
  {
    path : "/shorts",
    element : <Suspense fallback={<Loader/>}> <Shorts/> </Suspense>
  },
  {
    path : "/subscriptions",
    element : <Suspense fallback={<Loader/>}> <Subscriptions/> </Suspense>
  },
  {
    path : "/history",
    element : <Suspense fallback={<Loader/>}> <History/> </Suspense>
  },
  {
    path : "/playlists",
    element : <Suspense fallback={<Loader/>}> <Playlists/> </Suspense>
  },
  {
    path : "/watch-later",
    element : <Suspense fallback={<Loader/>}> <WatchLater/> </Suspense>
  },
  {
    path : "/liked-videos",
    element : <Suspense fallback={<Loader/>}> <LikedVideos/> </Suspense>
  },
  {
    path : "/your-videos",
    element : <Suspense fallback={<Loader/>}> <YourVideos/> </Suspense>
  },
  {
    path : "/downloads",
    element : <Suspense fallback={<Loader/>}> <Downloads/> </Suspense>
  },
        {
        path : "/settings",
        element : <Suspense fallback={<Loader/>}><Settings /></Suspense>
      },
      {
        path : "/report-history",
        element : <Suspense fallback={<Loader/>}><ReportHistory /></Suspense>
      },
      {
        path : "/help",
        element : <Suspense fallback={<Loader/>}><Help /></Suspense>
      },
      {
        path : "/send-feedback",
        element : <Suspense fallback={<Loader/>}><SendFeedback /></Suspense>
      },
]);

const App = () => {
  return (
    <Provider store={appStore} >
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;