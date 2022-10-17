import { Box, Link } from '@mui/material'
import React from 'react'

import whiteArrow from '../../assets/chevron-down-white.svg'

import arrow from '../../assets/chevron-down.svg'

import { styles } from './styles'

const pages = [
    {title:'Home', arrow:false},
    {title:'About', arrow:false},
    {title:'Course', arrow:true},
    {title:'Page', arrow:true},
    {title:'Blog', arrow:true},
    {title:'Contact', arrow:false},
]
export const Navbar = ({white}) => {
  return (
    <Box sx={styles.navbar}>
        {pages.map((page,index)=>(
            <Link key={index} sx={{...styles.link,color:white ? '#fff':'#000'}}>
                {page.title}{page.arrow && (
                    <Box component='img' src={white ? whiteArrow : arrow} sx={styles.arrow}></Box>
                )}
            </Link>
        ))}
    </Box>
  )
}
