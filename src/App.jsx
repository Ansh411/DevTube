import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./store/appStore";

const App = () => {
  return (
    <Provider store={appStore} >
    <div>
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
};

export default App;