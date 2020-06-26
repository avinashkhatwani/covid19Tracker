import React, {useState, useEffect} from 'react'
import styles from '../Charts/Chart.module.css'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'


const Chart = ({data: {confirmed, recovered, deaths}, country}) =>{
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            // const fetchData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    }, []);

    const barChart = (
        confirmed
        ? (


            <Bar
            data={{labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
                {
                label: 'Covid Cases',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                borderWidth: 5,
                data: [confirmed.value, recovered.value, deaths.value]
                }
            ]}}
            options={{
                title:{
                display:true,
                text:`Current state in ${country}`,
                fontSize:20
                },
                legend:{
                display: false
                }
            }}
            />

        ): null



        //     <Bar 
        //     data={{
        //         labels:['Infected', 'Recovered', 'Deaths'],
        //         datasets: [{
        //             label: 'People',
        //             backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']
        //         }],
        //         data: [confirmed.value, recovered.value, deaths.value]   
        //     }}
        //     options={{
        //         legend: {display: false},
        //         title: { display: true, text:`Current state in ${country}`}
        //     }}
        //     />

        // ): null
    );

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
            {country ? barChart : lineChart}
        </div>
    )


}



export default Chart