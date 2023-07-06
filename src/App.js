import { Routes, Route, Link } from "react-router-dom";


/* Components */
import Order from "./page/Order";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/order" element={<Order/>}>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
