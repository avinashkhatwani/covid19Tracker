import React, {useState, useEffect} from 'react'
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import cx from 'classnames'

import {fetchCountries} from '../../api'



const CountryPicker = ({handleCountryChange}) =>{

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() =>{
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchApi();
    }, [])

    // console.log(fetchedCountries)

    if(fetchedCountries.length){
        return(
            <div>
                <Grid container spacing={4} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
                        <CardContent className={styles.CardContent}>
                            <Typography variant="h5">
                                Pick a Country
                            </Typography>
                            <FormControl className={styles.formControl}>
                                <NativeSelect defaultValue="" onChange={(e)=> {handleCountryChange(e.target.value)}}>
                                    <option value="">Global</option>
                                    {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
                                </NativeSelect>
                            </FormControl>
                        </CardContent>
                    </Grid>
                </Grid>
                {/* <FormControl className={styles.formControl}>
                    <NativeSelect defaultValue="" onChange={(e)=> {handleCountryChange(e.target.value)}}>
                        <option value="global">Global</option>
                        {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
                    </NativeSelect>
                </FormControl> */}
                <br></br>
            </div>

        )
    }
    return(
        <div></div>
    )
}

export default CountryPicker