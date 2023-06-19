import React, { useEffect, useState } from 'react';
import { Grid, Paper,Container } from '@mui/material';

const Notes = () => {

    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/notes').then(res =>
            res.json()
        ).then(data => setNotes(data))
    }, [])

    return (
        // <div>
        //   {notes.map(note=>(
        //     <p key={note.id} >{note.title}</p>
        //   ))}
        // </div>
        // <Grid container >
        //     <Grid item md={4} xs={12} sm={6} >
        //         <Paper>BİRİNCİ</Paper>
        //     </Grid>
        //     <Grid item md={4} xs={12} sm={6}>
        //         <Paper>İKİNCİ</Paper>
        //     </Grid>
        //     <Grid item md={4} xs={12} sm={6} >
        //         <Paper>ÜÇÜNCÜ</Paper>
        //     </Grid>
        // </Grid>
        <Container>
            <Grid container >
                {notes.map(note=>(
                    <Grid item key={note.id} xs={12} sm={12} md={6} lg={4}>
<Paper>{note.title}</Paper>
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
};

export default Notes;