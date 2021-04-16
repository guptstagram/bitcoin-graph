import axios from "axios"

const getTimeFrame = () => {
    const date = new Date();
    const day = date.getDate();
    const endMonth = date.getMonth() + 1;
    const startMonth = date.getMonth() - 1;
    const year = date.getFullYear();
    return `start=${year}-${startMonth.length > 1 ? startMonth : "0" + startMonth}-${day}&end=${year}-${endMonth.length > 1 ? endMonth : "0" + endMonth}-${day}`
}

export const getCurrentValue = (currency) => {
    return dispatch => {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`).then(res => {
            dispatch({
                type: "CURRENT_VALUE_SUCCESS",
                value: `${res.data.bpi[currency].rate_float} ${res.data.bpi[currency].description}`,
            })
        }).catch(err => {
            dispatch({
                type: "CURRENT_VALUE_FAIL",
            })
        })
    }
}
export const getTrendData = (currency) => {
    return dispatch => {
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&${getTimeFrame()}`).then(res =>{
            dispatch({
                type:"TREND_DATA_SUCCESS",
                value:res.data.bpi,
            })
        }).catch(err=>{
            dispatch({
                type:"TREND_DATA_FAIL",
            })
        });
    }
}