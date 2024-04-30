import { useSelector, useDispatch } from "react-redux"
import "./Counter.css"
import { arttir, azalt, sil } from "../../store/counterReducer"

const Counter = () => {

  //? Global state'den veri okumak için useSelector hook'u kullanılır
 const count = useSelector((state) => state.count)
 const dispatch = useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive" 
        // onClick= {() => dispatch({type: "ARTTIR"})}
        onClick= {() => dispatch({type: arttir})}
        >increase
        </button>
        <button className="counter-button zero" 
        // onClick= {() => dispatch({type : "SIL"})}
        onClick= {() => dispatch({type : sil})}
        >reset
        </button>
        <button className="counter-button negative" 
        // onClick={() => dispatch({type: "AZALT"})}
        onClick={() => dispatch({type: azalt})}
        >decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
