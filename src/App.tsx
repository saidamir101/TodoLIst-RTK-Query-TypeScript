import { useState } from 'react'

import './App.css'
import { useAppDispatch,useAppSelector } from './hooks/hooks'
import { useAdduserMutation, useChekuserMutation, useDeluserMutation, useEdduserMutation, useGetDataQuery } from './zapros/todos'

import { handleChange } from './redusers/counterSlice';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



// interface item{
//   id:number;
//   completed:boolean
// }

const App:React.FC=()=> { 
  const {data=[]}=useGetDataQuery()
  const [deluser]=useDeluserMutation()
  const [chekuser]=useChekuserMutation()
  const [adduser]=useAdduserMutation()
  const [edduser]=useEdduserMutation()
  const dispatch=useAppDispatch()

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = (el:any) =>{
    dispatch(handleChange({type:"inpedd",settype:el.img}))
    dispatch(handleChange({type:"inpedd1",settype:el.name}))
    dispatch(handleChange({type:"idx",settype:el.id}))
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);


const inpadd=useAppSelector((store)=>store.counter.inpadd)
const inpadd1=useAppSelector((store)=>store.counter.inpadd1)
const inpedd=useAppSelector((store)=>store.counter.inpedd)
const inpedd1=useAppSelector((store)=>store.counter.inpedd1)
const idx=useAppSelector((store:any)=>store.counter.idx)


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  

  return (
    <>
    <div  className='p-[7.3%] flex flex-col items-center justify-center gap-5 bg-[#1212343a]'>
      <div className='flex  gap-5  justify-center'>
      <TextField value={inpadd}  onChange={(e)=>dispatch(handleChange({type:"inpadd",settype:e.target.value}))} id="outlined-basic" label="img" variant="outlined" />
      <TextField value={inpadd1} onChange={(e)=>dispatch(handleChange({type:"inpadd1",settype:e.target.value}))} id="outlined-basic" label="name" variant="outlined" />
      <Button onClick={()=>{adduser({img:inpadd,name:inpadd1,completed:false})} } size="small"><AddIcon sx={{fontSize:"35px"}}/></Button>

      
      
        
      </div>
      <div className='flex  flex-wrap gap-5 justify-center'>

     
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
        <Typography style={{color:el.completed?"red":"black",textDecoration:el.completed?"line-through":null}} gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>deluser(el.id)} size="small"><DeleteIcon/></Button>
        <Button onClick={()=>{handleOpen(el)}} size="small"><EditIcon/></Button>
        <Checkbox checked={el.completed} onChange={(e)=>chekuser({id:el.id,img:el.img,name:el.name,completed:e.target.checked})} {...label} />
      </CardActions>
    </Card>
           </div>
          )
        })
      }
       <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        <TextField value={inpedd} onChange={(e)=>dispatch(handleChange({type:"inpedd",settype:e.target.value}))}  id="outlined-basic" label="img" variant="outlined" />
      <TextField value={inpedd1} onChange={(e)=>dispatch(handleChange({type:"inpedd1",settype:e.target.value}))} id="outlined-basic" label="name" variant="outlined" />
      <Button onClick={()=>{edduser({img:inpedd,name:inpedd1,id:idx}),handleClose()} } size="small"><AddIcon sx={{fontSize:"35px"}}/></Button>
        </Box>
      </Modal>
    </div>
       </div>
    </div>
      
    </>
    
  )
}

export default App
