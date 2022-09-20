import React, { useState, useEffect, useCallback } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Filters from '../components/Filters'

import CardReview from '../components/CardReview'
import Grid2 from '@mui/material/Unstable_Grid2'

interface Keyboard { 
    author: string,  
    date: string,  
    stars: number,
    description: string,
    kb: number, 
    name: string,
    URL: string
}

const data = [
    {
        author: 'xx',
        date: 'date',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'myge',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'naike',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimo magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'best keyboard',
        date: 'date',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'asd',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'asd',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimo magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'xx',
        date: 'date',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'asd',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'asd',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimo magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'xx',
        date: 'date',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'asd',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimos non perferendis totam quas enim fuga quidem veniam blanditiis magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },
    {
        author: 'asd',
        date: 'asd',
        stars: 2,
        kb: 1,
        description: 'Lorem ipsum dolimo magni aperiam.',
        name: 'testName',
        URL: 'testURL'
    },


]

function getDatos(){
    return new Promise<Array<Keyboard>>((resolve, reject) => {
        setTimeout(() => {
            return resolve(data);
        }, 300);
    })
} 

function Reviews(){

    const [loading, setloading] = useState(true)
    
    const [keyboardsFetched, setKeyoardsFetched] = useState<Array<Keyboard>>([])

    const [keyboardsDisplay, setKeyboardsDisplay] = useState<Array<Keyboard>>([])

    useEffect(() => {
        getDatos()
        .then((datos) => { 
            setloading(false)
            setKeyboardsDisplay(datos)
            setKeyoardsFetched(datos)})
    }, [])


    const modifyKeyboardDisplayed = (keyboardsToDisplay: Keyboard[]) => { 
        setKeyboardsDisplay(keyboardsToDisplay)
    }

    return ( 
        loading ? 
        <Box sx={{ 
            widht: '80vw',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
        <CircularProgress />
        </Box> 
        :
            <>
                <Filters 
                    handleInputChange={modifyKeyboardDisplayed} 
                    keyboardsFetched = {keyboardsFetched}
                />

                    <Grid2 
                        container 
                        spacing={2} 
                        paddingLeft={10} 
                        paddingTop={5}>
                        {keyboardsDisplay.map((keyboardItem) => {
                            return(
                                <Grid2 xs={6} md={3}  >
                                    <CardReview 
                                        name ={keyboardItem.name} 
                                        URL =       {keyboardItem.URL} 
                                        star =      {keyboardItem.stars} 
                                        author =    {keyboardItem.author} 
                                        description={keyboardItem.description} />
                                </Grid2>
                            )
                        })}
                    
                    </Grid2>
                
            </>
    )
}

export default Reviews;