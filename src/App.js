import "./styles.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}
