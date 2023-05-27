import { Welcome } from "./components";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shardpay from "../src/components/Shardpay/Shardpay";
import SharDefi from "./components/SharDefi/SharDefi";
import Navbar from "./components/Shardpay/Navbar";
import Landing from "./components/Landing/Landing";
import Unify from "./components/Unify/unify";

const App = () => {
  return (
    <div className="App h-[1000px] gradient-bg-welcome">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Shardpay">
              <Shardpay />
            </Route>
            <Route path="/SharDefi">
              <SharDefi />
            </Route>
            <Route path="/Unify">
              <Unify />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
