import Button from "@restart/ui/esm/Button";
import { useReducer } from "react";

const initializeState = () => ({
    width: 100
  })

const intialState = {width : 15};

const reducer = (state, action) => {
    switch (action) {
        case 'plus' :
            return {width : state.width + 15}
        case 'minus' :
            return {width : Math.max(state.width - 15,2)}
        default:
            throw new Error("Whats Going On?")
    }
}

const Bar = () => {
    const [state, dispatch] = useReducer(reducer,intialState, initializeState)

    return (
        <div style={{background : 'yellow', height : '50px', width : state.width}}>
            <div style={{marginTop : '4rem'}}>
                <Button className="btn btn-success" onClick={() => dispatch('plus')}>Increase</Button><br/><br/>
                <Button className="btn btn-danger" onClick={() => dispatch('minus')}>Decrease</Button>
            </div>
        </div>
    )
}

export default Bar;