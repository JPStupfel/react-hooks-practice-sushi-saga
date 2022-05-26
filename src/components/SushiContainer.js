import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({funds, shortList, handleEaten, handleMore}) {

  const rolls = shortList.map(e=> <Sushi funds={funds} handleEaten={handleEaten} roll={e} key={e.id} />)
console.log(rolls)


  return (
    <div className="belt">
      {rolls}
      <MoreButton handleMore={handleMore} key={'9898989898sadf'} />
    </div>
  );
}

export default SushiContainer;
