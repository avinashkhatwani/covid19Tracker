import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {

    let changeUrl = url;
    if(country) {
        changeUrl = `${url}/countries/${country}`
    }

    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeUrl);
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;
    }
    catch(error){
        console.log(error)
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
        // console.log(modifiedData)
        return modifiedData;
    }
    catch(error){
        console.log(error)
    }
}

export const fetchCountries = async() => {
    try{
        const {data: {countries }} = await axios.get(`${url}/countries`)
        // console.log(data)
        return countries.map((data)=>data.name)
    }
    catch(error){

    }
}