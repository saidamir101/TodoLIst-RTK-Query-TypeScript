import { useState } from 'react'

import './App.css'
import { useAppDispatch,useAppSelector } from './hooks/hooks'
import { useDeluserMutation, useGetDataQuery } from './zapros/todos'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

// interface item{
//   id:number;
//   text:string;
//   completed`1:boolean
// }

const App:React.FC=()=> { 
  const {data=[]}=useGetDataQuery()
  const [deluser]=useDeluserMutation()
  const dispatch=useAppDispatch()

  

  return (
    <>
    <div className='flex justify-center items-center h-[100vh] bg-[#1212343a] gap-5'>
      {
        data.map((el:any)=>{
          return(
           <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={el.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>deluser(el.id)} size="small"><DeleteIcon/></Button>
        <Button size="small"><EditIcon/></Button>
      </CardActions>
    </Card>
           </div>
          )
        })
      }
    </div>
      
    </>
    
  )
}

export default App
