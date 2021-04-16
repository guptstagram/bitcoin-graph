import React from "react"
import CurrencyComponent from "./components/currencyComponent"
import GraphComponent from "./components/graphComponent"

const App=()=>{
  return(
    <div className="wrapper-component">
      <CurrencyComponent/>
      <GraphComponent/>
    </div>
  )
}

export default App;
