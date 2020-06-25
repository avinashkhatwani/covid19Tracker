import React, {useState, useEffect} from 'react'
import styles from '../Charts/Chart.module.css'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'


const Chart = () =>{
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            // const fetchData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    }, []);

    
    const lineChart = (
        dailyData.length
        ? (
            <Line 
            data = {{
                labels: dailyData.map((data) => data.date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true
                }],
            }}
            />
        ) : null
    );

    // console.log("Here")
    // console.log(dailyData.map((data)=> data.confirmed))
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )


}



export default Chart