import { useState } from 'react';
import { Container, Button, TextField, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from '@mui/material';



export default function Create() {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, settTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('onepiece');

    const handleSubmit = (e) => {
        e.preventDefault();
        settTitleError(false)
        setDetailsError(false)
        if (title === '') {
            settTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }

        if (title && details) {
            console.log(title, details, category)
        }
    }
    return (
        <Container>
            <form noValidate error="false" autoComplete="off" onSubmit={handleSubmit} >
                <TextField onChange={(e) => setTitle(e.target.value)}
                    error={titleError} variant='standard' label='Not Başlık' fullWidth margin='normal' />
                <br />
                <TextField onChange={(e) => setDetails(e.target.value)}
                    error={detailsError} variant='standard' label='Not Detay' fullWidth margin='normal' />
                <br />
                <FormControl  >
                    <FormLabel   >Not Kategorisi</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
                        <FormControlLabel value="onepiece" control={<Radio />} label='One Piece' />
                        <FormControlLabel value="bleach" control={<Radio />} label='Bleach' />
                        <FormControlLabel value="naruto" control={<Radio />} label='Naruto' />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button type='submit' variant='contained' color='primary' margin='normal' >Oluştur</Button>
            </form>
        </Container>
    )
}

