import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
const [longList, setLongList] = useState([1,2,3,4])
const [sushiIndex, setSushiIndex] = useState(0)
const shortList = longList.slice(sushiIndex,sushiIndex+4)
const [plates, setPlates] = useState([])

const [funds, setFunds] = useState(180)


useEffect(
  ()=>fetch(API).then(r=>r.json()).then(d=>setLongList(d)),[]
)

function handleEaten(obj){
setFunds(prev=>prev-obj.price);
setPlates([...plates, obj])

}

function handleMore(){
setSushiIndex(prev=>prev+4)
}

  return (
    <div className="app">
      <SushiContainer funds={funds} handleMore={handleMore} shortList={shortList} handleEaten={handleEaten} />
      <Table plates={plates} funds={funds}/>
    </div>
  );
}

export default App;
