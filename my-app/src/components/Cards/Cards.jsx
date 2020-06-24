import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = (props) => {
    // console.log(props)
    const daths = props.data.confirmed
    console.log(daths)
    if(!props.data.confirmed){
        return 'Loading...'
    }
    // console.log(props.data.confirmed.value)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.confirmed.value} duration={3} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.recovered.value} duration={3} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of Recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.deaths.value} duration={3} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards