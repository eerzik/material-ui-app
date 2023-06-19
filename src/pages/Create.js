import { useState } from 'react';
import { Container, Button, TextField } from '@mui/material';



export default function Create() {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, settTitleError] = useState('');
    const [detailsError, setDetailsError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
       settTitleError(false)
       setDetailsError(false)
       if(title==='')
       {
        settTitleError(true)
       }
       if(details==='')
       {
        setDetailsError(true)
       }

       if(title&&details)
       {
        console.log(title,details)
       }
    }
    return (
        <Container>
            <form noValidate error="false" autoComplete="off" onSubmit={ handleSubmit} >
                <TextField  onChange={(e)=>setTitle(e.target.value)}  
                 error={titleError} variant='standard' label='Not Başlık' fullWidth margin='normal' />
                <br/>
                <TextField onChange={(e)=>setDetails(e.target.value)}   
                error={detailsError} variant='standard' label='Not Detay' fullWidth margin='normal' />
                <br/>
                <Button type='submit' variant='contained' color='primary' margin='normal' >Oluştur</Button>
            </form>
        </Container>
    )
}

