
import { createTheme } from '@mui/material/styles';

import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const breakPoints = createBreakpoints({})
const theme = 

 createTheme({
    palette:{
        purpleDark:{
            main:'#673F86'
        },
        purpleLight:{
            main:'#9980B7'
        },
    },
    typography:{
        h1:{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '55px',
            textTransform:'capitalize',
            [breakPoints.up('lg')]: {
                fontSize: '64px',
                lineHeight: '78px',
            },
        },
        h2:{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '24px',
            lineHeight: '29px',
            textTransform:'capitalize',
            [breakPoints.up('md')]: {
                fontSize: '36px',
                lineHeight: '44px',
            },
        },
        h3:{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            textTransform:'uppercase',
            color:'#fff',
            [breakPoints.up('md')]: {
                fontSize: '24px',
                lineHeight: '29px',
            },
        },
        body2:{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color:'#000000',
            [breakPoints.up('md')]: {
                fontSize: '20px',
                lineHeight: '24px',
            },
        },
    },
})
export default theme
