import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;
    }
    catch(error){

    }
}

export const fetchDailyData = async() => {
    try{
        // console.log(`${url}/daily`)
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((data) => ({
            confirmed: data.confirmed.total,
            deaths: data.deaths.total,
            date: data.reportDate,
        }));
        console.log(modifiedData)
        return modifiedData;
    }
    catch(error){

    }
}