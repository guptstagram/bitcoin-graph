import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {getCurrentValue,getTrendData} from "../actions/bitcoinActions";

const CurrencyComponent=()=>{

    const dispatch=useDispatch();
    const bitcoinValue=useSelector(state=>state.priceReducer);

    const [currency,setCurrency]=React.useState("USD");

    const handleCurrencyChange=(e)=>{
        e.preventDefault();
        setCurrency(e.target.value);
    }

    React.useEffect(()=>{
        dispatch(getCurrentValue(currency));
        dispatch(getTrendData(currency));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currency])

    return(
        <div className="currency-component">
            <p>1 Bitcoin Equals</p>
            <select name="currencies" id="currencies" onChange={handleCurrencyChange} value={currency}>
                <option value="USD">United States Dollar (USD)</option>
                <option value="GBP">British Pound Sterling (GBP)</option>
                <option value="EUR">Euro (EUR)</option>
            </select>
            <h1>{bitcoinValue}</h1>
        </div>
    )
}

export default CurrencyComponent;