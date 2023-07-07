import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";


/* css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './default.scss'

/* Components */
import Menu from "./page/Menu";
import Home from "./page/Home";
import List from "./component/List";

/* datas */
import bestData from './data/best'
import milkteaData from './data/milktea'
import jewelryData from './data/jewelry'
import smoothieData from './data/smoothie'
import originalData from './data/original'
import fruitData from './data/fruit'
import fruitmixData from './data/fruitmix'
import coffeeData from './data/coffee'




function App() {
  const [best] = useState(bestData)
  const [milktea] = useState(milkteaData)
  const [jewelry] = useState(jewelryData)
  const [smoothie] = useState(smoothieData)
  const [original] = useState(originalData)
  const [fruit] = useState(fruitData)
  const [fruitmix] = useState(fruitmixData)
  const [coffee] = useState(coffeeData)

  const newseason = [milktea[0],smoothie[0],milktea[1],smoothie[1]]
  
  

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Menu" element={<Menu/>}>
          <Route path="newseason" element={<List list={newseason} />}></Route>
          <Route path="best" element={<List list={best} />}></Route>
          <Route path="milktea" element={<List list={milktea} />}></Route>
          <Route path="jewelry" element={<List list={jewelry} />}></Route>
          <Route path="smoothie" element={<List list={smoothie} />}></Route>
          <Route path="original" element={<List list={original} />}></Route>
          <Route path="fruit" element={<List list={fruit} />}></Route>
          <Route path="fruitmix" element={<List list={fruitmix} />}></Route>
          <Route path="coffee" element={<List list={coffee} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
