import Button from "@restart/ui/esm/Button";
import {useState } from "react"

const Stateobject = () => {
  const [state, setState] = useState({age : 0, siblings : 0});

  const handleClick = val => setState({
    ...state,
    [val]: state[val] + 1
  })

  const {age, siblings} = state

  return (
    <div>
      <p>Today I am {age} Year Old</p>
      <Button className="btn btn-primary" onClick={handleClick.bind(null, 'age')}>Get Older</Button>
      <br/><br/>
      <p>I have {siblings} Siblings</p>
      <Button className="btn btn-primary" onClick={handleClick.bind(null, 'siblings')}>Siblings</Button>
    </div>
  )  
}

export default Stateobject;
