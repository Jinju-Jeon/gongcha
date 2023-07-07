import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";


/* css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './default.scss'

/* Components */
import Order from "./page/Order";
import Home from "./page/Home";

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
        <Route path="/order" element={<Order/>}>
          <Route path='new' element={<div>new</div>}></Route>
          <Route path='best' element={<div>best</div>}></Route>
          <Route path='milktea' element={<div>milktea</div>}></Route>
          <Route path='jewelry' element={<div>jewelry</div>}></Route>
          <Route path='smoothie' element={<div>smoothie</div>}></Route>
          <Route path='original' element={<div>original</div>}></Route>
          <Route path='fruit' element={<div>fruit</div>}></Route>
          <Route path='fruitmix' element={<div>fruitmix</div>}></Route>
          <Route path='coffee' element={<div>coffee</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
