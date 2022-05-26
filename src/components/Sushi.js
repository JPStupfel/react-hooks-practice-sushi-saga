import React, {useState} from "react";

function Sushi({funds, roll, handleEaten}) {

  const [isEaten, setIsEaten] = useState(false)

  function handleClick(event){
    if(funds-roll.price>=0 && !isEaten){
    setIsEaten(p=>!p)
    handleEaten(roll)
    }

  }


  return (
    <div className="sushi">
      <div className="plate" onClick={
        handleClick
      }>
        
        {isEaten ? null : (
          <img
            src={roll.img_url}
            alt={roll.name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {roll.name} - ${roll.price}
      </h4>
    </div>
  );
}

export default Sushi;
