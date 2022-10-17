import { IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    paper:{
     p:'2px 4px',
     alignItems:'center',
     width:'275px',
     display:{xs:'none',lg:'flex'},   
    },
    inputBase:{
        ml:1,
        flex:1,
        
    }
}

export const SearchInput = () => {
  return (
    <Paper component='form' sx={styles.paper}>
        <InputBase placeholder='Search' inputbase={{'aria-label':'search'}} sx={styles.InputBase}/>
        <IconButton type='submit' sx={{p:'10px'}} aria-label='search'>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}
