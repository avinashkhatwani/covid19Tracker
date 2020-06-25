import React, {useState, useEffect} from 'react'
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core'

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
                <FormControl className={styles.formControl}>
                    <NativeSelect defaultValue="" onChange={(e)=> {handleCountryChange(e.target.value)}}>
                        <option value="global">Global</option>
                        {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
                    </NativeSelect>
                </FormControl>
                <br></br>
            </div>

        )
    }
    return(
        <div></div>
    )
}

export default CountryPicker